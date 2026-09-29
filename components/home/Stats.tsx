"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 660, suffix: "+", label: "Projects Delivered", color: "text-blue-400" },
  { icon: Users, value: 350, suffix: "+", label: "Expert Team Members", color: "text-orange-400" },
  { icon: Globe, value: 8000, suffix: "+", label: "Resources Deployed", color: "text-green-400" },
  { icon: Award, value: 17, suffix: "+", label: "Years of Excellence", color: "text-purple-400" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-gray-400 mt-2">Trusted by hundreds of brands worldwide</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="glass-card rounded-2xl p-6 text-center border border-dark-border"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className={`text-4xl font-extrabold ${stat.color} mb-1`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-dark-border"
        >
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">
            Recognized & Certified By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Google Partner", "Google Partner", "Red Herring Top 100", "ISO 9001:2008", "Google Partner0"].map(
              (name) => (
                <div
                  key={name}
                  className="px-5 py-2.5 bg-white/5 border border-dark-border rounded-lg text-xs font-semibold text-gray-400"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
