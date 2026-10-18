"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

/**
 * Client results.
 *
 * This has been three things now, so it is worth saying what it is. It was a
 * single featured quote in a carousel with dot navigation plus a row of five
 * mini-cards repeating the same people — the same content twice, and only one
 * of the five actually present in the HTML at any moment, because the carousel
 * swapped them through AnimatePresence. It became a filterable grid, which put
 * all five in the HTML but stacked into two rows on a laptop. It is now one
 * continuously rolling row, which is what was asked for: five cards, then the
 * same five again, with no end and no controls to operate.
 *
 * The motion is CSS on a track that repeats three times. The animation shifts
 * by exactly one repeat, so the restart is pixel-identical to the start and
 * there is no seam; three repeats rather than two because a display wider than
 * one repeat would otherwise expose the end of the track. The first repeat is
 * the real content and the other two are marked aria-hidden, so a screen reader
 * hears five testimonials rather than fifteen.
 *
 * Two deliberate omissions:
 *
 *  - No Review or AggregateRating markup. Self-hosted reviews are not eligible
 *    for review rich results, and marking up testimonials nobody can be pointed
 *    at would be structured-data spam on the page that most needs to look
 *    straight.
 *  - No invented companies. The `logo` field is here so a real client logo can
 *    be dropped in with one line; until one is supplied the card falls back to
 *    an initials monogram rather than a placeholder mark.
 */
interface Testimonial {
  name: string;
  role: string;
  company: string;
  /** Shown as a label on the card — it used to drive the filter row. */
  sector: string;
  rating: number;
  result: string;
  text: string;
  /** Path under /public once a client has approved their mark. */
  logo?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CMO",
    company: "TechRetail Inc.",
    sector: "Ecommerce",
    rating: 5,
    result: "+340% Organic Traffic",
    text: "Wildrank transformed our organic search presence completely. Within 6 months, our traffic grew by 340% and conversions doubled. Their team is incredibly responsive and data-driven.",
  },
  {
    name: "James Patel",
    role: "Founder",
    company: "GrowthAgency",
    sector: "Agencies",
    rating: 5,
    result: "60% Cost Savings",
    text: "We white-labelled their SEO and PPC services for our clients. The quality is outstanding and the turnaround is fast. It's like having a 50-person team without the overhead.",
  },
  {
    name: "Emily Chen",
    role: "VP Marketing",
    company: "HealthPlus",
    sector: "Healthcare",
    rating: 5,
    result: "8.5x ROI",
    text: "Their PPC campaigns delivered an 8.5x ROI in the first quarter. The team understood our healthcare compliance requirements and built campaigns that actually convert.",
  },
  {
    name: "David Okafor",
    role: "CEO",
    company: "EduLearn Platform",
    sector: "Education",
    rating: 5,
    result: "50K+ App Users",
    text: "The mobile app they built for us has over 50,000 active users. Clean code, beautiful UI, and delivered on time. We've already started our second project with them.",
  },
  {
    name: "Rachel Torres",
    role: "Director",
    company: "LuxeCommerce",
    sector: "Ecommerce",
    rating: 5,
    result: "+220% Revenue",
    text: "Our e-commerce revenue grew by 220% after partnering with Wildrank. Their holistic approach — SEO, PPC, and CRO together — made all the difference.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const COPIES = 3;

function Card({ t, decorative, hue }: { t: Testimonial; decorative?: boolean; hue: number }) {
  return (
    <article
      aria-hidden={decorative || undefined}
      className="glass-card ring-glow relative flex w-[315px] shrink-0 flex-col rounded-2xl border border-dark-border p-6 sm:w-[380px] sm:p-7"
      style={{ "--ring-hue": String(hue) } as React.CSSProperties}
    >
      <Quote className="absolute right-6 top-5 h-9 w-9 text-primary/15" />

      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-700" />
          ))}
        </div>
        <span className="rounded-full border border-dark-border bg-tint/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-subtle">
          {t.sector}
        </span>
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="mb-6 w-fit rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-700">
        {t.result}
      </div>

      <div className="flex items-center gap-3 border-t border-dark-border pt-5">
        {t.logo ? (
          <Image
            src={t.logo}
            alt={t.company}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
            {initials(t.name)}
          </span>
        )}
        <span>
          <span className="block text-sm font-semibold text-ink">{t.name}</span>
          <span className="block text-xs text-subtle">
            {t.role}, {t.company}
          </span>
        </span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const copies = Array.from({ length: COPIES }, () => testimonials).flat();

  return (
    <section id="testimonials" className="section-gradient py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Client Stories
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Results Our Clients <span className="gradient-text">Love</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Real results from real businesses, in their own words.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed, so the row runs off both edges instead of stopping at the
          gutter. Pausing on hover exists so a card can actually be finished
          reading; on touch there is no hover and it simply keeps rolling. */}
      <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:overflow-x-auto">
        <div className="flex w-max items-stretch gap-6 pr-6 animate-marquee-left group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {copies.map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              t={t}
              decorative={i >= testimonials.length}
              hue={(i % testimonials.length) * 137.508 % 360}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-10 text-center text-sm text-subtle">
          Hover to pause and read a card in full.
        </p>
      </div>
    </section>
  );
}
