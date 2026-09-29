"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, ChevronDown, ChevronUp, DollarSign } from "lucide-react";
import { TiltCard } from "@/components/shared/Motion3D";

const plans = [
  {
    name: "Silver", price: 499, keywords: 30, backlinks: 50, pages: 10, gmb: false,
    color: "from-slate-400 to-slate-500", border: "border-slate-500/30", badge: null,
    features: { "Technical SEO Audit": true, "Keyword Research": true, "On-Page Optimization": true, "Heading Tags": false, "Structured Data": false, "Local SEO": false, "AEO Optimization": false, "Blog Posts/mo": "3", "Backlink Building": true, "Social Bookmarking": "15", "Monthly Reports": true, "Phone Support": true },
  },
  {
    name: "Gold", price: 699, keywords: 40, backlinks: 70, pages: 15, gmb: true,
    color: "from-yellow-400 to-yellow-600", border: "border-yellow-500/30", badge: null,
    features: { "Technical SEO Audit": true, "Keyword Research": true, "On-Page Optimization": true, "Heading Tags": false, "Structured Data": false, "Local SEO": true, "AEO Optimization": true, "Blog Posts/mo": "5", "Backlink Building": true, "Social Bookmarking": "25", "Monthly Reports": true, "Phone Support": true },
  },
  {
    name: "Platinum", price: 999, keywords: 50, backlinks: 150, pages: 20, gmb: true,
    color: "from-blue-400 to-blue-600", border: "border-blue-500/40", badge: "Most Popular",
    features: { "Technical SEO Audit": true, "Keyword Research": true, "On-Page Optimization": true, "Heading Tags": false, "Structured Data": false, "Local SEO": true, "AEO Optimization": true, "Blog Posts/mo": "10", "Backlink Building": true, "Social Bookmarking": "45", "Monthly Reports": true, "Phone Support": true },
  },
  {
    name: "Diamond", price: 1799, keywords: 100, backlinks: 200, pages: 25, gmb: true,
    color: "from-purple-400 to-cyan-500", border: "border-purple-500/30", badge: null,
    features: { "Technical SEO Audit": true, "Keyword Research": true, "On-Page Optimization": true, "Heading Tags": true, "Structured Data": true, "Local SEO": true, "AEO Optimization": true, "Blog Posts/mo": "20", "Backlink Building": true, "Social Bookmarking": "Unlimited", "Monthly Reports": true, "Phone Support": true },
  },
];

type FeatureVal = boolean | string;

function Cell({ v }: { v: FeatureVal }) {
  if (v === true)  return <Check className="w-4 h-4 text-green-400 mx-auto" />;
  if (v === false) return <X className="w-4 h-4 text-gray-600 mx-auto" />;
  if (v === "Paid") return <span className="flex items-center justify-center gap-0.5 text-yellow-400 text-xs font-semibold"><DollarSign className="w-3 h-3" />Add-on</span>;
  return <span className="text-xs text-accent font-semibold">{v}</span>;
}

export default function SEOPricingTable() {
  const [open, setOpen] = useState(true);
  const featureKeys = Object.keys(plans[0].features);

  return (
    <section id="plans" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Choose Your <span className="gradient-text">SEO Plan</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">All plans include a dedicated SEO manager, monthly reports, and full transparency. Scale up anytime.</p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <TiltCard intensity={8} className={`glass-card rounded-2xl p-6 border ${plan.border} relative h-full ${plan.badge ? "pricing-popular" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      <Zap className="w-3 h-3" />{plan.badge}
                    </span>
                  </div>
                )}
                <div className={`text-base font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/mo</span>
                </div>
                <div className="space-y-2 mb-5 text-xs text-gray-400">
                  {[["Keywords", plan.keywords], ["Backlinks/mo", plan.backlinks], ["Landing Pages", plan.pages]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between"><span>{k}</span><span className="text-white font-semibold">{v}</span></div>
                  ))}
                  <div className="flex justify-between"><span>Google My Business</span><span>{plan.gmb ? <Check className="w-3.5 h-3.5 text-green-400 inline" /> : <X className="w-3.5 h-3.5 text-gray-600 inline" />}</span></div>
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${plan.badge ? "bg-accent hover:bg-accent-light text-white" : "border border-dark-border hover:border-primary/50 text-gray-300 hover:text-white"}`}>
                  Get Started
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card rounded-2xl border border-dark-border overflow-hidden">
          <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <span className="text-sm font-bold text-white uppercase tracking-wider">Full Feature Comparison</span>
            {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="grid grid-cols-5 border-b border-dark-border bg-dark-card">
                  <div className="px-6 py-2 text-xs text-gray-600 font-medium">Feature</div>
                  {plans.map((p) => (
                    <div key={p.name} className={`px-2 py-2 text-center text-xs font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</div>
                  ))}
                </div>
                {featureKeys.map((feat, fi) => (
                  <div key={feat} className={`grid grid-cols-5 border-b border-dark-border/50 last:border-0 ${fi % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                    <div className="px-6 py-3 text-sm text-gray-400">{feat}</div>
                    {plans.map((p) => (
                      <div key={p.name} className="px-2 py-3 flex items-center justify-center">
                        <Cell v={p.features[feat as keyof typeof p.features]} />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
