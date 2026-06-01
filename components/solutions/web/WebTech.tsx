"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "WooCommerce", category: "E-Commerce" },
  { name: "WordPress", category: "CMS" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
];

export default function WebTech() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Built with <span className="gradient-text">Modern Technology</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We use the latest, most reliable technologies to build fast, scalable, and maintainable web solutions.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }} whileHover={{ scale: 1.08, y: -3 }}
              className="glass-card border border-dark-border rounded-xl px-5 py-3 cursor-default">
              <p className="text-white font-semibold text-sm">{tech.name}</p>
              <p className="text-gray-500 text-xs">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
