"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Cisco",
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

        {/* Partner logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center py-8"
        >
          {partners.map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className={`px-10 py-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-electric-500/30 transition-all duration-300 shadow-lg hover:shadow-electric-500/10 cursor-pointer animate-float`}
            >
              <span className="text-2xl font-display font-semibold text-white/40 hover:text-white transition-colors whitespace-nowrap tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
