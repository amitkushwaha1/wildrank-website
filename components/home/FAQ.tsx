"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What makes Wildrank different from other digital marketing agencies?",
    a: "We combine 17+ years of experience with AI-powered tools and a team of 350+ specialists. Unlike generalist agencies, we offer end-to-end services — from SEO and PPC to custom software development — all under one roof. Our white-label model also lets agencies scale without hiring.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Most clients start seeing measurable improvements in rankings and traffic within 3–6 months. However, the timeline depends on your industry competitiveness, current website health, and the scope of work. We provide monthly reports so you always know where you stand.",
  },
  {
    q: "Do you offer white-label services for agencies?",
    a: "Yes — white-label is one of our core offerings. We work as a silent partner for agencies worldwide, delivering SEO, PPC, social media, web development, and content services under your brand. Our clients typically save 40–60% compared to hiring in-house.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience across e-commerce, healthcare, real estate, education, finance, travel, automotive, and B2B SaaS. Our strategies are always tailored to your specific industry dynamics, audience behavior, and competitive landscape.",
  },
  {
    q: "How do you measure and report on campaign performance?",
    a: "We use a combination of Google Analytics, Search Console, and proprietary dashboards to track KPIs that matter — organic traffic, conversion rates, cost per acquisition, and revenue attribution. You get a detailed monthly report plus access to a live dashboard.",
  },
  {
    q: "Can you handle both digital marketing and software development?",
    a: "Absolutely. We are a full-service digital company. Our development team builds websites, mobile apps, and custom software, while our marketing team drives traffic and conversions. Having both under one roof means faster execution and better alignment between your tech and marketing.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible engagement models — monthly retainers, project-based pricing, and dedicated team models. Pricing depends on the scope and services required. We always start with a free audit and consultation to understand your needs before proposing a plan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-primary/40" : "border-dark-border"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="flex-shrink-0">
                  {open === i ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-dark-border pt-4">
                      {faq.a}
                    </div>
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
