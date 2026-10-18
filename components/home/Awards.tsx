"use client";

import { motion } from "framer-motion";

import { credentials } from "@/lib/credentials";

/**
 * Awards and certifications.
 *
 * The tile style follows the reference card: the issuer's mark sits at the top,
 * the name below it, a thin accent divider under the name, and the description
 * beneath that — generous whitespace, clean white cards that read as physical
 * objects rather than flat rectangles.
 *
 * Each tile carries a glowing gradient border on hover. The gradient angle and
 * hue are set per-tile through an inline --ring-hue variable, so no two tiles
 * share the same travelling light — it is random-feeling rather than a single
 * repeated colour. A wall of badges is only a trust signal while every badge
 * on it survives being asked about, so placeholders stay visibly placeholders
 * (dotted border, "provisional" tag) instead of quietly pretending to be held
 * credentials.
 *
 * The spatial feel comes from three layers: a subtle surface shadow at rest, a
 * lifted translateY on hover, and the glowing ring painting around the outside.
 * Nothing animates the page away from the reader — it is paint-only.
 */
export default function Awards() {
  const hasProvisional = credentials.some((c) => c.provisional);

  // Deterministic per-tile hue so the glow feels random but never changes
  // between renders (no layout shift, no flash of a different colour).
  const hueFor = (i: number) => (i * 137.508) % 360; // golden-angle spread

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
            Awards &amp; Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The partnerships and certifications behind the work — each one
            issued by an organisation outside Wildrank, and each certificate
            available on request.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map(({ name, note, icon: Icon, logo, href, provisional }, i) => {
            const hue = hueFor(i);
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="h-full"
              >
                <div
                  className={`glass-card ring-glow flex h-full flex-col items-start gap-3 rounded-2xl border p-6 ${
                    provisional
                      ? "border-dashed border-hairline/25"
                      : "border-dark-border"
                  }`}
                  style={{ "--ring-hue": String(hue) } as React.CSSProperties}
                >
                  {/* Issuer mark at the top of the tile, matching the reference:
                      a clean centered mark above the title. */}
                  <div className="flex h-12 w-full shrink-0 items-center justify-center rounded-xl bg-tint/[0.04]">
                    {logo ? (
                      <img
                        src={logo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="max-h-7 w-auto max-w-[4.5rem] object-contain"
                      />
                    ) : (
                      <Icon className="h-6 w-6 text-accent" />
                    )}
                  </div>

                  {/* Name + thin accent divider underneath, then the note. */}
                  <div className="min-w-0 flex-1 flex-col">
                    <p className="font-bold text-ink">{name}</p>
                    <span
                      className="mt-2 h-px w-8 bg-accent rounded"
                      style={{ background: `linear-gradient(90deg, hsl(var(--ring-hue) 70% 55%), transparent)` }}
                    />
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{note}</p>
                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block w-fit text-xs font-semibold text-accent hover:text-primary-light"
                      >
                        Verify &rarr;
                      </a>
                    )}
                    {provisional && (
                      <span className="mt-4 w-fit rounded border border-dashed border-hairline/30 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-subtle">
                        provisional
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-subtle"
        >
          {hasProvisional
            ? "Tiles with a dotted border are layout placeholders awaiting confirmation and are not claims. "
            : ""}
          A badge is a starting point, not a result. The part that matters is the
          work and the numbers it produced, and that is the rest of this page.
        </motion.p>
      </div>
    </section>
  );
}
