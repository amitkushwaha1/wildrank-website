"use client";

import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2, Globe, Smartphone, PenTool, BarChart3, Code2 } from "lucide-react";

const services = [
  { icon: Search, title: "White Label SEO", description: "Full-service SEO delivered under your brand — keyword research, on-page, link building, and monthly reports.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: MousePointerClick, title: "White Label PPC", description: "Google and social ad campaign management with your branding on every report and client-facing deliverable.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Share2, title: "White Label Social Media", description: "Content creation, scheduling, community management, and paid social — all delivered as your agency's work.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Globe, title: "White Label Web Dev", description: "Custom website and web app development your agency can resell at your own margins.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Smartphone, title: "White Label App Dev", description: "iOS and Android app development delivered under your agency brand with full NDA protection.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: PenTool, title: "White Label Content", description: "Blog posts, landing pages, ad copy, and email sequences written and delivered under your brand.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: BarChart3, title: "White Label Analytics", description: "Custom-branded dashboards and monthly performance reports your clients will think you built yourself.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Code2, title: "White Label Software", description: "Custom software and SaaS development that you can resell or license under your own product brand.", color: "text-red-400", bg: "bg-red-500/10" },
];

export default function WLServices() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Every Service, <span className="gradient-text">Your Brand</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Offer a complete digital marketing suite to your clients without hiring a single extra person.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 border border-dark-border group">
                <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
