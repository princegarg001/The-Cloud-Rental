"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPremiumToggleOn, setIsPremiumToggleOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync premium toggle with document class for Light/Dark Mode
  useEffect(() => {
    if (isPremiumToggleOn) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [isPremiumToggleOn]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-navy-950/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
                  <Image src="/logo.png" alt="The Cloud Rental Logo" fill className="object-cover" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight">
                  The Cloud
                  <span className="gradient-text-blue"> Rental</span>
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* CTA + Premium Toggle + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919818037900"
                className="hidden sm:flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+91 98180 37900</span>
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-electric-600 to-violet-600 hover:from-electric-500 hover:to-violet-500 text-white shadow-lg shadow-electric-600/20 hover:shadow-electric-500/30 transition-all duration-300 hover:scale-105"
              >
                Get a Quote
              </Link>
              
              {/* Premium Toggle Button */}
              <button
                type="button"
                onClick={() => setIsPremiumToggleOn(!isPremiumToggleOn)}
                className="hidden md:block relative w-14 h-7 rounded-full p-[2px] transition-all duration-300 cursor-pointer border backdrop-blur-md"
                style={{
                  backgroundColor: isPremiumToggleOn ? "rgba(6, 148, 255, 0.3)" : "rgba(255, 255, 255, 0.08)",
                  borderColor: isPremiumToggleOn ? "rgba(72, 206, 255, 0.5)" : "rgba(255, 255, 255, 0.15)",
                  boxShadow: isPremiumToggleOn ? "0 0 20px rgba(30, 176, 255, 0.5)" : "none"
                }}
                aria-label="Premium feature toggle"
              >
                <div
                  className="w-5 h-5 rounded-full transition-all duration-300 ease-out"
                  style={{
                    transform: isPremiumToggleOn ? "translateX(26px)" : "translateX(0px)",
                    backgroundColor: isPremiumToggleOn ? "#48ceff" : "rgba(255, 255, 255, 0.6)",
                    boxShadow: isPremiumToggleOn ? "0 0 15px #48ceff" : "none"
                  }}
                />
              </button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-xl"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative pt-24 px-6 flex flex-col gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-electric-600 to-violet-600 text-white"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
