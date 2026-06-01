"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Home,
  GraduationCap,
  Landmark,
  Plane,
  Utensils,
  Car,
  Dumbbell,
  Briefcase,
} from "lucide-react";

const industries = [
  { icon: ShoppingCart, label: "E-Commerce", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Heart, label: "Healthcare", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Home, label: "Real Estate", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: GraduationCap, label: "Education", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Landmark, label: "Finance", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Plane, label: "Travel & Tourism", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Utensils, label: "Food & Beverage", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Car, label: "Automotive", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Dumbbell, label: "Fitness & Wellness", color: "text-lime-400", bg: "bg-lime-500/10" },
  { icon: Briefcase, label: "B2B & SaaS", color: "text-indigo-400", bg: "bg-indigo-500/10" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Expertise Across <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We bring deep domain knowledge to every engagement, delivering strategies that work for your specific industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 border border-dark-border cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 ${industry.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-300 text-center">{industry.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12 border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative">
            Don&apos;t see your industry?
          </h3>
          <p className="text-gray-400 mb-6 relative max-w-xl mx-auto">
            We work with businesses of all types. Our strategies are fully customized to your market, audience, and goals.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors relative"
          >
            Talk to an Expert
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
