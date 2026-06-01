"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users, TrendingUp, Eye } from "lucide-react";

const values = [
  { icon: Heart, title: "Client First", description: "Every decision we make starts with one question: is this the best outcome for our client?", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Shield, title: "Integrity Always", description: "White-hat only. No shortcuts, no deception, no tactics we wouldn't be proud to explain to our clients.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Zap, title: "Innovation Driven", description: "We invest heavily in AI, automation, and new technologies to stay ahead of the curve for our clients.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Users, title: "Team Excellence", description: "We hire the best, invest in their growth, and build a culture where great work is the standard.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: TrendingUp, title: "Results Obsessed", description: "We measure everything. If it doesn't move the needle, we change the approach.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Eye, title: "Full Transparency", description: "No black boxes. You always know exactly what we're doing, why, and what it's delivering.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What We <span className="gradient-text">Stand For</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
