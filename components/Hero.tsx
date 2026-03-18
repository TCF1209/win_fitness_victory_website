"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        {/* TODO: Replace with actual image — Hero background gym photo */}
        <div className="w-full h-[130%] bg-gray-800" />
        <div className="absolute inset-0 bg-navy/75" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3QgZmlsdGVyPSJ1cmwoI2EpIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+PC9zdmc=')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-wide">
            FORGE YOUR <span className="text-accent">LIMITS</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-muted max-w-xl"
        >
          Klang&apos;s Premier Fitness Club — Bandar Botanik
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 flex items-center gap-2 text-sm text-white/80"
        >
          <span className="text-yellow-400">&#9733;</span>
          <span className="font-semibold">4.9</span>
          <span className="text-muted">&middot; 435 Google Reviews</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/60333180999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wider transition-colors"
          >
            Join Now
          </a>
          <a
            href="#classes"
            className="border border-neon text-neon hover:bg-neon/10 px-8 py-3 rounded-md font-semibold uppercase tracking-wider transition-colors"
          >
            Explore Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
