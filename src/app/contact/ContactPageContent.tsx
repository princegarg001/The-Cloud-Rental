"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-electric-600/8 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            Let&apos;s Start a{" "}
            <span className="gradient-text">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Have a project in mind or need IT support? We&apos;d love to hear
            from you. Reach out and let&apos;s explore how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact cards */}
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 9818037900",
                  href: "tel:+919818037900",
                  color: "text-electric-400",
                  bg: "bg-electric-400/10",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@thecloudrental.com",
                  href: "mailto:info@thecloudrental.com",
                  color: "text-violet-400",
                  bg: "bg-violet-400/10",
                },
                {
                  icon: MessageSquare,
                  title: "WhatsApp",
                  content: "Message us directly",
                  href: "https://wa.me/919818037900",
                  color: "text-teal-400",
                  bg: "bg-teal-400/10",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content:
                    "The Roselia D1102, Sector 95A, Gurugram, Haryana, India",
                  href: "https://maps.google.com/?q=Sector+95A+Gurugram+Haryana+India",
                  color: "text-coral-400",
                  bg: "bg-coral-400/10",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-sm">{item.content}</p>
                    </div>
                  </a>
                );
              })}

              {/* Business hours */}
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-electric-400" />
                  <h3 className="font-display font-semibold">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-white/40">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white/60">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white/60">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-coral-400">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-white/40 mb-8">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="text-sm text-electric-400 hover:text-electric-300 transition-colors"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-white/40 text-sm mb-8">
                      Fill out the form below and our team will respond promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm text-white/50 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm text-white/50 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm text-white/50 mb-2"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm text-white/50 mb-2"
                          >
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm text-white/50 mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all appearance-none"
                        >
                          <option value="" className="bg-navy-900">
                            Select a service
                          </option>
                          <option value="infrastructure" className="bg-navy-900">
                            IT Infrastructure
                          </option>
                          <option value="networking" className="bg-navy-900">
                            Networking & Connectivity
                          </option>
                          <option value="cloud" className="bg-navy-900">
                            Cloud Solutions
                          </option>
                          <option value="security" className="bg-navy-900">
                            Cybersecurity
                          </option>
                          <option value="managed" className="bg-navy-900">
                            Managed IT Services
                          </option>
                          <option value="trading" className="bg-navy-900">
                            IT Trading
                          </option>
                          <option value="other" className="bg-navy-900">
                            Other
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm text-white/50 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/25 transition-all resize-none"
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-electric-600 to-violet-600 hover:from-electric-500 hover:to-violet-500 text-white shadow-lg shadow-electric-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
