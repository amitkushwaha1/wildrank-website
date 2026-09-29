"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Layers, DollarSign, Users, TrendingUp } from "lucide-react";

const highlights = [
  "Your brand, our execution",
  "Save 40–60% vs in-house",
  "350+ expert team members",
  "Dedicated account manager",
];

export default function WLHero() {
  return (
    <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Layers className="w-3.5 h-3.5" /> White Label Services
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Scale Your Agency <span className="gradient-text">Without the Overhead</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              We become your silent delivery partner. You sell, we execute — under your brand, at your margins. Trusted by 200+ agencies worldwide.
            </motion.p>
            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{h}
                </li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: DollarSign, label: "Cost Savings vs In-House", value: "60%", color: "text-green-400", bg: "bg-green-500/10" },
              { icon: Users, label: "Agency Partners", value: "200+", color: "text-purple-400", bg: "bg-purple-500/10" },
              { icon: TrendingUp, label: "Avg. Revenue Growth", value: "+180%", color: "text-orange-400", bg: "bg-orange-500/10" },
              { icon: Layers, label: "Services Available", value: "15+", color: "text-blue-400", bg: "bg-blue-500/10" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-dark-border text-center">
                  <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className={`text-2xl font-extrabold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
