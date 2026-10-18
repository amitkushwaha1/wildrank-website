"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

/**
 * The site's single Q&A presentation.
 *
 * Each page used to roll its own. The homepage had a glass accordion with +/-
 * toggles and one question open on load; /geo-aeo-services had a flat list of
 * always-open questions under a bare "Questions" heading. The answers were
 * written to the same standard but arrived looking like two different websites,
 * which is the inconsistency that got flagged.
 *
 * One component now, used by both, so they cannot drift apart again. The
 * questions and answers themselves stay per-page — only the vehicle is shared.
 */
export default function FaqAccordion({
  items,
  eyebrow = "FAQ",
  heading,
  accent,
  intro,
  className = "",
}: {
  items: FaqItem[];
  eyebrow?: string;
  /** Leading, unaccented part of the H2. */
  heading: string;
  /** Trailing word of the H2, rendered in the brand gradient. */
  accent?: string;
  intro?: string;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`py-24 lg:py-16 bg-dark ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-4">
            {heading}
            {accent ? (
              <>
                {" "}
                <span className="gradient-text">{accent}</span>
              </>
            ) : null}
          </h2>
          {intro ? <p className="text-muted text-lg">{intro}</p> : null}
        </motion.div>

        <div className="space-y-3">
          {items.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.06 }}
              className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-primary/40" : "border-dark-border"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-ink font-medium pr-4">{faq.q}</span>
                <span className="flex-shrink-0">
                  {open === i ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted" />
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
                    <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-dark-border pt-4">
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
