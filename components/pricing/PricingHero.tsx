"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, DollarSign } from "lucide-react";
import { FloatingOrb } from "@/components/shared/Motion3D";

const colorMap: Record<string, { badge: string; glow: string }> = {
  blue:   { badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",   glow: "rgba(59,130,246,0.12)" },
  orange: { badge: "bg-orange-500/10 border-orange-500/20 text-orange-400", glow: "rgba(249,115,22,0.12)" },
  pink:   { badge: "bg-pink-500/10 border-pink-500/20 text-pink-400",   glow: "rgba(236,72,153,0.12)" },
  cyan:   { badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",   glow: "rgba(6,182,212,0.12)" },
  green:  { badge: "bg-green-500/10 border-green-500/20 text-green-400", glow: "rgba(34,197,94,0.12)" },
  purple: { badge: "bg-purple-500/10 border-purple-500/20 text-purple-400", glow: "rgba(168,85,247,0.12)" },
};

interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  color: string;
}

export default function PricingHero({ badge, title, highlight, description, color }: Props) {
  const c = colorMap[color] ?? colorMap.blue;

  return (
    <section className="relative min-h-[60vh] hero-gradient flex items-center overflow-hidden pt-20">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Orbs */}
      <FloatingOrb size={500} color={c.glow} top="10%" left="-10%" delay={0} />
      <FloatingOrb size={350} color="rgba(249,115,22,0.07)" bottom="0%" right="-5%" delay={2} />

      {/* Rotating ring */}
      <motion.div
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-64 h-64 rounded-full border border-white/5 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/60" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-44 h-44 rounded-full border border-white/5 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary-light/60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 border text-xs font-semibold px-4 py-2 rounded-full mb-6 ${c.badge}`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {["No hidden fees", "No long-term contracts", "Dedicated account manager", "Results guaranteed"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              View Plans <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/company/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Talk to Sales
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
