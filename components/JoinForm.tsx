"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Membership Inquiry:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${form.interest}`;
    const waLink = `https://wa.me/60176961795?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="join" className="relative py-20 md:py-28 diagonal-lines">
      <div className="max-w-3xl mx-auto px-5 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white">
            START YOUR JOURNEY
          </h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
          <p className="text-muted mt-4">
            Leave your details and we&apos;ll get in touch to set up your first
            session.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-navy border border-neon/30 rounded-sm p-8 text-center"
          >
            <div className="text-neon text-4xl mb-4">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-white">
              Thank You!
            </h3>
            <p className="text-muted mt-2">
              Your enquiry has been sent via WhatsApp. We&apos;ll reach out to
              you soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", email: "", interest: "" });
              }}
              className="mt-6 text-neon text-sm hover:underline"
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy border border-white/10 rounded-sm p-6 md:p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-white/70 mb-1.5">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ahmad bin Ismail"
                className="w-full bg-blue/40 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-neon/50 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm text-white/70 mb-1.5">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. 012-345 6789"
                className="w-full bg-blue/40 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-neon/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. ahmad@email.com"
                className="w-full bg-blue/40 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-neon/50 transition-colors"
              />
            </div>

            {/* Interest */}
            <div>
              <label htmlFor="interest" className="block text-sm text-white/70 mb-1.5">
                I&apos;m interested in
              </label>
              <select
                id="interest"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full bg-blue/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon/50 transition-colors"
              >
                <option value="" className="bg-navy">Select an option</option>
                <option value="Gym Membership" className="bg-navy">Gym Membership</option>
                <option value="Personal Training" className="bg-navy">Personal Training 1:1</option>
                <option value="HIIT" className="bg-navy">HIIT</option>
                <option value="Muay Thai & Kickboxing" className="bg-navy">Muay Thai & Kickboxing</option>
                <option value="Zumba" className="bg-navy">Zumba</option>
                <option value="Yoga" className="bg-navy">Yoga</option>
                <option value="Other" className="bg-navy">Other</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-3 font-semibold uppercase tracking-wider transition-colors"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              Send Enquiry via WhatsApp
            </button>

            <p className="text-muted/50 text-xs text-center">
              Your details will be sent to us via WhatsApp so we can follow up
              with you.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
