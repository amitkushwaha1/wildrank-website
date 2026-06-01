"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@wildrank.com", href: "mailto:info@wildrank.com" },
  { icon: Phone, label: "Call Us", value: "+1 (800) 123-4567", href: "tel:+18001234567" },
  { icon: MapPin, label: "Our Office", value: "Noida, India & USA", href: "#" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] hero-gradient flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Mail className="w-3.5 h-3.5" /> Get In Touch
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Let&apos;s Talk About <span className="gradient-text">Your Growth</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you need SEO, PPC, web development, or a full digital strategy — we&apos;re ready to help. Reach out and we&apos;ll respond within 24 hours.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="glass-card rounded-xl p-4 border border-dark-border hover:border-primary/30 transition-colors group">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block glass-card rounded-2xl p-8 border border-dark-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Our team is online and ready to help</span>
              </div>
              {["Free website & SEO audit", "No commitment required", "Response within 24 hours", "Dedicated account manager assigned"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
