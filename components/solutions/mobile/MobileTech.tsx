"use client";

import { motion } from "framer-motion";

const tech = [
  { name: "React Native", category: "Cross-Platform" },
  { name: "Flutter", category: "Cross-Platform" },
  { name: "Swift", category: "iOS Native" },
  { name: "Kotlin", category: "Android Native" },
  { name: "Firebase", category: "Backend" },
  { name: "Node.js", category: "API" },
  { name: "GraphQL", category: "API" },
  { name: "AWS Amplify", category: "Cloud" },
  { name: "Stripe", category: "Payments" },
  { name: "Figma", category: "Design" },
];

export default function MobileTech() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Technology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Mobile <span className="gradient-text">Tech Stack</span></h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }} whileHover={{ scale: 1.08, y: -3 }}
              className="glass-card border border-dark-border rounded-xl px-5 py-3 cursor-default">
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs">{t.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
