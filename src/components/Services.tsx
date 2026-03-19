"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Server,
  Network,
  ShoppingCart,
  Cloud,
  ShieldCheck,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Advanced IT Infrastructure",
    description:
      "Reliable, scalable, and secure IT infrastructure services. From server deployment to data center management, we build foundations that scale.",
    features: ["Server Management", "Data Center Solutions", "Virtualization", "Disaster Recovery"],
    color: "from-electric-500 to-electric-700",
    shadowColor: "shadow-electric-500/20",
    iconBg: "bg-electric-500/10",
    iconColor: "text-electric-400",
  },
  {
    icon: Network,
    title: "Networking & Connectivity",
    description:
      "Enterprise-grade network design, implementation, and management. Secure connectivity solutions that keep your business running 24/7.",
    features: ["LAN/WAN Design", "SD-WAN", "Network Security", "WiFi Solutions"],
    color: "from-violet-500 to-violet-700",
    shadowColor: "shadow-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: ShoppingCart,
    title: "IT Trading & Technology",
    description:
      "Authorized reseller of leading IT hardware, software, and technology products from global brands at competitive prices.",
    features: ["Hardware Procurement", "Software Licensing", "IT Equipment", "Tech Consulting"],
    color: "from-coral-500 to-coral-600",
    shadowColor: "shadow-coral-500/20",
    iconBg: "bg-coral-500/10",
    iconColor: "text-coral-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "End-to-end cloud migration, deployment, and management services. Hybrid and multi-cloud strategies tailored for your business.",
    features: ["Cloud Migration", "AWS / Azure / GCP", "Cloud Security", "Cost Optimization"],
    color: "from-teal-400 to-teal-600",
    shadowColor: "shadow-teal-400/20",
    iconBg: "bg-teal-400/10",
    iconColor: "text-teal-400",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. From threat detection to compliance management.",
    features: ["Threat Detection", "Firewall Management", "VAPT", "Compliance"],
    color: "from-electric-400 to-violet-500",
    shadowColor: "shadow-electric-400/20",
    iconBg: "bg-electric-400/10",
    iconColor: "text-electric-300",
  },
  {
    icon: MonitorSmartphone,
    title: "Managed IT Services",
    description:
      "Proactive IT management and support. Let us handle your technology so you can focus on growing your business.",
    features: ["24/7 Monitoring", "Help Desk", "IT Consulting", "Maintenance"],
    color: "from-violet-400 to-coral-500",
    shadowColor: "shadow-violet-400/20",
    iconBg: "bg-violet-400/10",
    iconColor: "text-violet-300",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-28 bg-navy-950 overflow-hidden" id="services">
      {/* BG accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
            Innovative IT Solutions{" "}
            <span className="gradient-text">Built to Scale</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            From infrastructure to cybersecurity, we deliver end-to-end IT
            services that power your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 cursor-pointer ${
                  hoveredIndex === i ? service.shadowColor + " shadow-2xl" : ""
                }`}
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
