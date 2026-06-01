"use client";

import { motion } from "framer-motion";
import { Cpu, Search, Target, BarChart3, PenTool, RefreshCw } from "lucide-react";

const capabilities = [
  { icon: Search, title: "AI SEO Analysis", description: "Our AI crawls millions of data points to identify ranking opportunities, content gaps, and technical issues faster than any manual audit.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Target, title: "Predictive Audience Targeting", description: "Machine learning models predict which audiences are most likely to convert, reducing wasted ad spend by up to 40%.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: BarChart3, title: "Automated Bid Management", description: "Real-time bid adjustments across thousands of keywords and ad groups, optimizing for your target CPA or ROAS 24/7.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: PenTool, title: "AI Content Generation", description: "AI-assisted content creation that produces SEO-optimized blog posts, ad copy, and landing pages at scale.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Cpu, title: "Competitive Intelligence", description: "Continuous monitoring of competitor strategies, ad spend, keywords, and content — giving you a permanent edge.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: RefreshCw, title: "Continuous Learning", description: "Our AI models improve with every campaign, learning from performance data to make smarter decisions over time.", color: "text-pink-400", bg: "bg-pink-500/10" },
];

export default function AICapabilities() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">AI Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What Our <span className="gradient-text">AI Does For You</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our proprietary AI platform runs continuously in the background, finding opportunities and fixing problems before they impact your results.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group">
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
