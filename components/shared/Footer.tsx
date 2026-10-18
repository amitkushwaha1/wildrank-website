"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, PhoneCall } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { socialLinks } from "@/lib/socialLinks";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";

const services = [
  { label: "Search Engine Optimization", href: "/search-engine-optimization-services" },
  { label: "Local SEO Services",          href: "/local-seo-services" },
  { label: "Content Marketing Services",  href: "/content-marketing-services" },
  { label: "Email Marketing Services",    href: "/email-marketing-services" },
  { label: "Pay Per Click (PPC)",         href: "/ppc-services" },
  { label: "Social Media Marketing",      href: "/social-media-marketing-services" },
  { label: "Digital Marketing Services",  href: "/digital-marketing-services" },
  { label: "Mobile Marketing",            href: "/mobile-marketing-services" },
];

const serviceAreas = [
  { label: "Austin",        href: "/austin-seo-company" },
  { label: "Boston",        href: "/boston-seo-company" },
  { label: "Charlotte",     href: "/charlotte-seo-company" },
  { label: "Chicago",       href: "/chicago-seo-company" },
  { label: "Columbus",      href: "/columbus-seo-company" },
  { label: "Dallas",        href: "/dallas-seo-company" },
  { label: "Denver",        href: "/denver-seo-company" },
  { label: "Houston",       href: "/houston-seo-company" },
  { label: "Indianapolis",  href: "/indianapolis-seo-company" },
  { label: "Jacksonville",  href: "/jacksonville-seo-company" },
  { label: "Los Angeles",   href: "/los-angeles-seo-company" },
  { label: "Miami",         href: "/miami-seo-company" },
  { label: "New York",      href: "/new-york-seo-company" },
  { label: "Philadelphia",  href: "/philadelphia-seo-company" },
  { label: "Phoenix",       href: "/phoenix-seo-company" },
  { label: "San Antonio",   href: "/san-antonio-seo-company" },
  { label: "San Diego",     href: "/san-diego-seo-company" },
  { label: "San Francisco", href: "/san-francisco-seo-company" },
  { label: "Seattle",       href: "/seattle-seo-company" },
  { label: "Toronto",       href: "/toronto-seo-company" },
];

const company = [
  { label: "About Us",           href: "/about" },
  { label: "AI Marketing",       href: "/ai-marketing" },
  { label: "GEO & AEO Services", href: "/geo-aeo-services" },
  { label: "Hermes AI System",   href: "/hermes-ai-system" },
  { label: "Blog",               href: "/blog" },
];

/**
 * A social entry with a placeholder href is not a link. Every entry in
 * socialLinks.ts now has a real URL, so this passes all five through — it stays
 * as a backstop, because the failure it prevents is silent: a dead icon in the
 * footer reads as an abandoned account and nobody notices.
 */
const socials = socialLinks.filter((s) => s.href && s.href !== "#");

export default function Footer() {
  return (
    <footer className="bg-band border-t border-hairline/5 relative overflow-hidden">
      {/* Newsletter strip */}
      <div className="border-b border-hairline/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-ink font-bold text-lg mb-1">Stay Ahead of the Algorithm</h3>
              <p className="text-subtle text-sm">Get weekly SEO insights and digital marketing tips.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 bg-tint/5 border border-hairline/10 text-ink placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand col. The lockup runs at its largest size here: this is the
              one place on the page where the mark is the subject rather than a
              way back to the top, and at `md` it sat at the same weight as the
              column headings beside it. */}
          <div className="lg:col-span-3">
            <Link href="/" className="mb-5 inline-block">
              <Logo size="lg" />
            </Link>
            <p className="text-xs font-semibold text-primary-light tracking-widest uppercase mb-3">
              AI-Powered Digital Marketing · Since 2006
            </p>
            <p className="text-subtle text-sm leading-relaxed mb-6">
              We engineer your visibility across every surface a buyer now
              searches — Google, the AI answers beside it, and the phone that
              rings afterwards.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-accent/30"
              >
                Book Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="flex items-center gap-2 mt-6">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href={`tel:${PHONE_E164}`} className="text-muted hover:text-ink text-sm transition-colors">
                +1 {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-subtle tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-ink transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — two sub-cols */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-subtle tracking-[0.2em] uppercase mb-5">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {serviceAreas.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-subtle tracking-[0.2em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-ink transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cross-sell. This is the footer's two spare columns, and it is not
              a "Connect" column — those links were removed on request and the
              social profiles now sit under the brand mark instead. It is here
              because the phone is the one part of the funnel the rest of the
              footer does not mention. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl border border-dark-border p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <PhoneCall className="h-5 w-5 text-primary-light" />
              </span>
              <p className="mb-2 text-sm font-bold text-ink">Losing calls you never see?</p>
              <p className="mb-4 text-xs leading-relaxed text-muted">
                An AI receptionist answers around the clock and texts missed
                callers back within seconds.
              </p>
              <Link
                href="/ai-receptionist"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary-light transition-colors"
              >
                How it works
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar. The social icons live here rather than beside the lockup:
          this row is the last thing on every page, and they were here before
          the brand column briefly took them. */}
      <div className="border-t border-hairline/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-faint">
              &copy; {new Date().getFullYear()} Wildrank Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-8 h-8 border border-hairline/10 hover:border-hairline/30 rounded flex items-center justify-center text-subtle hover:text-ink transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-xs text-faint hover:text-muted transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-faint hover:text-muted transition-colors">Terms of Service</Link>
            </div>
          </div>
      </div>
    </footer>
  );
}
