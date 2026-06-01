"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Zap, TrendingUp } from "lucide-react";

const steps = [
  { icon: Database, step: "01", title: "Data Collection", description: "We connect all your marketing channels, analytics, and CRM data into a unified AI-ready data layer.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Cpu, step: "02", title: "AI Analysis", description: "Our models analyze patterns, identify opportunities, and generate actionable recommendations in real time.", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Zap, step: "03", title: "Automated Execution", description: "Approved optimizations are executed automatically — bid changes, content updates, audience adjustments.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: TrendingUp, step: "04", title: "Continuous Improvement", description: "The AI learns from every result, compounding improvements over time for better and better performance.", color: "text-green-400", bg: "bg-green-500/10" },
];

export default function AIProcess() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">The <span className="gradient-text">AI Marketing Loop</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A self-improving cycle that gets smarter with every campaign, every click, and every conversion.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card rounded-2xl p-6 border border-dark-border text-center group relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-dark-border z-10" />
                )}
                <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <div className="text-4xl font-black text-white/5 mb-2">{step.step}</div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
