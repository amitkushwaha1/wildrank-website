"use client";

import { motion } from "framer-motion";
import { PenTool, Target, BarChart3, MessageCircle, Camera, Megaphone } from "lucide-react";

const services = [
  { icon: PenTool, title: "Content Creation", description: "Scroll-stopping graphics, videos, reels, and copy crafted for each platform's unique audience and algorithm.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Target, title: "Paid Social Ads", description: "Hyper-targeted ad campaigns on Meta, LinkedIn, TikTok, and Pinterest that drive measurable conversions.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: MessageCircle, title: "Community Management", description: "Daily monitoring, responding to comments and DMs, and building genuine relationships with your audience.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Camera, title: "Influencer Marketing", description: "Connecting your brand with the right influencers to amplify reach and build authentic social proof.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: BarChart3, title: "Social Analytics", description: "Deep-dive reporting on reach, engagement, follower growth, and revenue attribution from social channels.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Megaphone, title: "Brand Strategy", description: "Defining your social voice, content pillars, and posting cadence to build a consistent, recognizable brand.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function SMMServices() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Full-Service <span className="gradient-text">Social Media Management</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to dominate social media — strategy, content, ads, and analytics — all in one place.</p>
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
