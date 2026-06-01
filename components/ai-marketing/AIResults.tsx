"use client";

import { motion } from "framer-motion";

const results = [
  { metric: "Faster Campaign Optimization", value: "10x", desc: "vs. manual management", color: "text-yellow-400" },
  { metric: "Better ROAS on Average", value: "+65%", desc: "compared to non-AI campaigns", color: "text-green-400" },
  { metric: "Reduction in Wasted Ad Spend", value: "−40%", desc: "through predictive targeting", color: "text-blue-400" },
  { metric: "More Conversions Per Dollar", value: "+85%", desc: "via AI bid optimization", color: "text-purple-400" },
];

export default function AIResults() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">AI vs Traditional</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why AI Marketing <span className="gradient-text">Outperforms</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">The numbers speak for themselves. AI-powered campaigns consistently outperform traditional management across every metric.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div key={r.metric} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-dark-border text-center">
              <p className={`text-4xl font-extrabold ${r.color} mb-2`}>{r.value}</p>
              <p className="text-white font-semibold text-sm mb-1">{r.metric}</p>
              <p className="text-gray-500 text-xs">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
