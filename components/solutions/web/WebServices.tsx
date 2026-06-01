"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code2, Layers, Smartphone, Settings } from "lucide-react";

const services = [
  { icon: Globe, title: "Corporate Websites", description: "Professional, brand-aligned websites that establish credibility and drive lead generation for B2B and enterprise companies.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: ShoppingCart, title: "E-Commerce Development", description: "High-converting online stores on Shopify, WooCommerce, or custom platforms with seamless checkout experiences.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Code2, title: "Custom Web Applications", description: "Bespoke web apps, SaaS platforms, and internal tools built with React, Next.js, Node.js, and modern frameworks.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Layers, title: "CMS Development", description: "WordPress, Contentful, and headless CMS solutions that give your team full control over content without touching code.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Smartphone, title: "Progressive Web Apps", description: "App-like web experiences that work offline, load instantly, and can be installed on any device.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Settings, title: "Website Maintenance", description: "Ongoing updates, security patches, performance monitoring, and technical support to keep your site running perfectly.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
];

export default function WebServices() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Build</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Web Solutions for <span className="gradient-text">Every Business</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From landing pages to full-scale platforms, we build digital experiences that perform.</p>
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
