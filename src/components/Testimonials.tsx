"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, TechVista Solutions",
    content:
      "The Cloud Rental transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance tenfold.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Nexus Enterprises",
    content:
      "Outstanding networking solutions and 24/7 support. They designed and implemented our multi-site WAN connectivity flawlessly. A truly reliable technology partner.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, DataStream Analytics",
    content:
      "From cybersecurity audits to complete infrastructure overhaul, The Cloud Rental delivered beyond expectations. Their team's dedication and technical depth is remarkable.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "IT Head, GlobalTrade Corp",
    content:
      "We've been working with The Cloud Rental for 3 years now. Their managed IT services have eliminated downtime and our team can focus entirely on business growth.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="relative py-28 bg-navy-950 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-teal-300 mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Hear from businesses that have transformed their IT operations with
            our solutions.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl glass border border-white/5">
            {/* Quote icon */}
            <div className="absolute top-6 right-8">
              <Quote className="w-12 h-12 text-electric-500/10" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <motion.p
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 font-light italic"
            >
              &ldquo;{testimonials[current].content}&rdquo;
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold font-display text-white">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-white/40">
                  {testimonials[current].role}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-electric-500 w-8"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white/60" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white/60" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
