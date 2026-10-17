"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Topics, not articles.
 *
 * This grid previously presented nine posts with invented bylines
 * ("Vikram Patel"), invented dates and invented data ("across 50+ campaigns"),
 * and not one card linked anywhere — every "Read" affordance was dead. That is
 * a spam-policy and E-E-A-T liability rather than an asset: fabricated authors
 * and unverifiable claims are exactly what Google's quality raters are told to
 * treat as untrustworthy.
 *
 * So the fabrication is gone. What remains is what is actually true — the
 * subjects this team works in every day — and each card now points at the real
 * page on this site that covers it. That turns the page from a liability into
 * fourteen genuine internal links.
 *
 * When real articles are written, they replace the href and drop the "topic"
 * framing; nothing else needs to change.
 */
const categories = ["All", "SEO", "Paid Media", "Social & Content", "AI Search", "Growth"] as const;

const topics = [
  { title: "Search engine optimization", desc: "Technical foundations, on-page structure and topical authority — what actually moves rankings.", category: "SEO", href: "/search-engine-optimization-services" },
  { title: "Local SEO and Google Business Profile", desc: "Map pack visibility, review velocity and city-level landing pages that rank.", category: "SEO", href: "/local-seo-services" },
  { title: "Technical SEO and Core Web Vitals", desc: "Crawlability, site speed, structured data and the page-experience signals behind rankings.", category: "SEO", href: "/search-engine-optimization-services" },
  { title: "Paid search that lowers cost per lead", desc: "Bid strategy, negative keyword hygiene and landing pages that convert paid clicks.", category: "Paid Media", href: "/ppc-services" },
  { title: "Budgeting paid media across channels", desc: "How to split spend between search, social and retargeting without cannibalising either.", category: "Paid Media", href: "/digital-marketing-services" },
  { title: "LinkedIn and B2B social advertising", desc: "Targeting, creative and follow-up that produces qualified pipeline rather than impressions.", category: "Social & Content", href: "/social-media-marketing-services" },
  { title: "Content strategy that earns its traffic", desc: "Building a calendar around search intent, topical clusters and commercial pages.", category: "Social & Content", href: "/content-marketing-services" },
  { title: "Email and lifecycle marketing", desc: "Sequences, segmentation and automation that keep leads warm after the first click.", category: "Social & Content", href: "/email-marketing-services" },
  { title: "Mobile marketing and app growth", desc: "App store visibility, push and in-app analytics that drive retention, not just installs.", category: "Social & Content", href: "/mobile-marketing-services" },
  { title: "Getting cited by ChatGPT and AI Overviews", desc: "Generative Engine Optimization: structured data, entity clarity and quotable content.", category: "AI Search", href: "/geo-aeo-services" },
  { title: "AI marketing and workflow automation", desc: "Where automation genuinely saves time in a marketing operation, and where it does not.", category: "AI Search", href: "/ai-marketing" },
  { title: "AI call handling and lead response", desc: "Answering, qualifying and routing inbound calls so no enquiry waits on a human.", category: "AI Search", href: "/hermes-ai-system" },
  { title: "White label growth for agencies", desc: "Adding SEO, PPC and AI services to your agency under your own brand.", category: "Growth", href: "/white-label-seo-services" },
  { title: "Building a full-funnel marketing plan", desc: "How acquisition, conversion and retention fit together into one measurable system.", category: "Growth", href: "/digital-marketing-services" },
];

export default function BlogGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? topics : topics.filter((t) => t.category === active);

  return (
    <section className="bg-band py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-light">
            Topics we work in
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Browse by subject</h2>
          <p className="mt-4 text-muted">
            Every subject below links to the page where we explain how we approach it. When an
            article is published on one of them, it will appear here.
          </p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-accent text-white shadow-[0_8px_24px_-10px_rgba(140,60,30,0.6)]"
                  : "border border-hairline/10 bg-canvas/70 text-muted hover:border-primary/30 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.32, 0.72, 0, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={topic.href}
                className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary to-primary/0" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 self-start rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary-light">
                    {topic.category}
                  </span>

                  <h3 className="mb-3 text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {topic.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-muted">{topic.desc}</p>

                  <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-300 group-hover:gap-2.5">
                    How we do it
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
