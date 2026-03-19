"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/team-collaboration.png",
    alt: "IT team collaboration and consulting",
    caption: "Team Collaboration",
  },
  {
    src: "/gallery/data-center.png",
    alt: "Modern data center infrastructure",
    caption: "Data Center Solutions",
  },
  {
    src: "/gallery/cloud-solutions.png",
    alt: "Cloud computing and solutions",
    caption: "Cloud Solutions",
  },
  {
    src: "/gallery/network-setup.png",
    alt: "Enterprise network setup and configuration",
    caption: "Network Engineering",
  },
  {
    src: "/gallery/cybersecurity-ops.png",
    alt: "Cybersecurity operations center",
    caption: "Security Operations",
  },
  {
    src: "/gallery/office-meeting.png",
    alt: "IT consulting and business meetings",
    caption: "IT Consulting",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicate for seamless infinite loop
  const allImages = [...galleryImages, ...galleryImages];

  return (
    <section ref={ref} className="relative py-28 bg-navy-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-electric-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-4">
            Our Gallery
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
            Explore Our{" "}
            <span className="gradient-text">Innovative IT Solutions</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            A glimpse into our world-class IT infrastructure, team expertise,
            and the solutions we build for enterprises.
          </p>
        </motion.div>
      </div>

      {/* Infinite auto-sliding gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        {/* Slider track */}
        <div className="flex gap-6 animate-gallery-scroll hover:[animation-play-state:paused]">
          {allImages.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="flex-shrink-0 group relative w-[350px] sm:w-[400px] lg:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/5"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 350px, (max-width: 1024px) 400px, 450px"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-electric-500 to-violet-500 rounded-full" />
                    <span className="text-xs uppercase tracking-widest text-electric-300 font-medium">
                      Solutions
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {image.caption}
                  </h3>
                </div>
              </div>

              {/* Subtle gradient always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy-950/60 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes gallery-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-gallery-scroll {
            animation: gallery-scroll 30s linear infinite;
          }
        `}</style>
      </motion.div>
    </section>
  );
}
