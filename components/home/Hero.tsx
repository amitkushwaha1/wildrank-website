"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Rocket, Handshake, Activity } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy-load the heavy canvas component — no SSR needed
const SEOUniverse = dynamic(() => import("@/components/home/SEOUniverse"), { ssr: false });

const stats = [
  { icon: Users,     value: "350+",   title: "Industry Experts",          desc: "Strategists, creatives, and technologists turning bold ideas into scalable digital growth.",            color: "text-blue-400",    bg: "bg-blue-500/10" },
  { icon: Award,     value: "17+",    title: "Years of Proven Impact",     desc: "A track record of delivering measurable growth through innovation and forward-thinking execution.",      color: "text-secondary",   bg: "bg-secondary/10" },
  { icon: Rocket,    value: "660+",   title: "Projects Delivered",         desc: "From complex challenges to seamless solutions, we bring visions to life with precision.",               color: "text-accent",      bg: "bg-accent/10" },
  { icon: Handshake, value: "8,000+", title: "Meaningful Collaborations",  desc: "Long-term partnerships that go beyond execution, driving sustained digital growth together.",           color: "text-green-400",   bg: "bg-green-500/10" },
  { icon: Activity,  value: "99.9%",  title: "Campaign Uptime",            desc: "Reliability and performance with robust, always-on digital marketing infrastructure.",                  color: "text-cyan-400",    bg: "bg-cyan-500/10" },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const trustLogos = ["Google Partner", "AI-Powered SEO", "ISO 9001 Certified", "17+ Years Experience"];
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060608] pt-20">

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AI-Powered Digital Marketing
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.04] mb-6"
            >
              <span className="text-white">Be the Brand Google Ranks</span>
              <br />
              <span className="gradient-text">and AI Recommends First</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg mb-4"
            >
              From Google to Gemini, Perplexity to voice — we engineer your brand&apos;s visibility across every AI and search surface that your customers use.
            </motion.p>

            {/* Trust logos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {trustLogos.map(l => (
                <span key={l} className="text-xs font-semibold text-gray-600 tracking-widest uppercase">{l}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255,107,53,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Book a Strategy Session <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/search-engine-optimization-services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/5"
              >
                Explore Services
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT — SEO Universe Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
            style={{ height: "600px" }}
          >
            {/* Globe canvas */}
            <SEOUniverse />

            {/* Centre label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-[10px] font-bold text-primary-light tracking-[0.3em] uppercase opacity-70">
                  Search Universe
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Stat cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 group cursor-default"
              >
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className={`text-2xl font-extrabold ${stat.color} mb-0.5`}>{stat.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{stat.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{stat.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
