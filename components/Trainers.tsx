"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  {
    name: "Coach Ahmad",
    specialization: "Strength & Conditioning",
    bio: "10+ years of experience helping members achieve their peak performance.",
    image: "/images/trainers/S&C_coach.png",
  },
  {
    name: "Coach Sarah",
    specialization: "Yoga & Rehabilitation",
    bio: "Certified in exercise therapy with expertise in scoliosis and senior fitness programs.",
    image: "/images/trainers/yogo_coach.png",
  },
  {
    name: "Coach Raj",
    specialization: "Muay Thai & HIIT",
    bio: "Professional fighter turned coach, bringing authentic martial arts training to every session.",
    image: "/images/trainers/muay_thai_coach.png",
  },
];

export default function Trainers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-16">
        {/* Header — right-aligned */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16"
        >
          <p className="text-muted text-sm uppercase tracking-[0.2em] mb-2">
            The Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            THE COACHES
          </h2>
          <div className="w-10 h-0.5 bg-neon/40 mt-4 ml-auto" />
        </motion.div>

        {/* Zig-zag trainer cards */}
        <div className="space-y-8">
          {trainers.map((trainer, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-4 md:gap-6 bg-navy border border-white/10 rounded-sm p-4 md:p-6 md:max-w-2xl hover:border-white/20 transition-colors duration-300 ${
                  isEven ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Corner bracket decoration */}
                <div
                  className={`absolute w-6 h-6 pointer-events-none ${
                    i === 0
                      ? "top-0 left-0 border-t-2 border-l-2 border-neon/30"
                      : i === 1
                      ? "bottom-0 right-0 border-b-2 border-r-2 border-accent/30"
                      : "top-0 right-0 border-t-2 border-r-2 border-neon/30"
                  }`}
                />

                {/* Coach photo */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-neon/20 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-display text-xl text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-neon/70 text-sm mt-0.5">
                    {trainer.specialization}
                  </p>
                  <p className="text-muted text-sm mt-2">{trainer.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
