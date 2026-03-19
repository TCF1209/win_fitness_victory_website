"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Walk-In",
    price: "RM 15",
    period: "/ day",
    description: "Try us out — no commitment needed.",
    features: [
      "Full gym access",
      "Locker & shower use",
      "1-day pass",
    ],
    recommended: false,
  },
  {
    name: "Monthly",
    price: "RM 88",
    period: "/ month",
    description: "Flexible month-to-month membership.",
    features: [
      "Unlimited gym access",
      "Locker & shower use",
      "Free Wi-Fi",
      "No contract",
    ],
    recommended: false,
  },
  {
    name: "6 Months",
    price: "RM 420",
    period: "/ 6 months",
    description: "Commit to your goals and save more.",
    features: [
      "Unlimited gym access",
      "Locker & shower use",
      "Free Wi-Fi",
      "1 free group class / month",
    ],
    recommended: false,
  },
  {
    name: "Annual",
    price: "RM 720",
    period: "/ year",
    description: "Best value — serious about fitness.",
    features: [
      "Unlimited gym access",
      "Locker & shower use",
      "Free Wi-Fi",
      "2 free group classes / month",
      "1 free InBody scan / month",
      "Priority booking",
    ],
    recommended: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white">
            MEMBERSHIP PLANS
          </h2>
          <div className="w-10 h-0.5 bg-accent mt-4" />
          <p className="text-muted text-sm mt-4 max-w-lg">
            Choose a plan that fits your lifestyle. All memberships include full access to our state-of-the-art facility.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-sm border p-6 transition-all duration-300 ${
                plan.recommended
                  ? "bg-blue/60 border-accent/50 hover:border-accent"
                  : "bg-navy border-white/10 hover:border-white/20"
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-display text-xl text-white mt-1">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-3 mb-2">
                <span className="font-display text-3xl md:text-4xl text-accent">
                  {plan.price}
                </span>
                <span className="text-muted text-sm ml-1">{plan.period}</span>
              </div>

              <p className="text-muted text-sm leading-relaxed">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-4" />

              {/* Features */}
              <ul className="flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.recommended ? "text-accent" : "text-neon/70"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#join"
                className={`mt-6 block text-center font-display text-sm uppercase tracking-wider py-3 rounded-sm transition-all duration-300 ${
                  plan.recommended
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted/60 text-xs text-center mt-8"
        >
          * Prices are subject to change. Group class add-ons available separately. Contact us for family packages.
        </motion.p>
      </div>
    </section>
  );
}
