"use client";

import { motion } from "framer-motion";

const amenities = [
  { icon: "🏋️", label: "State-of-the-art Equipment" },
  { icon: "🧖", label: "Sauna" },
  { icon: "🚿", label: "Individual Washrooms" },
  { icon: "📊", label: "InBody Analysis" },
  { icon: "👨‍🏫", label: "Certified Trainers" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neon text-sm uppercase tracking-widest mb-2">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            YOUR FITNESS <span className="text-accent">JOURNEY</span> STARTS
            HERE
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            WinFit Fitness Factory is a luxury concept fitness club at Bandar
            Botanik, Klang — equipped with state-of-the-art cardio machines,
            free weights, kettlebells, TRX, and two dedicated studios for
            aerobic and dance classes. With certified trainers on-site, we offer
            specialized programs for scoliosis, autism athletes, seniors, and
            exercise therapy — because fitness is for everyone.
          </p>

          {/* Amenities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {amenities.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* TODO: Replace with actual image — Gym interior photo */}
          <div className="w-full aspect-[4/3] bg-gray-800 rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
}
