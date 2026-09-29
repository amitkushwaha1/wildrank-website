"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Zap, Star } from "lucide-react";
import CTA from "@/components/home/CTA";

type Val = boolean | string | number;

interface Plan {
  name: string;
  price: number;
  tagline: string;
  color: string;
  border: string;
  badge?: string;
  platforms: string;
  postsPerWeek: string;
  storiesPerWeek: string;
}

const plans: Plan[] = [
  { name: "Basic", price: 899, tagline: "Essential social media management for small businesses starting their online growth journey.", color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    platforms: "2 (FB, IG, LinkedIn, Twitter, YouTube, Pinterest)", postsPerWeek: "4", storiesPerWeek: "3 (Standard)" },
  { name: "Silver", price: 1299, tagline: "Advanced social strategies for improved visibility and stronger online presence.", color: "from-gray-300 to-gray-400", border: "border-gray-400/30",
    platforms: "4 (FB, IG, LinkedIn, Twitter, YouTube, Pinterest)", postsPerWeek: "5", storiesPerWeek: "3 (Custom)" },
  { name: "Gold", price: 1599, tagline: "Full-scale social media with high-impact techniques for accelerated brand growth.", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/40", badge: "Most Popular",
    platforms: "5 (FB, IG, LinkedIn, Twitter, YouTube, Pinterest)", postsPerWeek: "8 (Daily)", storiesPerWeek: "4 (Custom)" },
  { name: "Premium", price: 2499, tagline: "Complete social media domination with white-glove service for maximum reach.", color: "from-purple-400 to-blue-500", border: "border-purple-500/30",
    platforms: "All (FB, IG, LinkedIn, Twitter, YouTube, Pinterest)", postsPerWeek: "12 (Custom)", storiesPerWeek: "6 (Custom)" },
];

const sections: { title: string; rows: { label: string; values: Val[] }[] }[] = [
  { title: "Content Production", rows: [
    { label: "Video Content (Reels/Shorts)", values: ["1/Week", "2/Week", "4/Week", "6/Week"] },
    { label: "Copywriting (Captions & Hashtags)", values: [true, true, true, true] },
    { label: "Graphic Design (Static & Carousel)", values: [true, true, true, true] },
    { label: "Performance Reporting & Insights", values: ["Monthly", "Monthly", "Monthly", "Bi-Weekly + Strategy Call"] },
    { label: "Social Profile Optimization", values: ["Standard", "Standard", "Advanced", "Expert-Level"] },
    { label: "Comment & DM Engagement", values: ["Standard", "Standard", "Advanced", "Premium"] },
    { label: "Community Growth & Audience Building", values: [false, true, true, true] },
    { label: "Influencer Collaboration", values: [false, false, "1/Month", "2/Month"] },
    { label: "Competitor Benchmarking", values: [true, true, true, "Advanced Insights"] },
    { label: "Dedicated Content Calendar", values: [false, true, true, true] },
  ]},
  { title: "Paid Social Advertising", rows: [
    { label: "Recommended Ad Budget (Client Pays)", values: ["$100", "$200", "$300", "$500"] },
    { label: "Ad Campaign Setup & Management", values: [true, true, true, true] },
    { label: "Audience Research & Targeting", values: [false, true, true, true] },
    { label: "Retargeting Ad Campaigns", values: [false, true, true, true] },
    { label: "Social Commerce (FB & IG Shop Setup)", values: [false, true, true, true] },
    { label: "Linktree & Bio Link Optimization", values: [true, true, true, true] },
    { label: "Contest & Giveaway Strategy", values: [false, false, true, true] },
    { label: "Social Listening & Brand Monitoring", values: [false, false, true, true] },
  ]},
];

function Cell({ v }: { v: Val }) {
  if (v === true) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B35] shadow-[0_0_8px_rgba(255,107,53,0.5)] mx-auto">
      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
    </span>
  );
  if (v === false) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15 mx-auto">
      <X className="w-3 h-3 text-gray-500 stroke-[2.5]" />
    </span>
  );
  return <span className="text-xs text-accent font-semibold">{v}</span>;
}

export default function SocialMediaPricingPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Content Production": true,
    "Paid Social Advertising": true,
  });
  const toggle = (s: string) => setOpenSections(prev => ({ ...prev, [s]: !prev[s] }));

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold px-4 py-2 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" /> Social Media Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Social Media <span className="gradient-text">Management Plans</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose the plan that matches your brand ambitions and let&apos;s grow your social presence.
          </motion.p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-6 border ${plan.border} relative flex flex-col ${plan.badge ? "pricing-popular ring-1 ring-accent/30" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"><Zap className="w-3 h-3" />{plan.badge}</span>
                  </div>
                )}
                <div className={`text-base font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>{plan.name}</div>
                <div className="flex items-end gap-0.5 mb-2">
                  <span className="text-3xl font-extrabold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm mb-1">/ month</span>
                </div>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{plan.tagline}</p>
                <div className="space-y-2 text-xs text-gray-400 mb-5 flex-1">
                  <div className="flex justify-between gap-2"><span>Platforms</span><span className="text-white font-semibold text-right">{plan.platforms.split("(")[0].trim()}</span></div>
                  <div className="flex justify-between"><span>Posts / Week</span><span className="text-white font-semibold">{plan.postsPerWeek}</span></div>
                  <div className="flex justify-between"><span>Stories / Week</span><span className="text-white font-semibold">{plan.storiesPerWeek}</span></div>
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all mt-auto ${plan.badge ? "bg-accent hover:bg-accent-dark text-white" : "border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white"}`}>
                  Start Today
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">
            Full Plan <span className="gradient-text">Comparison</span>
          </motion.h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-white/5 last:border-0">
                <button onClick={() => toggle(section.title)} className="w-full flex items-center justify-between px-6 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{section.title}</span>
                  {openSections[section.title] ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                <AnimatePresence initial={false}>
                  {openSections[section.title] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="grid grid-cols-5 border-b border-white/5 bg-[#0d0d0d]">
                        <div className="px-6 py-2 text-xs text-gray-600 font-medium">Feature</div>
                        {plans.map(p => (
                          <div key={p.name} className={`px-2 py-2 text-center text-xs font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</div>
                        ))}
                      </div>
                      {section.rows.map((row, ri) => (
                        <div key={row.label} className={`grid grid-cols-5 border-b border-white/5 last:border-0 ${ri % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                          <div className="px-6 py-3 text-xs sm:text-sm text-gray-400">{row.label}</div>
                          {row.values.map((v, vi) => (
                            <div key={vi} className="px-2 py-3 flex items-center justify-center"><Cell v={v} /></div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 glass-card rounded-2xl p-8 border border-accent/20 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Social Strategy?</h3>
            <p className="text-gray-400 mb-5 max-w-xl mx-auto">Enterprise brands and multi-location businesses get tailored social packages with dedicated creative teams.</p>
            <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
