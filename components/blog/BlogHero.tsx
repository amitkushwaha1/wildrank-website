"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative min-h-[50vh] hero-gradient flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-[0.55]" style={{ backgroundImage: "linear-gradient(rgba(17,17,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,20,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at 40% 40%, black 0%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 40% 40%, black 0%, transparent 72%)" }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-16 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Guides &amp; Insights
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight mb-6">
            Digital Marketing <span className="gradient-text">Insights &amp; Tips</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-xl leading-relaxed">
            The subjects our team works in every day. Each one links to the page where we explain
            exactly how we do it.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
