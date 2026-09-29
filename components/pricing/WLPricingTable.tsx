"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { TiltCard } from "@/components/shared/Motion3D";

const plans = [
  {
    name: "Starter", price: 299, clients: "Up to 5", services: "SEO only", badge: null,
    color: "from-slate-400 to-slate-500", border: "border-slate-500/30",
    features: { "White-Label Reports": true, "NDA Protection": true, "Dedicated Manager": false, "Custom Branding": true, "Priority Support": false, "SEO Services": true, "PPC Management": false, "Social Media": false, "Web Development": false },
  },
  {
    name: "Agency", price: 699, clients: "Up to 15", services: "SEO + PPC", badge: null,
    color: "from-purple-400 to-purple-600", border: "border-purple-500/30",
    features: { "White-Label Reports": true, "NDA Protection": true, "Dedicated Manager": true, "Custom Branding": true, "Priority Support": false, "SEO Services": true, "PPC Management": true, "Social Media": false, "Web Development": false },
  },
  {
    name: "Pro Agency", price: 1499, clients: "Up to 30", services: "All Digital Marketing", badge: "Most Popular",
    color: "from-orange-400 to-pink-500", border: "border-orange-500/40",
    features: { "White-Label Reports": true, "NDA Protection": true, "Dedicated Manager": true, "Custom Branding": true, "Priority Support": true, "SEO Services": true, "PPC Management": true, "Social Media": true, "Web Development": false },
  },
  {
    name: "Enterprise", price: 2999, clients: "Unlimited", services: "All Services", badge: null,
    color: "from-cyan-400 to-purple-500", border: "border-cyan-500/30",
    features: { "White-Label Reports": true, "NDA Protection": true, "Dedicated Manager": true, "Custom Branding": true, "Priority Support": true, "SEO Services": true, "PPC Management": true, "Social Media": true, "Web Development": true },
  },
];

export default function WLPricingTable() {
  const featureKeys = Object.keys(plans[0].features);
  return (
    <section id="plans" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">White Label <span className="gradient-text">Agency Plans</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Wholesale pricing that lets you mark up 2–3x and remain competitive. All plans include full NDA protection.</p>
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
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/mo</span>
                </div>
                <div className="space-y-2 mb-5 text-xs text-gray-400">
                  {[["Clients", plan.clients], ["Services", plan.services]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between gap-2"><span>{k}</span><span className="text-white font-semibold text-right">{v}</span></div>
                  ))}
                </div>
                <div className="space-y-2 mb-5 flex-1">
                  {featureKeys.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                      {plan.features[feat as keyof typeof plan.features]
                        ? <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        : <X className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />}
                      {feat}
                    </div>
                  ))}
                </div>
                <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all mt-auto ${plan.badge ? "bg-accent hover:bg-accent-light text-white" : "border border-dark-border hover:border-primary/50 text-gray-300 hover:text-white"}`}>
                  Become a Partner
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
