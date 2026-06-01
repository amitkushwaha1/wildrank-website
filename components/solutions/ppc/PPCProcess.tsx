"use client";

import { motion } from "framer-motion";
import { ClipboardList, Settings, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Audit & Research", description: "We audit your existing campaigns, analyze competitors, and identify the highest-value keywords and audiences for your budget.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Settings, step: "02", title: "Campaign Setup", description: "Precise campaign structure, ad groups, bidding strategies, conversion tracking, and landing page alignment.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Rocket, step: "03", title: "Launch & Test", description: "We launch with multiple ad variations and run A/B tests on headlines, descriptions, and landing pages to find winners fast.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: BarChart3, step: "04", title: "Optimize & Scale", description: "Continuous bid adjustments, negative keyword pruning, and budget reallocation to maximize ROAS every single day.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: RefreshCw, step: "05", title: "Report & Refine", description: "Monthly performance reports with full transparency on spend, clicks, conversions, and revenue attribution.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function PPCProcess() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How We Run <span className="gradient-text">Winning Campaigns</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card rounded-2xl p-5 border border-dark-border text-center group">
                <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div className="text-3xl font-black text-white/5 mb-2">{step.step}</div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
