"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Zap, Star } from "lucide-react";
import CTA from "@/components/home/CTA";

type Val = boolean | string;

interface Plan {
  name: string;
  price: number;
  setupFee: string;
  adBudget: string;
  adGroups: string;
  color: string;
  border: string;
  badge?: string;
  highlights: string[];
}

const plans: Plan[] = [
  { name: "Basic", price: 299, setupFee: "$200", adBudget: "Up to $1,000/mo", adGroups: "Up to 5", color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    highlights: ["Essential Keyword Targeting", "Full Campaign Optimization", "Performance Reporting"] },
  { name: "Silver", price: 399, setupFee: "$350", adBudget: "Up to $2,000/mo", adGroups: "Up to 10", color: "from-gray-300 to-gray-400", border: "border-gray-400/30",
    highlights: ["Enhanced Audience Targeting", "Full Campaign Optimization", "Performance Reporting"] },
  { name: "Gold", price: 599, setupFee: "$500", adBudget: "Up to $3,000/mo", adGroups: "Up to 15", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/40", badge: "Most Popular",
    highlights: ["Advanced Audience Targeting", "Full Campaign Optimization", "Detailed Analytics & Insights", "Performance Reporting"] },
  { name: "Premium", price: 799, setupFee: "$750", adBudget: "$4,000+/mo", adGroups: "Up to 20", color: "from-purple-400 to-blue-500", border: "border-purple-500/30",
    highlights: ["Full-Scale Multi-Channel Targeting", "Full Campaign Optimization", "Detailed Analytics & Insights", "Dedicated Campaign Manager", "Priority Support"] },
];

const sections: { title: string; rows: { label: string; values: Val[] }[] }[] = [
  { title: "Ad Networks & Platforms", rows: [
    { label: "Supported Ad Platforms", values: ["2", "3", "3+", "All"] },
    { label: "Google Ads Management", values: [true, true, true, true] },
    { label: "Bing / Microsoft Ads", values: [true, true, true, true] },
    { label: "Amazon Advertising", values: [false, true, true, true] },
    { label: "Yelp Ads", values: [false, true, true, true] },
    { label: "Walmart & eBay Ads", values: [false, false, true, true] },
    { label: "Google Local Services Ads", values: [false, false, true, true] },
    { label: "LinkedIn Advertising", values: [false, false, false, true] },
    { label: "Native Ad Placements", values: [false, false, false, true] },
  ]},
  { title: "Measurement & Tracking", rows: [
    { label: "Standard Conversion Tracking", values: [true, true, true, true] },
    { label: "Advanced Conversion Tracking", values: [false, true, true, true] },
    { label: "Server-Level Conversion Tracking", values: [false, false, false, true] },
    { label: "Heatmap & Session Recording", values: [false, true, true, true] },
    { label: "Phone Call Tracking", values: [true, true, true, true] },
    { label: "Tag Manager Configuration", values: [true, true, true, true] },
    { label: "GA4 Account Setup", values: [true, true, true, true] },
  ]},
  { title: "Platform Integration", rows: [
    { label: "CRM System Integration", values: [true, true, true, true] },
    { label: "WhatsApp Lead Capture", values: [true, true, true, true] },
  ]},
  { title: "Creative & Assets", rows: [
    { label: "Dedicated Landing Page Build", values: [false, true, true, true] },
    { label: "Video Ad Production", values: [false, false, true, true] },
    { label: "Static Image Ad Design", values: [true, true, true, true] },
    { label: "Ad Copywriting & Visual Design", values: [true, true, true, true] },
    { label: "Lead Capture Form Integration", values: [true, true, true, true] },
    { label: "Page Speed Enhancement", values: [false, true, true, true] },
    { label: "Trust Badge & Social Proof Setup", values: [false, true, true, true] },
    { label: "Mobile-Friendly Layout", values: [true, true, true, true] },
  ]},
  { title: "Campaign Categories", rows: [
    { label: "Responsive Search Campaigns", values: [true, true, true, true] },
    { label: "Performance Max Campaigns", values: [false, true, true, true] },
    { label: "Display & Video Campaigns", values: [false, false, true, true] },
    { label: "Product & Shopping Ads", values: [false, false, true, true] },
    { label: "Dynamic Search Campaigns", values: [false, false, true, true] },
    { label: "Brand Visibility Campaigns", values: [false, false, false, true] },
    { label: "App Install Campaigns", values: [false, false, false, true] },
  ]},
  { title: "Account Structure", rows: [
    { label: "Keyword Discovery & Planning", values: [true, true, true, true] },
    { label: "Negative Keyword Filtering", values: [true, true, true, true] },
    { label: "Ad Groups Managed", values: ["Up to 5", "Up to 10", "Up to 15", "Up to 20"] },
    { label: "Ad Variants Creation", values: [true, true, true, true] },
  ]},
  { title: "Audience & Targeting", rows: [
    { label: "Basic Audience Targeting", values: [true, true, true, true] },
    { label: "Custom Audience Segments", values: [true, true, true, true] },
    { label: "Similar Audience Expansion", values: [false, true, true, true] },
    { label: "Retargeting Campaigns", values: [false, true, true, true] },
    { label: "Dynamic Retargeting Ads", values: [false, false, true, true] },
    { label: "Behavioral Segmentation", values: [false, true, true, true] },
    { label: "Location & Radius Targeting", values: [true, true, true, true] },
    { label: "Device-Based Targeting", values: [true, true, true, true] },
    { label: "Age & Gender Targeting", values: [true, true, true, true] },
    { label: "Interest & Intent Audiences", values: [false, true, true, true] },
  ]},
  { title: "Ad Extensions", rows: [
    { label: "Sitelink Assets", values: [true, true, true, true] },
    { label: "Image Assets", values: [true, true, true, true] },
    { label: "Call Assets", values: [true, true, true, true] },
    { label: "Lead Form Assets", values: [false, true, true, true] },
    { label: "Location Assets", values: [true, true, true, true] },
    { label: "Price Assets", values: [false, true, true, true] },
    { label: "Promotion Assets", values: [false, false, true, true] },
    { label: "Callout & Snippet Assets", values: [false, false, true, true] },
    { label: "App Assets", values: [false, false, false, true] },
  ]},
  { title: "Campaign Management", rows: [
    { label: "Smart Bid Adjustments", values: [true, true, true, true] },
    { label: "Daily Budget Control", values: [true, true, true, true] },
    { label: "Dayparting & Scheduling", values: [true, true, true, true] },
    { label: "Ongoing Performance Review", values: [true, true, true, true] },
    { label: "Quality Score Improvement", values: [false, true, true, true] },
    { label: "Landing Page CRO", values: [false, false, true, true] },
    { label: "Competitive Landscape Analysis", values: [false, false, false, true] },
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

export default function PPCPricingPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Ad Networks & Platforms": true,
    "Measurement & Tracking": true,
  });
  const toggle = (s: string) => setOpenSections(prev => ({ ...prev, [s]: !prev[s] }));

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold px-4 py-2 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" /> PPC Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            PPC Management <span className="gradient-text">Plans</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto">
            Transparent pricing. No percentage-of-spend fees. Your ad budget goes entirely to ads.
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
                <div className={`text-base font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>PPC {plan.name}</div>
                <div className="flex items-end gap-0.5 mb-1">
                  <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/ month</span>
                </div>
                <p className="text-gray-600 text-xs mb-4">Setup Fee – {plan.setupFee}</p>
                <div className="space-y-2 text-xs text-gray-400 mb-4">
                  <div className="flex justify-between"><span>Ad Budget</span><span className="text-white font-semibold">{plan.adBudget}</span></div>
                  <div className="flex justify-between"><span>Ad Groups</span><span className="text-white font-semibold">{plan.adGroups}</span></div>
                </div>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {plan.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />{h}
                    </li>
                  ))}
                </ul>
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
            Detailed Plan <span className="gradient-text">Comparison</span>
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
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom PPC Strategy?</h3>
            <p className="text-gray-400 mb-5 max-w-xl mx-auto">Enterprise brands with larger budgets get tailored pricing, dedicated teams, and priority support.</p>
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
