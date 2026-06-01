"use client";

import { motion } from "framer-motion";

const results = [
  { industry: "E-Commerce", metric: "ROAS", value: "12x", desc: "Return on ad spend for a fashion retailer", color: "text-orange-400" },
  { industry: "Healthcare", metric: "Cost Per Lead", value: "−58%", desc: "Reduction in CPL for a medical clinic", color: "text-green-400" },
  { industry: "SaaS", metric: "Trial Signups", value: "+340%", desc: "Increase in free trial conversions", color: "text-blue-400" },
  { industry: "Real Estate", metric: "Qualified Leads", value: "+220%", desc: "More qualified buyer inquiries per month", color: "text-purple-400" },
];

export default function PPCResults() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Proven Results</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Real Numbers from <span className="gradient-text">Real Campaigns</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Across every industry we serve, our PPC campaigns consistently outperform industry benchmarks.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div key={r.industry} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-dark-border text-center">
              <span className="text-xs text-gray-500 uppercase tracking-widest">{r.industry}</span>
              <p className={`text-4xl font-extrabold ${r.color} my-3`}>{r.value}</p>
              <p className="text-white text-sm font-semibold mb-1">{r.metric}</p>
              <p className="text-gray-500 text-xs">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
