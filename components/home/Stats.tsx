"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

/**
 * The proof band.
 *
 * This was three stacked rows saying one thing: a centred "A Track Record Built
 * Nationwide" heading, a centred card repeating "500+ / Clients Served
 * Company-Wide", and a badge strip. The same claim also headed the first hero
 * stat card, so a visitor read it twice before clearing two sections — which is
 * what the review caught.
 *
 * It is now two columns. The track record and the number sit on the left and
 * are stated once. The right half carries the generative-search capability that
 * actually earns organic traffic, with links into the pages that sell it —
 * on-page content that targets the terms buyers now search, rather than a third
 * restatement of a client count.
 *
 * Only the client count is owner-verified. The former 660+ projects, 350+ team,
 * 8,000+ resources and 17+ years claims stay deleted rather than restated.
 */
const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Clients Served Company-Wide" },
];

const capabilities = [
  {
    href: "/geo-aeo-services",
    label: "GEO & AEO Services",
    note: "Get cited inside AI answers",
  },
  {
    href: "/ai-marketing",
    label: "AI Marketing",
    note: "Automate the acquisition loop",
  },
  {
    href: "/ai-receptionist",
    label: "AI Receptionist",
    note: "Recover the calls you miss",
  },
  {
    href: "/white-label-ai-services",
    label: "White-Label AI Services",
    note: "Deliver GEO under your own brand",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  // Before hydration the real figure is rendered server-side, so crawlers and
  // no-JS clients read "500+" rather than a literal "0+". The count-up is a
  // progressive enhancement layered on top of already-correct content.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {(mounted ? count : target).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-16 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ── Left — the track record, stated once ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Track Record
            </span>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              A Track Record Built Nationwide
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Two decades of performance marketing and software engineering, for
              single-location businesses and enterprise teams alike.
            </p>

            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card mt-6 flex items-center gap-5 rounded-2xl p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-primary">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Right — what generative search actually requires ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 lg:col-span-7 lg:p-8"
          >
            <h3 className="mb-3 text-xl font-bold text-ink">
              Ranking is table stakes. Being cited is the job.
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Buyers now ask ChatGPT, Gemini and Perplexity for a shortlist
              instead of scrolling ten blue links. Generative Engine
              Optimization (GEO) makes your brand the answer — accurate entity
              data, structured markup, and definitional content the models can
              actually read and cite. It is the same work that wins organic
              traffic today and the answer slot tomorrow.
            </p>

            <div className="space-y-2">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.href}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <Link
                    href={c.href}
                    className="group flex items-center justify-between rounded-xl border border-hairline/10 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-tint/5"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {c.label}
                      </span>
                      <span className="block text-xs text-muted">{c.note}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Certifications. These are owner-supplied claims and are left as
               supplied; "ISO 9001:2008" is a withdrawn edition, so the year is
               worth confirming before this is treated as a trust signal. ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 border-t border-dark-border pt-10"
        >
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-faint">
            Recognized & Certified By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Google Partner", "Red Herring Top 100", "ISO 9001:2008"].map(
              (name) => (
                <div
                  key={name}
                  className="rounded-lg border border-dark-border bg-tint/5 px-5 py-2.5 text-xs font-semibold text-muted"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
