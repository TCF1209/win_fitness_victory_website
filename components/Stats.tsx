"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
  { value: 435, suffix: "", label: "Reviews" },
  { value: 8, suffix: "+", label: "Classes" },
];

function Counter({
  target,
  decimals = 0,
  suffix,
  inView,
}: {
  target: number;
  decimals?: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-blue py-6 diagonal-lines overflow-hidden">
      {/* Edge fades — hidden on mobile */}
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-blue to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-blue to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-2"
          >
            <div className="font-display text-2xl md:text-4xl text-white text-glow-neon">
              <Counter
                target={stat.value}
                decimals={stat.decimals}
                suffix={stat.suffix}
                inView={inView}
              />
            </div>
            <p className="text-muted text-xs uppercase tracking-wider mt-0.5">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
