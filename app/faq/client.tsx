"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { FAQS, FAQ_CATEGORIES, type FaqCategory } from "@/data/faqs";
import CTA from "@/components/home/CTA";

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = FAQS.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const counts: Record<string, number> = { All: FAQS.length };
  for (const cat of FAQ_CATEGORIES) {
    counts[cat] = FAQS.filter((f) => f.category === cat).length;
  }

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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {FAQS.length} answers covering SEO, digital marketing, PPC, social media, AI search (GEO/AEO), white label services, web development, and agency pricing. Written to be cited by search engines and AI assistants.
            </p>
          </div>

          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-tint/5 border border-hairline/10 text-ink placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "All"
                  ? "bg-accent text-white"
                  : "bg-tint/5 text-muted hover:text-ink border border-hairline/10"
              }`}
            >
              All ({counts["All"]})
            </button>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-tint/5 text-muted hover:text-ink border border-hairline/10"
                }`}
              >
                {cat} ({counts[cat]})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {filtered.map((faq) => (
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

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">No questions match your search. Try a different term.</p>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-faint">
            Showing {filtered.length} of {FAQS.length} questions
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}