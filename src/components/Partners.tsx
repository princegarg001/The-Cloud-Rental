"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Cisco",
  "Dell Technologies",
  "HP Enterprise",
  "Microsoft",
  "AWS",
  "Fortinet",
  "VMware",
  "Lenovo",
  "Motadata",
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative py-20 bg-navy-950 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-white/30 mb-10 uppercase tracking-widest"
        >
          Trusted partners & technology alliances
        </motion.p>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex"
          >
            <div className="flex w-max gap-12 items-center animate-marquee hover:[animation-play-state:paused] py-8">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className={`flex-shrink-0 px-8 py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-electric-500/30 transition-all duration-300 shadow-lg hover:shadow-electric-500/10 cursor-pointer ${
                    i % 2 === 0 ? "animate-float" : "animate-float-slow"
                  }`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span className="text-xl font-display font-semibold text-white/40 hover:text-white transition-colors whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
