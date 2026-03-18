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
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-neon text-sm uppercase tracking-widest mb-2">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-white mb-1">
                  Address
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  KS7, No. 16-1, 16-2, 18-1 &amp; 18-2, 20, Jalan Kasuarina
                  11, Bandar Botanik, 41200 Klang, Selangor
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg text-white mb-1">Phone</h3>
                <a
                  href="tel:+60333180999"
                  className="text-neon text-sm hover:underline"
                >
                  03-3318 0999
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg text-white mb-3">
                  Opening Hours
                </h3>
                <div className="space-y-1">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm max-w-xs"
                    >
                      <span className="text-white/80">{h.day}</span>
                      <span
                        className={
                          h.time === "Closed" ? "text-accent" : "text-muted"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/60333180999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wider transition-colors mt-4"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
