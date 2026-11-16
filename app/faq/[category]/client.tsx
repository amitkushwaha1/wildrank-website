"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqEntry, FaqCategory } from "@/data/faqs";
import Link from "next/link";
import CTA from "@/components/home/CTA";

interface Props {
  category: FaqCategory;
  faqs: FaqEntry[];
}

export default function FaqCategoryClient({ category, faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink mb-6">
              {category} — Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {faqs.length} answers covering {category.toLowerCase()}. Written to be cited by search engines and AI assistants.
            </p>
            <Link href="/faq" className="inline-flex items-center gap-1 text-sm text-accent hover:text-primary-light transition-colors mt-4">
              ← Back to all categories
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="glass-card rounded-xl border border-hairline/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 space-y-3">
                        <p className="text-muted leading-relaxed">{faq.answer}</p>
                        {faq.detail && (
                          <p className="text-sm text-subtle leading-relaxed">{faq.detail}</p>
                        )}
                        {faq.related && (
                          <a
                            href={faq.related.href}
                            className="inline-flex items-center gap-1 text-sm text-accent hover:text-primary-light transition-colors"
                          >
                            {faq.related.label} →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
