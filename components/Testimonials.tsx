"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="py-20 md:py-28 bg-blue/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-neon text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            WHAT OUR <span className="text-accent">MEMBERS</span> SAY
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy border border-white/10 rounded-lg p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-muted text-sm mt-4 font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
