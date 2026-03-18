"use client";

import { motion } from "framer-motion";

const premiumServices = [
  {
    name: "Personal Training 1:1",
    description:
      "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
    price: "RM 88",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    name: "HIIT",
    description:
      "High-intensity interval training designed for all levels. Burn fat, build endurance, and get results fast.",
    price: "RM 80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Muay Thai & Kickboxing",
    description:
      "Learn authentic striking techniques while getting an incredible full-body cardio workout.",
    price: "RM 88",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
];

const standardServices = [
  {
    name: "Zumba",
    description: "Dance your way to fitness with high-energy classes.",
    price: "RM 20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    name: "Yoga",
    description: "Flexibility, balance, and mindfulness for recovery and stress relief.",
    price: "RM 20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Boot Camp",
    description: "Outdoor-inspired group training — strength, cardio, and teamwork.",
    price: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    name: "Aerobic & Stretching",
    description: "Classic aerobics with stretching and strength conditioning.",
    price: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "InBody Analysis",
    description: "Detailed body composition scan — muscle, fat, and water balance.",
    price: "RM 15",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="classes" className="relative py-20 md:py-28 diagonal-lines">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header — left-aligned with watermark */}
        <div className="relative mb-16">
          <span className="absolute -top-8 left-0 font-display text-6xl md:text-[140px] text-white/[0.03] leading-none select-none pointer-events-none">
            08
          </span>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="relative font-display text-4xl md:text-5xl text-white">
              CLASSES & PROGRAMS
            </h2>
            <div className="w-10 h-0.5 bg-accent mt-4" />
          </motion.div>
        </div>

        {/* Premium tier */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {premiumServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-navy border border-white/10 rounded-sm p-6 pl-9 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent group-hover:w-1.5 transition-all duration-300" />
              <span className="text-neon">{service.icon}</span>
              <h3 className="font-display text-xl text-white mt-3">
                {service.name}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {service.description}
              </p>
              <p className="text-accent font-bold text-lg mt-4">
                {service.price}
                <span className="text-muted text-xs font-normal"> / session</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Standard tier */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {standardServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-blue/40 border border-white/5 rounded-sm p-4 hover:bg-blue/60 hover:border-white/10 transition-all duration-300"
            >
              <span className="text-neon/70">{service.icon}</span>
              <h3 className="font-display text-base text-white mt-2">
                {service.name}
              </h3>
              <p className="text-muted text-xs mt-1 leading-relaxed">
                {service.description}
              </p>
              {service.price && (
                <p className="text-accent font-semibold text-sm mt-3">
                  {service.price}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
