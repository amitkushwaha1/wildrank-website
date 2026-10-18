"use client";

import { motion } from "framer-motion";

import { credentials } from "@/lib/credentials";

/**
 * Awards and certifications. A flat grid — every tile visible at once, no
 * scrolling — so the full set of credentials reads in one glance.
 *
 * Each tile carries the reference-card look: the issuer's badge artwork on
 * top, the name, a thin accent divider, the note, plus a glowing gradient
 * border whose hue is set per-tile through an inline --ring-hue variable, so
 * no two tiles share the same travelling light.
 */

export default function Awards() {
  return (
    <section id="awards" className="section-gradient py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Recognition
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Awards &amp; Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The partnerships and certifications behind the work — each one
            issued by an organisation outside Wildrank, and each certificate
            available on request.
          </p>
        </motion.div>

        {/* Flat grid: 8 columns, every tile visible at once, no scrolling. */}
        <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {credentials.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.03 }}
              className="h-full"
            >
              <div
                className="glass-card ring-glow flex h-full flex-col items-center gap-3 rounded-2xl border border-dark-border p-4 text-center"
                style={{ "--ring-hue": String(i * 137.508) } as React.CSSProperties}
              >
                <div className="flex h-16 w-full shrink-0 items-center justify-center">
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.logo}
                      alt=""
                      width={c.w ?? 64}
                      height={c.h ?? 64}
                      loading="lazy"
                      decoding="async"
                      className="max-h-16 w-auto max-w-[6rem] object-contain drop-shadow-md"
                    />
                  ) : (
                    <c.icon className="h-8 w-8 text-accent" />
                  )}
                </div>

                <p className="text-xs font-bold text-ink leading-tight">{c.name}</p>
                <span
                  className="block h-0.5 w-8 rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(var(--ring-hue) 70% 55%), transparent)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
