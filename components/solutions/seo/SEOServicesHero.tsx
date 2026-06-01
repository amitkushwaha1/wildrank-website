"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Search, TrendingUp, BarChart2 } from "lucide-react";
import { FloatingOrb } from "@/components/shared/Motion3D";

const highlights = [
  "AI-powered keyword research",
  "Technical SEO audits",
  "White-hat link building",
  "Monthly ranking reports",
];

export default function SEOServicesHero() {
  return (
    <section className="relative min-h-[80vh] hero-gradient flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <FloatingOrb size={500} color="rgba(15,76,129,0.15)" top="5%" left="-10%" delay={0} />
      <FloatingOrb size={350} color="rgba(249,115,22,0.08)" bottom="0%" right="-5%" delay={3} />

      {/* Animated rings */}
      <motion.div className="absolute top-1/2 right-[6%] -translate-y-1/2 w-72 h-72 rounded-full border border-primary/10 hidden lg:block"
        animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/70" />
      </motion.div>
      <motion.div className="absolute top-1/2 right-[6%] -translate-y-1/2 w-48 h-48 rounded-full border border-accent/10 hidden lg:block"
        animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary-light/70" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Search className="w-3.5 h-3.5" /> SEO Services
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              SEO That Drives <span className="gradient-text">Real Organic Growth</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              AI-powered search engine optimization that consistently delivers first-page rankings, sustainable traffic growth, and measurable revenue impact.
            </motion.p>

            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{h}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/pricing/seo" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                View SEO Pricing <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/company/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Get Free Audit
              </motion.a>
            </motion.div>
          </div>

          {/* Right — live ranking card */}
          <motion.div initial={{ opacity: 0, scale: 0.88, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block" style={{ perspective: 1000 }}>
            <div className="glass-card rounded-2xl p-8 border border-primary/20 glow-blue">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Keyword Rankings</p>
                  <p className="text-2xl font-bold text-white">Page 1 Results</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { kw: "digital marketing agency", pos: 1, change: "+12" },
                  { kw: "seo services usa", pos: 2, change: "+8" },
                  { kw: "white label seo", pos: 3, change: "+15" },
                  { kw: "ppc management", pos: 4, change: "+6" },
                  { kw: "local seo company", pos: 5, change: "+9" },
                ].map((row) => (
                  <div key={row.kw} className="flex items-center justify-between py-2 border-b border-dark-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded text-xs text-primary-light font-bold flex items-center justify-center">{row.pos}</span>
                      <span className="text-sm text-gray-300 truncate max-w-[160px]">{row.kw}</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">{row.change}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-400">Live tracking</span>
                </div>
                <div className="flex items-center gap-1 text-accent font-semibold">
                  <BarChart2 className="w-3.5 h-3.5" />+340% organic traffic
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
