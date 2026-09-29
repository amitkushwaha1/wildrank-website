"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { TiltCard } from "@/components/shared/Motion3D";

const plans = [
  {
    name: "MVP App", price: 4999, platform: "iOS or Android", timeline: "8–10 weeks", badge: null,
    color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    features: { "UI/UX Design": true, "Native or Cross-Platform": "Cross-Platform", "Push Notifications": true, "API Integration": "Basic", "Admin Dashboard": false, "App Store Submission": true, "Source Code Ownership": true, "6 Months Support": false },
  },
  {
    name: "Standard App", price: 9999, platform: "iOS + Android", timeline: "12–16 weeks", badge: null,
    color: "from-green-400 to-green-600", border: "border-green-500/30",
    features: { "UI/UX Design": true, "Native or Cross-Platform": "Both", "Push Notifications": true, "API Integration": "Advanced", "Admin Dashboard": true, "App Store Submission": true, "Source Code Ownership": true, "6 Months Support": true },
  },
  {
    name: "Full-Featured", price: 19999, platform: "iOS + Android", timeline: "16–24 weeks", badge: "Most Popular",
    color: "from-blue-400 to-purple-500", border: "border-blue-500/40",
    features: { "UI/UX Design": true, "Native or Cross-Platform": "Both", "Push Notifications": true, "API Integration": "Custom", "Admin Dashboard": true, "App Store Submission": true, "Source Code Ownership": true, "6 Months Support": true },
  },
  {
    name: "Enterprise", price: 0, platform: "Custom", timeline: "Custom", badge: null,
    color: "from-purple-400 to-cyan-500", border: "border-purple-500/30",
    features: { "UI/UX Design": true, "Native or Cross-Platform": "Both", "Push Notifications": true, "API Integration": "Enterprise", "Admin Dashboard": true, "App Store Submission": true, "Source Code Ownership": true, "6 Months Support": true },
  },
];

export default function MobilePricingTable() {
  const featureKeys = Object.keys(plans[0].features);
  return (
    <section id="plans" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mobile App <span className="gradient-text">Development Packages</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Fixed-price packages with milestone-based payments. You own 100% of the source code.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  {plan.price > 0
                    ? <><span className="text-3xl font-extrabold text-white">${plan.price.toLocaleString()}</span></>
                    : <span className="text-2xl font-extrabold text-white">Custom</span>}
                </div>
                <p className="text-xs text-gray-500 mb-4">one-time project fee</p>
                <div className="space-y-2 mb-5 text-xs text-gray-400">
                  {[["Platform", plan.platform], ["Timeline", plan.timeline]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between gap-2"><span>{k}</span><span className="text-white font-semibold text-right">{v}</span></div>
                  ))}
                </div>
                <div className="space-y-2 mb-5 flex-1">
                  {featureKeys.map((feat) => {
                    const val = plan.features[feat as keyof typeof plan.features];
                    return (
                      <div key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                        {val === true ? <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                          : val === false ? <X className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                          : <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />}
                        <span>{feat}{typeof val === "string" ? `: ${val}` : ""}</span>
                      </div>
                    );
                  })}
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all mt-auto ${plan.badge ? "bg-accent hover:bg-accent-light text-white" : "border border-dark-border hover:border-primary/50 text-gray-300 hover:text-white"}`}>
                  {plan.price === 0 ? "Get Custom Quote" : "Start Project"}
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
