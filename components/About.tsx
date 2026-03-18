"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
  {
    label: "State-of-the-art Equipment",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2m0 4V8m0 4h12m-12-4h12m0 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2m0-4v4" />
      </svg>
    ),
  },
  {
    label: "Sauna",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    label: "Individual Washrooms",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    label: "InBody Analysis",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    label: "Certified Trainers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Vertical section label */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="text-neon/15 font-display text-sm tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          About Us
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-16 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
            YOUR FITNESS JOURNEY
          </h2>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <p className="text-muted leading-relaxed mb-8">
            WinFit Fitness Factory is a luxury concept fitness club at Bandar
            Botanik, Klang — equipped with state-of-the-art cardio machines,
            free weights, kettlebells, TRX, and two dedicated studios for
            aerobic and dance classes. With certified trainers on-site, we offer
            specialized programs for scoliosis, autism athletes, seniors, and
            exercise therapy — because fitness is for everyone.
          </p>

          {/* Amenities */}
          <div className="space-y-3">
            {amenities.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 text-white/70"
              >
                <span className="text-neon">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image with decorative frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Offset frame decoration */}
          <div className="absolute -top-3 -right-3 w-full h-full border-t-2 border-r-2 border-neon/30 rounded-sm pointer-events-none" />
          <Image
            src="/images/about/gym_room_photo.jpg"
            alt="Win Fitness Factory gym interior"
            width={800}
            height={600}
            className="relative w-full aspect-[4/3] object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
