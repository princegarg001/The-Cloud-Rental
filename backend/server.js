const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: [
      "https://thecloudrental.com",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10kb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: "Too many requests. Please try again later." },
});
app.use(limiter);

// Contact form rate limiter (stricter)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: "Too many contact submissions. Please try again in an hour." },
});

// ======================
// API Routes
// ======================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    // Log the submission
    console.log("📧 New Contact Submission:", {
      name,
      email,
      phone: phone || "N/A",
      company: company || "N/A",
      service: service || "N/A",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Nodemailer example below)
    // ---------------------------------------------------------
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: `"TCR Website" <${process.env.EMAIL_USER}>`,
    //   to: 'info@thecloudrental.com',
    //   subject: `New Contact: ${name} - ${service || 'General'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Service:</strong> ${service || 'N/A'}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });
    // ---------------------------------------------------------

    res.json({
      success: true,
      message: "Thank you! We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Booking endpoint
app.post("/api/book", contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, service, date, notes } = req.body;

    // Validation
    if (!name || !email || !phone || !service || !date) {
      return res
        .status(400)
        .json({
          error: "Name, email, phone, service, and date are required.",
        });
    }

    console.log("📅 New Booking:", {
      name,
      email,
      phone,
      service,
      date,
      notes: notes || "N/A",
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: "Booking confirmed! We will contact you shortly.",
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Start server
app.listen(PORT, () => {
  console.log(`
  🚀 The Cloud Rental API Server
  ================================
  📡 Running on: http://localhost:${PORT}
  🏥 Health:     http://localhost:${PORT}/api/health
  📧 Contact:    POST http://localhost:${PORT}/api/contact
  📅 Book:       POST http://localhost:${PORT}/api/book
  ================================
  `);
});
