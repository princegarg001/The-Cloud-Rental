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
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Advanced IT Infrastructure",
    tagline: "Reliable, scalable, and secure",
    description:
      "We design, deploy, and manage enterprise-grade IT infrastructure that forms the backbone of your digital operations. Our solutions ensure maximum performance, security, and reliability.",
    features: [
      "Server deployment & configuration",
      "Data center setup & management",
      "Virtualization (VMware, Hyper-V)",
      "Disaster recovery & backup solutions",
      "Storage Area Network (SAN/NAS)",
      "High availability clustering",
    ],
    color: "electric",
    gradient: "from-electric-500 to-electric-700",
  },
  {
    icon: Network,
    title: "Networking & Connectivity",
    tagline: "Seamless, secure communications",
    description:
      "Enterprise-grade network architecture, implementation, and management. We build networks that are fast, secure, and designed to grow with your business.",
    features: [
      "LAN/WAN design & implementation",
      "SD-WAN solutions",
      "Firewall & network security",
      "WiFi planning & deployment",
      "VPN & remote access solutions",
      "Network monitoring & optimization",
    ],
    color: "violet",
    gradient: "from-violet-500 to-violet-700",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Scale without limits",
    description:
      "End-to-end cloud services from migration strategy to ongoing management. We help you leverage cloud platforms to reduce costs and increase agility.",
    features: [
      "Cloud migration & strategy",
      "AWS / Azure / GCP management",
      "Hybrid cloud architecture",
      "Cloud security & compliance",
      "Cost optimization & FinOps",
      "Cloud-native application support",
    ],
    color: "teal",
    gradient: "from-teal-400 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    tagline: "Protect your digital assets",
    description:
      "Comprehensive security solutions to safeguard your infrastructure. From threat detection to compliance, we keep your business secure.",
    features: [
      "Vulnerability assessment & pen testing",
      "SIEM & SOC services",
      "Endpoint protection (EDR/XDR)",
      "Email security & anti-phishing",
      "Compliance (ISO 27001, GDPR)",
      "Security awareness training",
    ],
    color: "coral",
    gradient: "from-coral-400 to-coral-600",
  },
  {
    icon: MonitorSmartphone,
    title: "Managed IT Services",
    tagline: "Focus on your business, we handle IT",
    description:
      "Proactive monitoring, management, and 24/7 support for your entire IT environment. Reduce downtime and free your teams to focus on core business.",
    features: [
      "24/7 infrastructure monitoring",
      "IT help desk & user support",
      "Patch management & updates",
      "IT asset management",
      "Vendor relationship management",
      "Strategic IT consulting",
    ],
    color: "electric",
    gradient: "from-electric-400 to-violet-500",
  },
  {
    icon: ShoppingCart,
    title: "IT Trading & Technology",
    tagline: "Best products, best prices",
    description:
      "Authorized reseller of enterprise IT hardware, software, and peripherals from leading global brands. Competitive pricing with expert guidance.",
    features: [
      "Servers, storage & networking gear",
      "Laptops, desktops & workstations",
      "Software licenses (Microsoft, Adobe)",
      "UPS & power solutions",
      "Cables, racks & accessories",
      "AMC & warranty management",
    ],
    color: "violet",
    gradient: "from-violet-400 to-coral-500",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  electric: {
    bg: "bg-electric-500/10",
    text: "text-electric-400",
    border: "border-electric-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
  },
  teal: {
    bg: "bg-teal-400/10",
    text: "text-teal-400",
    border: "border-teal-400/20",
  },
  coral: {
    bg: "bg-coral-400/10",
    text: "text-coral-400",
    border: "border-coral-400/20",
  },
};

export default function ServicesPageContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electric-600/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          >
            Innovative IT Solutions
            <br />
            <span className="gradient-text">In Partnership With Industry Leaders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Comprehensive end-to-end IT services designed to accelerate your
            digital transformation and keep you ahead of the curve.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              const colors = colorMap[service.color];
              const isExpanded = expanded === i;

              return (
                <ServiceCard
                  key={service.title}
                  service={service}
                  Icon={Icon}
                  colors={colors}
                  index={i}
                  isExpanded={isExpanded}
                  onToggle={() => setExpanded(isExpanded ? null : i)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-600/10 via-violet-600/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Need a Custom Solution?
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto">
            Every business is unique. Let&apos;s discuss your specific requirements
            and craft a solution that fits perfectly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-electric-600 to-violet-600 text-white shadow-2xl shadow-electric-600/20 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
  Icon,
  colors,
  index,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[0];
  Icon: React.ComponentType<{ className?: string }>;
  colors: { bg: string; text: string; border: string };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden cursor-pointer`}
      onClick={onToggle}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-8 h-8 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold mb-1">
              {service.title}
            </h3>
            <p className="text-white/30 text-sm">{service.tagline}</p>
          </div>
          <div
            className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
              isExpanded ? "rotate-45" : ""
            }`}
          >
            <span className="text-white/50 text-xl">+</span>
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-6 mt-6 border-t border-white/5">
            <p className="text-white/50 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                  <span className="text-sm text-white/60">{feat}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border} hover:scale-105 transition-all`}
              onClick={(e) => e.stopPropagation()}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
