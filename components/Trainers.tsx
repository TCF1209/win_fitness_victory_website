"use client";

import { motion } from "framer-motion";

const trainers = [
  {
    name: "Coach Ahmad",
    specialization: "Strength & Conditioning",
    bio: "10+ years of experience helping members achieve their peak performance.",
  },
  {
    name: "Coach Sarah",
    specialization: "Yoga & Rehabilitation",
    bio: "Certified in exercise therapy with expertise in scoliosis and senior fitness programs.",
  },
  {
    name: "Coach Raj",
    specialization: "Muay Thai & HIIT",
    bio: "Professional fighter turned coach, bringing authentic martial arts training to every session.",
  },
];

export default function Trainers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-neon text-sm uppercase tracking-widest mb-2">
            Our Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            MEET YOUR <span className="text-accent">TRAINERS</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-navy border border-white/10 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_20px_#00c2ff40] hover:border-neon/40 transition-all duration-300"
            >
              {/* TODO: Replace with actual image — Trainer profile photo */}
              <div className="w-full aspect-square bg-gray-800" />
              <div className="p-6">
                <h3 className="font-display text-xl text-white">
                  {trainer.name}
                </h3>
                <p className="text-neon text-sm mt-1">
                  {trainer.specialization}
                </p>
                <p className="text-muted text-sm mt-3">{trainer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
