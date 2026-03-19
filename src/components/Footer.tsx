"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    { name: "IT Infrastructure", href: "/services" },
    { name: "Networking & Connectivity", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
    { name: "Managed IT Services", href: "/services" },
    { name: "IT Trading", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Case Studies", href: "/blog" },
    { name: "Documentation", href: "/blog" },
    { name: "Support", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5 overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden relative">
                <Image src="/logo.png" alt="The Cloud Rental Logo" fill className="object-cover" />
              </div>
              <span className="font-display text-xl font-bold">
                The Cloud <span className="gradient-text-blue">Rental</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Expert IT infrastructure, cloud computing, and networking solutions
              designed to boost your business efficiency and drive digital
              transformation.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@thecloudrental.com"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-electric-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@thecloudrental.com
              </a>
              <a
                href="tel:+919818037900"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-electric-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9818037900
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  The Roselia D1102, Sector 95A,
                  <br />
                  Gurugram, Haryana, India
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-white/35 hover:text-white/70 transition-colors"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} The Cloud Rental. All rights reserved.
            GST: 06AAVFT0039R1ZE
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
