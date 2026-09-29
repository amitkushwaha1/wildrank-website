"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Zap, Star } from "lucide-react";
import CTA from "@/components/home/CTA";

type Val = boolean | string | number;

interface Plan {
  name: string;
  price: number;
  color: string;
  border: string;
  badge?: string;
  summary: { keywords: number; backlinks: number; pages: string; gbp: boolean; geo: boolean; geoSeo: boolean; aeo: boolean; aiTest: boolean; aiAudit: string };
}

const plans: Plan[] = [
  { name: "Basic", price: 499, color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    summary: { keywords: 30, backlinks: 40, pages: "Up to 10", gbp: false, geo: false, geoSeo: false, aeo: false, aiTest: true, aiAudit: "2 pages" } },
  { name: "Silver", price: 699, color: "from-gray-300 to-gray-400", border: "border-gray-400/30",
    summary: { keywords: 40, backlinks: 60, pages: "Up to 15", gbp: true, geo: false, geoSeo: false, aeo: false, aiTest: true, aiAudit: "4 pages" } },
  { name: "Gold", price: 999, color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/40", badge: "Most Popular",
    summary: { keywords: 50, backlinks: 100, pages: "Up to 25", gbp: true, geo: true, geoSeo: false, aeo: false, aiTest: true, aiAudit: "6 pages" } },
  { name: "Premium", price: 1799, color: "from-purple-400 to-blue-500", border: "border-purple-500/30",
    summary: { keywords: 100, backlinks: 200, pages: "Up to 40", gbp: true, geo: true, geoSeo: true, aeo: true, aiTest: true, aiAudit: "8 pages" } },
];

// Full feature comparison data per plan [Basic, Silver, Gold, Premium]
const sections: { title: string; rows: { label: string; values: Val[] }[] }[] = [
  { title: "Initial SEO Assessment", rows: [
    { label: "Pre-Launch Website Review", values: [false, false, true, true] },
    { label: "Competitor Landscape Analysis", values: [false, false, true, true] },
    { label: "Keyword Discovery & Mapping", values: [true, true, true, true] },
    { label: "Current Rankings Baseline", values: [true, true, true, true] },
    { label: "Duplicate Content Scan", values: [true, true, true, true] },
    { label: "Manual Penalty Inspection", values: [true, true, true, true] },
    { label: "Backlink Profile Review", values: [false, false, true, true] },
  ]},
  { title: "AI Visibility & Optimization", rows: [
    { label: "AI Semantic Entity Structuring", values: ["Starter", "Enhanced", "NLP-Rich", "Advanced NLP"] },
    { label: "AI Prompt Vulnerability Audit", values: [false, false, true, true] },
    { label: "Schema Markup Validation & Fix", values: [true, true, true, true] },
    { label: "Answer Engine Optimization (AEO)", values: [false, false, false, true] },
    { label: "Featured Snippet A/B Testing", values: [false, false, true, true] },
    { label: "AI Index Monitoring", values: ["Monthly", "Monthly", "Monthly", "Monthly"] },
    { label: "AI Image & Infographic Optimization", values: [false, false, "2/mo", "4/mo"] },
    { label: "AI Parsability & Site Architecture", values: ["Starter", "Enhanced", "Advanced", "Advanced"] },
    { label: "Internal Link Architecture", values: ["Starter", "Starter", "Enhanced", "Advanced"] },
    { label: "Conversational AI Readiness", values: [false, false, true, true] },
    { label: "Voice Search Readiness", values: [false, false, false, true] },
    { label: "Zero-Click SERP Optimization", values: [false, false, false, true] },
    { label: "AI Prompt-Targeted Landing Pages", values: [false, "1", "2", "3"] },
    { label: "AI-Optimized Blog Content", values: ["1/mo", "1/mo", "2/mo", "2/mo"] },
    { label: "AI-Ready FAQ Sections", values: [true, true, true, true] },
    { label: "In-Depth AI Competitor Insights", values: [false, false, true, true] },
    { label: "AI Ranking & Visibility Report", values: ["Monthly", "Monthly", "Monthly", "Monthly"] },
  ]},
  { title: "On-Page SEO Activities", rows: [
    { label: "Canonical Tag Verification", values: [true, true, true, true] },
    { label: "Title Tag Optimization", values: [true, true, true, true] },
    { label: "Meta Description Optimization", values: [true, true, true, true] },
    { label: "Header Tag (H1-H6) Optimization", values: [true, true, true, true] },
    { label: "Image Alt Attribute Optimization", values: [true, true, true, true] },
    { label: "Content Quality Enhancement", values: [true, true, true, true] },
    { label: "SEO-Friendly URL Structure", values: [true, true, true, true] },
    { label: "Website Navigation Audit", values: [true, true, true, true] },
    { label: "Custom 404 Page Setup", values: [true, true, true, true] },
    { label: "Broken Link Detection & Fix", values: [true, true, true, true] },
    { label: "Page Speed Optimization", values: [true, true, true, true] },
    { label: "Google Indexation Check", values: [true, true, true, true] },
    { label: "Robots.txt Configuration", values: [true, true, true, true] },
    { label: "XML Sitemap Setup", values: [true, true, true, true] },
    { label: "HTML Sitemap Generation", values: [true, true, true, true] },
    { label: "Hyperlink Audit", values: [false, false, true, true] },
    { label: "Mobile Responsiveness Review", values: [true, true, true, true] },
    { label: "Permalink Structure Audit", values: [false, false, true, true] },
    { label: "Internal Link Optimization", values: [false, false, true, true] },
    { label: "Google Search Console Setup", values: [true, true, true, true] },
    { label: "Bing Webmaster Setup", values: [false, false, true, true] },
    { label: "Analytics Integration", values: [true, true, true, true] },
    { label: "Structured Data Implementation", values: [false, false, true, true] },
    { label: "Blog Section Setup", values: [true, true, true, true] },
    { label: "Monthly Blog Posts", values: ["1", "2", "4", "5"] },
  ]},
  { title: "Off-Page SEO & Authority Building", rows: [
    { label: "Search Engine Directory Submission", values: [true, true, true, true] },
    { label: "Blog Content Creation", values: ["1", "1", "1", "3"] },
    { label: "Blog Backlinks", values: ["2", "2", "3", "5"] },
    { label: "Blog Social Sharing", values: ["6", "10", "16", "35"] },
    { label: "Article Content Writing", values: ["1", "2", "3", "4"] },
    { label: "Article Directory Submissions", values: ["1", "2", "3", "4"] },
    { label: "Article Syndication", values: ["5", "10", "15", "25"] },
    { label: "Image Distribution", values: ["2", "4", "8", "12"] },
    { label: "Contextual Link Placement", values: [true, true, true, true] },
    { label: "Keyword-Rich Anchor Text", values: [true, true, true, true] },
    { label: "Blog Post Social Amplification", values: [true, true, true, true] },
    { label: "Web 2.0 Profile Creation", values: [false, "1", "2", "5"] },
    { label: "Web 2.0 Bookmarking", values: [false, "4", "10", "25"] },
    { label: "Press Release Distribution", values: [false, false, false, true] },
    { label: "Social Bookmarking", values: ["15", "24", "30", "60"] },
    { label: "Micro-Blog Submissions", values: ["4", "7", "12", "20"] },
    { label: "Classified Ad Submissions", values: ["5", "8", "12", "25"] },
    { label: "Infographic Creation", values: [false, false, true, true] },
    { label: "Infographic Distribution", values: [false, false, true, true] },
    { label: "Google Business Profile Setup", values: [false, true, true, true] },
    { label: "Bing Local Listing", values: [true, true, true, true] },
    { label: "Presentation Submissions", values: [false, false, "1", "3"] },
    { label: "Video SEO (Client Provides)", values: [true, true, true, true] },
    { label: "Location Page Optimization", values: ["1", "2", "4", "10"] },
    { label: "Local Business Citations", values: ["1", "2", "4", "10"] },
    { label: "NAP Consistency Syndication", values: [true, true, true, true] },
  ]},
  { title: "Social Media (Complimentary)", rows: [
    { label: "Facebook Page Setup & Posting", values: [false, "4/mo", "8/mo", "16/mo"] },
    { label: "Instagram Profile & Posting", values: [false, true, "8/mo", "16/mo"] },
    { label: "Twitter/X Profile & Posting", values: [false, "4/mo", "8/mo", "16/mo"] },
    { label: "Pinterest Board Management", values: [false, false, "8/mo", "16/mo"] },
    { label: "LinkedIn Profile & Posting", values: [false, false, false, "16/mo"] },
  ]},
  { title: "Reporting & Support", rows: [
    { label: "Monthly Traffic Analytics Report", values: [true, true, true, true] },
    { label: "Monthly Keyword Rankings Report", values: [true, true, true, true] },
    { label: "Monthly Off-Page Activity Report", values: [true, true, true, true] },
    { label: "Email Support", values: [true, true, true, true] },
    { label: "Phone Support", values: [true, true, true, true] },
    { label: "Live Chat Support", values: [true, true, true, true] },
  ]},
];

function Cell({ v }: { v: Val }) {
  if (v === true) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B35] shadow-[0_0_8px_rgba(255,107,53,0.5)]">
      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
    </span>
  );
  if (v === false) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15">
      <X className="w-3 h-3 text-gray-500 stroke-[2.5]" />
    </span>
  );
  return <span className="text-xs text-accent font-semibold">{v}</span>;
}

export default function SEOPricingPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Initial SEO Assessment": true,
    "AI Visibility & Optimization": true,
  });

  const toggle = (s: string) => setOpenSections(prev => ({ ...prev, [s]: !prev[s] }));

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" /> SEO Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Our SEO <span className="gradient-text">Plans</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto">
            Pick the plan that fits your growth goals and let&apos;s start ranking.
          </motion.p>
        </div>
      </section>

      {/* Plan summary cards */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-6 border ${plan.border} relative ${plan.badge ? "pricing-popular ring-1 ring-accent/30" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"><Zap className="w-3 h-3" />{plan.badge}</span>
                  </div>
                )}
                <div className={`text-base font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>{plan.name}</div>
                <div className="flex items-end gap-0.5 mb-4">
                  <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/ month</span>
                </div>
                <div className="space-y-2 text-xs text-gray-400 mb-5">
                  <div className="flex justify-between"><span>Keywords Targeted</span><span className="text-white font-semibold">{plan.summary.keywords}</span></div>
                  <div className="flex justify-between"><span>Backlinks / Month</span><span className="text-white font-semibold">{plan.summary.backlinks}</span></div>
                  <div className="flex justify-between"><span>Pages Optimized</span><span className="text-white font-semibold">{plan.summary.pages}</span></div>
                  <div className="flex justify-between"><span>Google Business Profile</span><span>{plan.summary.gbp ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.5)]"><Check className="w-3 h-3 text-white stroke-[2.5]" /></span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.4)]"><X className="w-2.5 h-2.5 text-white stroke-[2.5]" /></span>}</span></div>
                  <div className="flex justify-between"><span>Geotagging</span><span>{plan.summary.geo ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.5)]"><Check className="w-3 h-3 text-white stroke-[2.5]" /></span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.4)]"><X className="w-2.5 h-2.5 text-white stroke-[2.5]" /></span>}</span></div>
                  <div className="flex justify-between"><span>G.E.O Strategy</span><span>{plan.summary.geoSeo ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.5)]"><Check className="w-3 h-3 text-white stroke-[2.5]" /></span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.4)]"><X className="w-2.5 h-2.5 text-white stroke-[2.5]" /></span>}</span></div>
                  <div className="flex justify-between"><span>A.E.O Strategy</span><span>{plan.summary.aeo ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.5)]"><Check className="w-3 h-3 text-white stroke-[2.5]" /></span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.4)]"><X className="w-2.5 h-2.5 text-white stroke-[2.5]" /></span>}</span></div>
                  <div className="flex justify-between"><span>AI Compatibility Audit</span><span>{plan.summary.aiTest ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.5)]"><Check className="w-3 h-3 text-white stroke-[2.5]" /></span> : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_rgba(255,107,53,0.4)]"><X className="w-2.5 h-2.5 text-white stroke-[2.5]" /></span>}</span></div>
                  <div className="flex justify-between"><span>AI Visibility Report</span><span className="text-accent font-semibold">{plan.summary.aiAudit}</span></div>
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${plan.badge ? "bg-accent hover:bg-accent-dark text-white" : "border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white"}`}>
                  Start Today
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature comparison */}
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
                      {/* Header row */}
                      <div className="grid grid-cols-5 border-b border-white/5 bg-[#0d0d0d]">
                        <div className="px-6 py-2 text-xs text-gray-600 font-medium">Feature</div>
                        {plans.map(p => (
                          <div key={p.name} className={`px-2 py-2 text-center text-xs font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</div>
                        ))}
                      </div>
                      {/* Rows */}
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

          {/* Bottom CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 glass-card rounded-2xl p-8 border border-accent/20 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Enterprise Plan?</h3>
            <p className="text-gray-400 mb-5 max-w-xl mx-auto">Large websites and agencies get custom pricing with dedicated resources, white-label options, and priority support.</p>
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
