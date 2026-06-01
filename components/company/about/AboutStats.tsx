"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "17+", label: "Years in Business" },
  { value: "350+", label: "Team Members" },
  { value: "660+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
  { value: "8,000+", label: "Resources Deployed" },
];

export default function AboutStats() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center">
              <p className="text-3xl font-extrabold gradient-text mb-1">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
