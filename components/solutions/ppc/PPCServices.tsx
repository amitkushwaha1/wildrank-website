"use client";

import { motion } from "framer-motion";
import { Search, Target, RefreshCw, BarChart3, Globe, ShoppingCart } from "lucide-react";

const services = [
  { icon: Search, title: "Search Ads", description: "Capture high-intent buyers at the exact moment they search for your product or service on Google and Bing.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Target, title: "Display Advertising", description: "Visually compelling banner ads across millions of websites to build brand awareness and retarget visitors.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: RefreshCw, title: "Remarketing Campaigns", description: "Re-engage visitors who left without converting using smart audience segmentation and personalized ad creatives.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: ShoppingCart, title: "Shopping Ads", description: "Product listing ads that showcase your inventory directly in search results, driving qualified purchase intent.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Globe, title: "Social PPC", description: "Paid campaigns on Meta, LinkedIn, and TikTok targeting precise demographics, interests, and behaviors.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: BarChart3, title: "Performance Max", description: "AI-driven Google Performance Max campaigns that optimize across all channels simultaneously for maximum reach.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function PPCServices() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our PPC Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Every PPC Channel, <span className="gradient-text">Mastered</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From search to social, we manage every paid channel with precision targeting and continuous optimization.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group">
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
