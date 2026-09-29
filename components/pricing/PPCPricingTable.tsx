"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { TiltCard } from "@/components/shared/Motion3D";

const plans = [
  {
    name: "Starter", price: 499, adSpend: "Up to $3K", campaigns: 2, platforms: "Google Ads", badge: null,
    color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    features: ["Keyword Research", "Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Monthly Report", "Search Ads", false, false, false, false],
  },
  {
    name: "Growth", price: 799, adSpend: "Up to $8K", campaigns: 4, platforms: "Google + Bing", badge: null,
    color: "from-orange-400 to-orange-600", border: "border-orange-500/30",
    features: ["Keyword Research", "Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Monthly Report", "Search Ads", "Display Ads", "Remarketing", false, false],
  },
  {
    name: "Pro", price: 1299, adSpend: "Up to $20K", campaigns: 8, platforms: "Google + Bing + Meta", badge: "Most Popular",
    color: "from-blue-400 to-blue-600", border: "border-blue-500/40",
    features: ["Keyword Research", "Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Monthly Report", "Search Ads", "Display Ads", "Remarketing", "Shopping Ads", "Social PPC"],
  },
  {
    name: "Enterprise", price: 2499, adSpend: "Unlimited", campaigns: "Unlimited", platforms: "All Platforms", badge: null,
    color: "from-purple-400 to-cyan-500", border: "border-purple-500/30",
    features: ["Keyword Research", "Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Monthly Report", "Search Ads", "Display Ads", "Remarketing", "Shopping Ads", "Social PPC"],
  },
];

const featureLabels = ["Keyword Research", "Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Monthly Report", "Search Ads", "Display Ads", "Remarketing", "Shopping Ads", "Social PPC"];

export default function PPCPricingTable() {
  return (
    <section id="plans" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">PPC <span className="gradient-text">Management Plans</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Flat monthly management fees — no percentage of spend. Your budget goes entirely to ads.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <TiltCard intensity={8} className={`glass-card rounded-2xl p-6 border ${plan.border} relative h-full flex flex-col ${plan.badge ? "pricing-popular" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"><Zap className="w-3 h-3" />{plan.badge}</span>
                  </div>
                )}
                <div className={`text-base font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">+ ad spend billed separately</p>
                <div className="space-y-2 mb-5 text-xs text-gray-400 flex-1">
                  {[["Ad Spend", plan.adSpend], ["Campaigns", plan.campaigns], ["Platforms", plan.platforms]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between gap-2"><span>{k}</span><span className="text-white font-semibold text-right">{v}</span></div>
                  ))}
                </div>
                <div className="space-y-2 mb-5">
                  {featureLabels.map((feat, fi) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                      {plan.features[fi]
                        ? <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        : <X className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />}
                      {feat}
                    </div>
                  ))}
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all mt-auto ${plan.badge ? "bg-accent hover:bg-accent-light text-white" : "border border-dark-border hover:border-primary/50 text-gray-300 hover:text-white"}`}>
                  Get Started
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 border border-accent/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need a Custom PPC Strategy?</h3>
          <p className="text-gray-400 mb-5 max-w-xl mx-auto">Enterprise brands with large budgets get custom pricing, dedicated teams, and priority support.</p>
          <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
            Talk to Sales
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
