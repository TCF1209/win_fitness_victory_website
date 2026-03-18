"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const heroImages = [
  "/images/hero/gym_room_photo.jpg",
  "/images/hero/gym_room_photo_2.jpg",
  "/images/hero/gym_room_photo_3.jpg",
  "/images/hero/gym_room_photo_4.jpg",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background with Slideshow */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Win Fitness Factory gym interior"
            className="absolute inset-0 w-full h-[130%] object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      </motion.div>

      {/* Grid pattern overlay — left side only */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" style={{ maskImage: "linear-gradient(to right, black 30%, transparent 60%)" }} />

      {/* Decorative diagonal slashes — top right */}
      <div className="absolute top-20 right-12 md:right-24 hidden md:block pointer-events-none">
        <svg width="40" height="100" viewBox="0 0 40 100" fill="none" className="opacity-25">
          <line x1="30" y1="0" x2="5" y2="90" stroke="#00c2ff" strokeWidth="2" />
          <line x1="40" y1="5" x2="15" y2="95" stroke="#00c2ff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Slideshow Controls */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white/70 transition-colors p-3"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white/70 transition-colors p-3"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-neon w-8" : "bg-white/30 w-4 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-5 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-wide"
        >
          WHERE <span className="text-accent">KLANG</span> TRAINS
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-16 h-0.5 bg-accent mt-5 origin-left glow-accent"
        />

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 text-lg md:text-xl max-w-xl"
        >
          <span className="text-white font-semibold">Win Fitness Factory</span>
          <span className="text-muted"> — Bandar Botanik, Klang</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-3 flex items-center gap-2 text-sm text-white/70"
        >
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-semibold">4.9</span>
          <span className="text-muted">&middot; 435 Google Reviews</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#join"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-semibold uppercase tracking-wider transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            Join Now
          </a>
          <a
            href="#classes"
            className="border border-neon/50 text-neon hover:bg-neon/10 px-8 py-3 font-semibold uppercase tracking-wider transition-colors"
          >
            Explore Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
