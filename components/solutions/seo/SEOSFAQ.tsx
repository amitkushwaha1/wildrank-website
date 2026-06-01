"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does SEO take to show results?",           a: "Most clients see measurable improvements in rankings and organic traffic within 3–6 months. Competitive industries may take longer. We provide monthly reports so you can track progress from day one." },
  { q: "What is included in your SEO service?",            a: "Every engagement includes a full technical audit, keyword research, on-page optimisation, off-page link building, monthly ranking reports, and dedicated email/phone/chat support." },
  { q: "Do you use white-hat SEO techniques only?",        a: "Yes — always. We strictly follow Google's Webmaster Guidelines. No black-hat tactics, no PBNs, no keyword stuffing. Our approach is built for long-term, sustainable rankings." },
  { q: "What is Answer Engine Optimisation (AEO)?",        a: "AEO optimises your content to appear in AI-generated answers, featured snippets, and voice search results. It's increasingly important as AI-powered search grows." },
  { q: "Do you offer local SEO?",                          a: "Yes. Local SEO including Google My Business optimisation, geotagging, city-specific landing pages, and localised link building is available across our plans." },
  { q: "Is there a minimum commitment?",                   a: "We recommend a minimum of 3 months to see meaningful results, but we don't lock you into long-term contracts. You can cancel with 30 days notice." },
  { q: "How do I see what you're doing each month?",       a: "You receive a keyword ranking report, organic traffic analytics report, and off-page submission report every month, plus access to a live dashboard for real-time tracking." },
];

export default function SEOSFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">SEO Questions <span className="gradient-text">Answered</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to know before getting started.</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? "border-primary/40" : "border-dark-border"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={open === i}>
                <span className="text-white font-medium pr-4">{faq.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-accent flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-dark-border pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
