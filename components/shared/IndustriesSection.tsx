"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, HeartPulse, GraduationCap, Home, Briefcase, Factory, Plane } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Product discovery, ROAS, and repeat-purchase growth." },
  { icon: HeartPulse, name: "Healthcare", desc: "HIPAA-aware campaigns and patient acquisition." },
  { icon: GraduationCap, name: "Education", desc: "Enrollment growth for institutions and edtech." },
  { icon: Home, name: "Real Estate", desc: "Local visibility and high-intent lead generation." },
  { icon: Briefcase, name: "Professional Services", desc: "B2B lead gen for law, finance, and consulting." },
  { icon: Factory, name: "Manufacturing", desc: "B2B demand gen and distributor outreach." },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking-driven campaigns and seasonal demand." },
  { icon: Building2, name: "SaaS & Tech", desc: "Pipeline growth and product-led acquisition." },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-16 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Industries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">Industries We <span className="gradient-text">Serve</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Specialized strategies for the sectors we know best — not generic templates.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-xl border border-hairline/5 p-5 text-center"
            >
              <ind.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-ink font-semibold text-sm mb-1">{ind.name}</h3>
              <p className="text-muted text-xs leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
