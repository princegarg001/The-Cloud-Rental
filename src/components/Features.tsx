"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Globe,
  HeadsetIcon,
  RefreshCcw,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across multiple regions with enterprise-grade reliability and low latency.",
    gradient: "from-electric-500 to-electric-700",
  },
  {
    icon: RefreshCcw,
    title: "99.9% Uptime SLA",
    description: "Industry-leading uptime guarantee backed by proactive monitoring and rapid response.",
    gradient: "from-violet-500 to-violet-700",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "Stay ahead with the latest technologies — AI-driven analytics, automation, and more.",
    gradient: "from-teal-400 to-teal-600",
  },
  {
    icon: HeadsetIcon,
    title: "24/7 Expert Support",
    description: "Round-the-clock support from certified engineers who understand your infrastructure.",
    gradient: "from-coral-400 to-coral-600",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Start small, scale infinitely. Our solutions grow with your business without disruption.",
    gradient: "from-electric-400 to-violet-500",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your own dedicated team of IT experts who know your environment inside and out.",
    gradient: "from-violet-400 to-coral-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-violet-300 mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
            Built for{" "}
            <span className="gradient-text">Enterprise Performance</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            We combine deep technical expertise with a client-first approach to
            deliver IT solutions that truly make a difference.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
                  {/* Gradient line top */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Icon with gradient background */}
                  <div className="relative w-12 h-12 mb-6">
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <div className="relative w-full h-full rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white/80" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
