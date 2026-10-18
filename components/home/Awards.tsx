"use client";

import { motion } from "framer-motion";

import { credentials } from "@/lib/credentials";

/**
 * Awards and certifications, presented the same way the Client Stories row is:
 * one continuously rolling full-bleed strip, so the badges read as a wall of
 * trust rather than a checklist to stop and audit.
 *
 * The motion is CSS on a track that repeats three times and shifts by exactly
 * one repeat, so the restart is pixel-identical with no seam — the same
 * pattern Testimonials.tsx documents. The first repeat is the real content and
 * the other two are aria-hidden.
 *
 * Each tile still carries the reference-card look — the issuer's badge artwork
 * on top, the name, a thin accent divider, the note — plus a glowing gradient
 * border whose hue is set per-tile through an inline --ring-hue variable, so
 * no two tiles share the same travelling light.
 */
const COPIES = 3;

function Card({
  c,
  decorative,
}: {
  c: (typeof credentials)[number] & { index: number; decorative?: boolean };
  decorative?: boolean;
}) {
  return (
    <article
      aria-hidden={decorative || undefined}
      className="glass-card ring-glow relative flex w-[290px] shrink-0 flex-col items-center gap-4 rounded-2xl border border-dark-border p-8 text-center"
      style={{ "--ring-hue": String(c.index * 137.508) } as React.CSSProperties}
    >
      <div className="flex h-28 w-full shrink-0 items-center justify-center">
        {c.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.logo}
            alt=""
            loading="eager"
            decoding="async"
            className="max-h-28 w-auto max-w-[10rem] object-contain drop-shadow-md"
          />
        ) : (
          <c.icon className="h-10 w-10 text-accent" />
        )}
      </div>

      <p className="text-lg font-bold text-ink">{c.name}</p>
      <span
        className="block h-0.5 w-10 rounded"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--ring-hue) 70% 55%), transparent)",
        }}
      />
      <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{c.note}</p>
    </article>
  );
}

export default function Awards() {
  // Whole list, then the same list again — exactly how Testimonials builds its
  // copies, so the strip reads Google → Red Herring → ISO → … in a cycle.
  const indexed = credentials.map((c, index) => ({ ...c, index }));
  const copies = Array.from({ length: COPIES }, (_, copy) =>
    indexed.map((c) => ({ ...c, decorative: copy > 0 })),
  ).flat();

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
      </div>

      {/* Full-bleed, so the row runs off both edges instead of stopping at the
          gutter — identical to the Client Stories strip above this section. */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:overflow-x-auto">
        <div className="flex w-max items-stretch gap-6 pr-6 animate-marquee-left motion-reduce:animate-none">
          {copies.map((c, i) => (
            <Card key={`${c.name}-${i}`} c={c} decorative={c.decorative} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-10 text-center text-sm text-subtle">
          A badge is a starting point, not a result. The part that matters is
          the work and the numbers it produced, and that is the rest of this
          page.
        </p>
      </div>
    </section>
  );
}
