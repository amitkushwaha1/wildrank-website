"use client";

import { motion } from "framer-motion";

import { credentials } from "@/lib/credentials";

/**
 * Awards and certifications.
 *
 * The layout follows the pattern most agency sites use — a grid of credential
 * tiles with the mark, the name and one line saying what the thing is — with
 * two deliberate differences.
 *
 * The first is that the note explains the programme instead of claiming an
 * outcome, so a tile stays true whatever the reader already knows about it.
 * The second is the dotted treatment on any entry that has not been confirmed.
 * A wall of badges is only a trust signal while every badge on it survives
 * being asked about, and this is the one section on the site where a single
 * invented line is worth less than having no section at all — so the
 * placeholders are visibly placeholders rather than quietly indistinguishable
 * from the real three.
 */
export default function Awards() {
  const hasProvisional = credentials.some((c) => c.provisional);

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
            Trusted Performance.{" "}
            <span className="gradient-text">Proven Outcomes.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The partnerships and certifications behind the work — each one
            issued by an organisation outside Wildrank, and each certificate
            available on request.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map(({ name, note, icon: Icon, logo, href, provisional }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="h-full"
            >
              <div
                className={`glass-card ring-glow flex h-full gap-4 rounded-2xl border p-6 ${
                  provisional
                    ? "border-dashed border-hairline/25"
                    : "border-dark-border"
                }`}
              >
                {/* A fixed-width chip, not a square. The issuers' marks include
                    both square glyphs (Google, Meta, Semrush) and wide wordmarks
                    (GoodFirms is 6.5:1), and a square badge would render the
                    wordmarks about eight pixels tall. One width for every tile
                    keeps the names and notes aligned down each row, which is
                    what a square badge was buying in the first place. */}
                <span className="flex h-12 w-[5.5rem] shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {logo ? (
                    <img
                      src={logo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="max-h-7 w-auto max-w-[5rem] object-contain"
                    />
                  ) : (
                    <Icon className="h-6 w-6 text-primary-light" />
                  )}
                </span>
                {/* The provisional tag sits at the foot of the tile rather than
                    beside the name: beside it, the longer names pushed it onto
                    its own line and knocked the notes out of alignment with the
                    tiles next to them. */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="font-bold text-ink">{name}</p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{note}</p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block w-fit text-xs font-semibold text-accent hover:text-primary-light"
                    >
                      Verify &rarr;
                    </a>
                  )}
                  {provisional && (
                    <span className="mt-3 w-fit rounded border border-dashed border-hairline/30 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-subtle">
                      provisional
                    </span>
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
