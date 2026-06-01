"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Heart, Coffee, Laptop, Award } from "lucide-react";

const perks = [
  { icon: TrendingUp, title: "Fast Career Growth", description: "Clear promotion paths, quarterly reviews, and real opportunities to lead teams and projects.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Globe, title: "Remote-Friendly", description: "Work from anywhere. We have team members across India, USA, UK, and 10+ other countries.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance, mental wellness support, and generous paid time off.", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Coffee, title: "Great Culture", description: "Team outings, hackathons, learning days, and a culture that celebrates both work and life.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Laptop, title: "Latest Tools", description: "Best-in-class tools, software, and hardware. We invest in what makes you productive.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Award, title: "Learning Budget", description: "Annual learning budget for courses, certifications, conferences, and professional development.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
];

export default function CareersPerks() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Join Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Perks That <span className="gradient-text">Actually Matter</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group">
                <div className={`w-12 h-12 ${p.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
