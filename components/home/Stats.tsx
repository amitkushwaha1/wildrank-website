"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Only the client count is owner-verified. The former 660+ projects, 350+
// team, 8,000+ resources and 17+ years claims are removed rather than
// restated, so this band carries the one figure we can stand behind and
// leaves credibility to the certification row beneath it.
const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Clients Served Company-Wide", color: "text-blue-400" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  // Before hydration the real figure is rendered server-side, so crawlers and
  // no-JS clients read "500+" rather than a literal "0+". The count-up is a
  // progressive enhancement layered on top of already-correct content.
  useEffect(() => setMounted(true), []);

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
      {(mounted ? count : target).toLocaleString()}
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
            A Track Record Built Nationwide
          </h2>
          <p className="text-gray-400 mt-2">500+ clients served company-wide</p>
        </motion.div>

        <div className="max-w-md mx-auto">
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
            {["Google Partner", "Red Herring Top 100", "ISO 9001:2008"].map(
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
