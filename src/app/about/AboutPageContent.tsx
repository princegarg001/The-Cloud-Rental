"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Heart,
  Users,
  Trophy,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Client Satisfaction",
    description:
      "We value our clients, understand their business, and pledge our commitment to contribute to their success.",
    color: "text-coral-400",
    bg: "bg-coral-400/10",
  },
  {
    icon: Users,
    title: "Team Work",
    description:
      "We value team accomplishments and seek opportunities to join with colleagues to advance client success.",
    color: "text-electric-400",
    bg: "bg-electric-400/10",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We value, above all, our integrity in everything we do. Trust is the foundation of every relationship.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously upgrade to new and emerging technologies to deliver cutting-edge solutions.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    icon: Trophy,
    title: "Quality",
    description:
      "We value quality in all we do — in quality we deliver the perceived value of our products and services.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Target,
    title: "Focus",
    description:
      "A domain knowledge pool across multiple business domains allows us to target solutions precisely.",
    color: "text-electric-300",
    bg: "bg-electric-300/10",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started as a small team of IT enthusiasts in Gurugram." },
  { year: "2021", title: "50+ Clients", description: "Expanded services to cover cloud, security & networking." },
  { year: "2022", title: "Enterprise Partnerships", description: "Became authorized partners with leading OEMs." },
  { year: "2023", title: "Managed Services Launch", description: "24/7 managed IT services division established." },
  { year: "2024", title: "500+ Projects", description: "Crossed 500 successful project deployments." },
  { year: "2025", title: "National Expansion", description: "Expanded operations across multiple Indian cities." },
];

export default function AboutPageContent() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-violet-300 mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            Powering Businesses With
            <br />
            <span className="gradient-text">Digital Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            From a small team of IT enthusiasts to a leading provider of
            enterprise IT solutions — discover the journey of The Cloud Rental.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Built on a Foundation of{" "}
                <span className="gradient-text-blue">Expertise & Trust</span>
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  The Cloud Rental was born from a vision to help small and
                  medium businesses overcome their technology challenges. What
                  started as a passionate team of IT professionals has grown into
                  a leading provider of comprehensive IT services.
                </p>
                <p>
                  Today, we serve a diverse range of clients — from ambitious
                  startups to established enterprises. We work closely with each
                  client to understand their unique needs and deliver customized
                  solutions that drive real business results.
                </p>
                <p>
                  Our team brings deep expertise across infrastructure, cloud,
                  networking, and cybersecurity — backed by partnerships with
                  industry leaders like Cisco, Dell, Microsoft, and AWS.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "50+", label: "Enterprise Clients" },
                  { value: "5+", label: "Years Experience" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass text-center hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="text-3xl font-display font-bold gradient-text-blue mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-teal-300 mb-6">
            Our Mission
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Delivering High-Quality IT Services That Help Businesses{" "}
            <span className="gradient-text">Thrive in the Digital Age</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            We provide innovative, tailored solutions designed to meet each
            client&apos;s unique needs. Our commitment is to empower businesses
            with technology that creates lasting competitive advantages.
          </p>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-coral-300 mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
              The Principles That <span className="gradient-text">Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/30 via-violet-500/30 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 border-4 border-navy-950 z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-sm font-bold gradient-text-blue">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-white/40 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-600/10 via-violet-600/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/40 text-lg mb-8">
            Join 50+ businesses that trust The Cloud Rental for their IT needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-electric-600 to-violet-600 text-white shadow-2xl shadow-electric-600/20 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
