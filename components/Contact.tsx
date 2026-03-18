"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "7:30 am – 10:00 pm" },
  { day: "Tuesday", time: "7:45 am – 10:00 pm" },
  { day: "Wednesday", time: "8:00 am – 10:00 pm" },
  { day: "Thursday", time: "7:45 am – 10:00 pm" },
  { day: "Friday", time: "8:00 am – 10:00 pm" },
  { day: "Saturday", time: "7:30 am – 7:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Angled top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-navy -translate-y-1/2 pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 60%, 100% 100%, 0 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header with watermark */}
        <div className="relative mb-14">
          <span className="absolute -top-10 left-0 font-display text-7xl md:text-8xl text-white/[0.03] leading-none select-none pointer-events-none">
            CONTACT
          </span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="relative font-display text-3xl md:text-4xl text-white">
              Find Us
            </h2>
            <div className="w-10 h-0.5 bg-accent mt-3" />
          </motion.div>
        </div>

        {/* Info cards row */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy border border-white/10 rounded-sm p-5 border-t-2 border-t-neon/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-neon" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="font-display text-base text-white">Address</h3>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              KS7, No. 16-1, 16-2, 18-1 &amp; 18-2, 20, Jalan Kasuarina 11,
              Bandar Botanik, 41200 Klang, Selangor
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy border border-white/10 rounded-sm p-5 border-t-2 border-t-accent/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="font-display text-base text-white">Phone</h3>
            </div>
            <a href="tel:+60333180999" className="text-white/80 text-sm hover:text-neon transition-colors">
              03-3318 0999
            </a>
            <div className="mt-4">
              <a
                href="https://wa.me/60176961795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy border border-white/10 rounded-sm p-5 border-t-2 border-t-white/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-base text-white">Hours</h3>
            </div>
            <div className="space-y-1">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-2 text-xs sm:text-sm">
                  <span className="text-white/60 shrink-0">{h.day}</span>
                  <span className={`text-right shrink-0 ${h.time === "Closed" ? "text-accent" : "text-muted"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map — full width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-sm overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4!2d101.4406!3d3.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53b3e8c3e001%3A0x1234567890abcdef!2sJalan%20Kasuarina%2011%2C%20Bandar%20Botanik%2C%2041200%20Klang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Win Fitness Factory Location"
          />
          {/* Inner shadow to blend edges */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(13,16,64,0.6)]" />
        </motion.div>
      </div>
    </section>
  );
}
