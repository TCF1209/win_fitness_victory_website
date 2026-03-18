"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amir H.",
    rating: 5,
    quote:
      "Best gym in Klang, hands down. The trainers are professional and the equipment is top-notch. Been a member for 2 years and never looked back.",
  },
  {
    name: "Michelle T.",
    rating: 5,
    quote:
      "Love the Zumba and yoga classes! The atmosphere is motivating and the facilities are always clean. Highly recommend to anyone looking for a quality gym.",
  },
  {
    name: "Rajan K.",
    rating: 5,
    quote:
      "The personal training sessions transformed my fitness journey. Coach guided me through my scoliosis-safe exercises. Truly a gym that cares about every member.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative py-20 md:py-28 grid-pattern overflow-hidden">
      {/* Dim overlay so grid pattern doesn't overwhelm */}
      <div className="absolute inset-0 bg-navy/80 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-16">
        {/* Header — understated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted text-sm uppercase tracking-[0.2em]">
            Member Voices
          </p>
        </motion.div>

        {/* Quote area */}
        <div className="relative min-h-[200px]">
          {/* Decorative large quote mark */}
          <span className="absolute -top-6 -left-2 font-display text-7xl md:text-[160px] text-accent/[0.07] leading-none select-none pointer-events-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/90 text-base md:text-xl leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <p className="text-muted text-sm mt-6 font-semibold tracking-wider uppercase">
                — {t.name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="text-white/30 hover:text-white/60 transition-colors p-3"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-muted text-sm tabular-nums">
            {current + 1} / {testimonials.length}
          </span>
          <button
            onClick={next}
            className="text-white/30 hover:text-white/60 transition-colors p-3"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
