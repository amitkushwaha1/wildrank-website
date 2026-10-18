"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

/**
 * Client results.
 *
 * This was a single featured quote in a carousel with dot navigation, plus a
 * row of five mini-cards repeating the same five people — the same content
 * twice, and only one of the five actually present in the HTML at any moment,
 * because the carousel swapped them through AnimatePresence. Every quote is now
 * a card in a grid, so all of them exist as crawlable text, and the sector
 * filter row does the job the mini-card row was doing.
 *
 * The card shape follows the pattern the sector uses: quote, mark, then the
 * company. Each card carries a specific result, because a quote without a
 * number reads as a compliment rather than evidence.
 *
 * Two deliberate omissions:
 *
 *  - No Review or AggregateRating markup. Self-hosted reviews are not eligible
 *    for review rich results, and marking up a testimonial we cannot point an
 *    auditor at would be structured-data spam on the page that most needs to
 *    look straight.
 *  - No invented companies. The `logo` field is here so a real client logo can
 *    be dropped in with one line; until one is supplied the card falls back to
 *    an initials monogram rather than a placeholder mark.
 */
interface Testimonial {
  name: string;
  role: string;
  company: string;
  /** Groups the card under the filter chips. */
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

export default function Testimonials() {
  const [active, setActive] = useState("All");

  // Sectors in the order they first appear, with counts — a filter row without
  // counts looks like a carousel, and the reader cannot tell it is a filter.
  const sectors = useMemo(() => {
    const seen: { label: string; count: number }[] = [];
    for (const t of testimonials) {
      const hit = seen.find((s) => s.label === t.sector);
      if (hit) hit.count += 1;
      else seen.push({ label: t.sector, count: 1 });
    }
    return [{ label: "All", count: testimonials.length }, ...seen];
  }, []);

  const shown = useMemo(
    () => (active === "All" ? testimonials : testimonials.filter((t) => t.sector === active)),
    [active]
  );

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
            Real results from real businesses. See what our clients say about
            working with us.
          </p>
        </motion.div>

        {/* Sector filter. Same five people, sliced by the industry they are in. */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {sectors.map(({ label, count }) => {
            const on = label === active;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  on
                    ? "border-primary/40 bg-primary/10 text-primary-light"
                    : "border-dark-border text-muted hover:border-primary/30 hover:text-ink"
                }`}
              >
                {label}
                <span className={`ml-2 text-xs ${on ? "text-primary-light" : "text-faint"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div key={active} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card relative flex h-full flex-col rounded-2xl border border-dark-border p-7"
            >
              <Quote className="absolute right-7 top-6 h-9 w-9 text-primary/15" />

              <div className="mb-5 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current text-yellow-700" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-base leading-relaxed text-muted">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
