"use client";

import { motion } from "framer-motion";
import { Smartphone, Code2, Palette, Shield, RefreshCw, BarChart3 } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Native iOS & Android", description: "Platform-specific apps built with Swift/Kotlin for maximum performance, native feel, and full access to device capabilities.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Code2, title: "Cross-Platform Apps", description: "React Native and Flutter apps that share a single codebase while delivering near-native performance on both platforms.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Palette, title: "UI/UX Design", description: "User-centered design with intuitive flows, beautiful interfaces, and accessibility built in from the first wireframe.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Shield, title: "App Security", description: "End-to-end encryption, secure authentication, and compliance with GDPR, HIPAA, and platform security standards.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: RefreshCw, title: "App Maintenance", description: "Ongoing updates, OS compatibility patches, performance monitoring, and feature enhancements post-launch.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: BarChart3, title: "App Analytics", description: "Integrated analytics to track user behavior, retention, conversion funnels, and revenue metrics inside your app.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function MobileServices() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">End-to-End <span className="gradient-text">App Development</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From concept to App Store — we handle every stage of mobile app development with a dedicated team.</p>
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
