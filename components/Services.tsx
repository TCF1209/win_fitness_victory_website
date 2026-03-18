"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🥊",
    name: "Personal Training 1:1",
    description:
      "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
    price: "RM 88",
  },
  {
    icon: "🔥",
    name: "HIIT (Beginner-Friendly)",
    description:
      "High-intensity interval training designed for all levels. Burn fat, build endurance, and get results fast.",
    price: "RM 80",
  },
  {
    icon: "🥋",
    name: "Muay Thai & Kickboxing",
    description:
      "Learn authentic striking techniques while getting an incredible full-body cardio workout.",
    price: "RM 88",
  },
  {
    icon: "💃",
    name: "Zumba",
    description:
      "Dance your way to fitness with high-energy Zumba classes. Fun, effective, and open to everyone.",
    price: "RM 20",
  },
  {
    icon: "🧘",
    name: "Yoga",
    description:
      "Improve flexibility, balance, and mindfulness. Perfect for recovery days and stress relief.",
    price: "RM 20",
  },
  {
    icon: "💪",
    name: "Boot Camp",
    description:
      "Outdoor-inspired group training that pushes your limits. Strength, cardio, and teamwork combined.",
    price: null,
  },
  {
    icon: "🤸",
    name: "Aerobic / Stretching & Strength",
    description:
      "Classic aerobic sessions combined with stretching and strength training for total-body conditioning.",
    price: null,
  },
  {
    icon: "📊",
    name: "InBody Body Composition Analysis",
    description:
      "Detailed body composition scan measuring muscle mass, body fat percentage, and water balance.",
    price: "RM 15",
  },
];

export default function Services() {
  return (
    <section id="classes" className="py-20 md:py-28 bg-blue/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-neon text-sm uppercase tracking-widest mb-2">
            Our Classes
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            TRAIN WITH THE <span className="text-accent">BEST</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-navy border border-white/10 rounded-lg p-6 hover:-translate-y-2 hover:shadow-[0_0_20px_#00c2ff40] hover:border-neon/40 transition-all duration-300"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="font-display text-xl text-white mt-3">
                {service.name}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {service.description}
              </p>
              {service.price && (
                <p className="text-accent font-bold text-lg mt-4">
                  {service.price}
                  <span className="text-muted text-xs font-normal">
                    {" "}
                    / session
                  </span>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
