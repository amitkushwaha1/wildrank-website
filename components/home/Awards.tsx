"use client";

import { motion } from "framer-motion";

import { credentials } from "@/lib/credentials";

/**
 * Awards and certifications.
 *
 * The layout follows the pattern most agency sites use — a grid of credential
 * tiles with the mark, the name and one line saying what the thing is — but
 * with two deliberate differences.
 *
 * The first is that the note explains the programme instead of claiming an
 * outcome, so the tile stays true whatever the reader already knows about it.
 * The second is that the list is short and is sourced from lib/credentials.ts.
 * A wall of badges is only a trust signal while every badge on it survives
 * being asked about; the moment one does not, the whole block reads as
 * decoration and the reader discounts the numbers too.
 *
 * The closing line does the work a badge wall cannot: it hands attention back
 * to the results instead of asking the reader to be impressed by logos.
 */
export default function Awards() {
  return (
    <section id="awards" className="bg-dark py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Awards &amp; Certifications
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            The credentials <span className="gradient-text">behind the work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Every entry below is issued by an organisation outside Wildrank, and
            every certificate is available on request.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map(({ name, note, icon: Icon, href }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <div className="glass-card flex h-full gap-4 rounded-2xl border border-dark-border p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary-light" />
                </span>
                <div>
                  <p className="font-bold text-ink">{name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{note}</p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-accent hover:text-primary-light"
                    >
                      Verify &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-subtle"
        >
          A badge is a starting point, not a result. The part that matters is the
          work and the numbers it produced, and that is the rest of this page.
        </motion.p>
      </div>
    </section>
  );
}
