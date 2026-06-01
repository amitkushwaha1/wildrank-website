"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Facebook", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", users: "3B+ Users" },
  { name: "Instagram", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20", users: "2B+ Users" },
  { name: "LinkedIn", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", users: "1B+ Users" },
  { name: "TikTok", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20", users: "1.5B+ Users" },
  { name: "Twitter / X", color: "text-gray-300", bg: "bg-gray-500/10", border: "border-gray-500/20", users: "600M+ Users" },
  { name: "Pinterest", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", users: "500M+ Users" },
  { name: "YouTube", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", users: "2.7B+ Users" },
  { name: "Snapchat", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", users: "750M+ Users" },
];

export default function SMMPlatforms() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Platforms</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">We Manage Every <span className="gradient-text">Major Platform</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Your audience is everywhere. We make sure your brand is too — with platform-native strategies for each channel.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {platforms.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -5, scale: 1.04 }}
              className={`glass-card rounded-2xl p-5 border ${p.border} text-center cursor-pointer`}>
              <div className={`w-12 h-12 ${p.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className={`text-lg font-black ${p.color}`}>{p.name[0]}</span>
              </div>
              <p className="text-white font-semibold text-sm mb-1">{p.name}</p>
              <p className="text-gray-500 text-xs">{p.users}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
