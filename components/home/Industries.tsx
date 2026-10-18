"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  HardHat,
  Laptop,
  Scale,
  Stethoscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { INDUSTRIES } from "@/data/industries";

/**
 * Industries.
 *
 * This was ten icon tiles covering the sectors a general agency list carries —
 * e-commerce, education, travel, food — and not one of them was a link. The
 * site has a real vertical cluster behind it (seven trades, each with its own
 * pages, its own copy and its own objections), and the homepage pointed at none
 * of it.
 *
 * So the tiles are now built from the same array the pages are, which means
 * they cannot drift, and each one links into its own cluster. The copy is each
 * vertical's own pain point rather than a sentence with the noun swapped, and
 * there is no invented outcome line, because none of these has been measured
 * yet.
 *
 * The breadth the old list was carrying is not lost — the eighth card covers
 * every other sector, which is also where the old "don't see your industry?"
 * banner went. Folding it into the grid removed a whole band of padding.
 */
const STYLES: Record<
  string,
  { icon: LucideIcon; color: string; bg: string }
> = {
  roofing: { icon: HardHat, color: "text-orange-700", bg: "bg-orange-500/10" },
  "hvac-plumbing": { icon: Wrench, color: "text-blue-600", bg: "bg-blue-500/10" },
  legal: { icon: Scale, color: "text-indigo-600", bg: "bg-indigo-500/10" },
  "dental-medical": { icon: Stethoscope, color: "text-red-700", bg: "bg-red-500/10" },
  "real-estate": { icon: Building2, color: "text-cyan-700", bg: "bg-cyan-500/10" },
  "auto-repair": { icon: Car, color: "text-purple-600", bg: "bg-purple-500/10" },
  "b2b-saas": { icon: Laptop, color: "text-green-700", bg: "bg-green-500/10" },
};

/**
 * Pain points run to two sentences, and the first sentence is not always enough
 * to carry a card — "Crews are on roofs." on its own read as a caption rather
 * than a problem. So a second sentence is pulled in whenever the first lands
 * under a hundred characters, and the result is trimmed on a word boundary
 * rather than mid-word.
 */
const painCopy = (s: string) => {
  const sentences = s.split(/(?<=[.!?])\s+/);
  let out = sentences[0];
  for (let i = 1; i < sentences.length && out.length < 100; i += 1) {
    out += " " + sentences[i];
  }
  if (out.length <= 190) return out;
  const cut = out.slice(0, 187);
  return cut.slice(0, cut.lastIndexOf(" ")).trimEnd() + "…";
};

const MotionLink = motion(Link);

export default function Industries() {
  return (
    <section id="industries" className="bg-dark py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Industries We Serve
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Driving growth across{" "}
            <span className="gradient-text">every industry</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Two problems show up in every trade: the buyer cannot find you, and
            once they do, they cannot reach you. These are the verticals we have
            built for in depth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => {
            const style = STYLES[industry.slug];
            if (!style) return null;
            const Icon = style.icon;
            return (
              <MotionLink
                key={industry.slug}
                href={`/industries/${industry.slug}/ai-receptionist`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass-card ring-glow group flex h-full flex-col rounded-2xl border border-dark-border p-5 transition-colors hover:border-primary/30"
              >
                <span
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${style.bg}`}
                >
                  <Icon className={`h-5 w-5 ${style.color}`} />
                </span>
                <p className="mb-2 font-bold text-ink">{industry.name}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {painCopy(industry.painPoint)}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  See the playbook
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </MotionLink>
            );
          })}

          {/* Carries the breadth the old ten-tile row was there for, and
              replaces the standalone "don't see your industry?" banner. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="glass-card flex h-full flex-col rounded-2xl border border-dashed border-primary/30 p-5"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <ArrowRight className="h-5 w-5 text-primary-light" />
            </span>
            <p className="mb-2 font-bold text-ink">Your industry</p>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              E-commerce, education, finance, travel, food, fitness — the
              playbook is the same two problems, mapped to your searches.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary-light"
            >
              Talk to an expert
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
