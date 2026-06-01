"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, Shield, Award } from "lucide-react";

const badges = [
  { icon: Award, text: "Deloitte Fast 50 India" },
  { icon: Shield, text: "ISO 9001:2008 Certified" },
  { icon: TrendingUp, text: "Google Partner" },
];

const floatingCards = [
  { label: "Organic Traffic", value: "+340%", color: "from-blue-500 to-blue-700", delay: 0 },
  { label: "ROI Delivered", value: "8.5x", color: "from-orange-500 to-orange-700", delay: 0.3 },
  { label: "Projects Done", value: "660+", color: "from-green-500 to-green-700", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              17+ Years of Digital Excellence
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Dominate Your Market with{" "}
              <span className="gradient-text">AI-Powered</span>{" "}
              Digital Marketing
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              From SEO and PPC to web development and white-label services — we help brands and agencies scale faster with data-driven strategies and expert execution.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20"
              >
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                <Play className="w-4 h-4 fill-current" /> Watch Demo
              </motion.a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs text-gray-400"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block">
            {/* Central card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative glass-card rounded-2xl p-8 glow-blue"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Campaign Performance</p>
                  <p className="text-2xl font-bold text-white">$2.4M Revenue</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
              </div>

              {/* Bar chart visual */}
              <div className="flex items-end gap-2 h-24 mb-4">
                {[40, 65, 45, 80, 60, 90, 75, 95, 70, 100, 85, 110].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
                    className={`flex-1 rounded-sm ${
                      i === 11 ? "bg-accent" : "bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
              </div>

              <div className="mt-4 pt-4 border-t border-dark-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">Live tracking</span>
                </div>
                <span className="text-xs text-green-400 font-semibold">+127% YoY</span>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                style={{
                  position: "absolute",
                  top: i === 0 ? "-40px" : i === 1 ? "30%" : "auto",
                  bottom: i === 2 ? "-40px" : "auto",
                  left: i === 0 ? "-50px" : i === 2 ? "-30px" : "auto",
                  right: i === 1 ? "-50px" : "auto",
                }}
                className="glass-card rounded-xl px-4 py-3 min-w-[130px]"
              >
                <p className="text-xs text-gray-500 mb-1">{card.label}</p>
                <p className={`text-xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-dark-border pt-10"
        >
          {[
            { value: "17+", label: "Years Experience" },
            { value: "660+", label: "Projects Delivered" },
            { value: "8,000+", label: "Resources Deployed" },
            { value: "350+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
