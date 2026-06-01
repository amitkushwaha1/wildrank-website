"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "340%", label: "Avg. Traffic Increase", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Users, value: "600+", label: "SEO Clients Served", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Award, value: "98%", label: "Client Retention Rate", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Clock, value: "90 Days", label: "Avg. Time to Results", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function SEOStats() {
  return (
    <section className="py-14 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div>
                  <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
