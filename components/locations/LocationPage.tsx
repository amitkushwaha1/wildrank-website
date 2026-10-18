"use client";

import { PHONE_E164 } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, TrendingUp, Search, Users, BarChart3 } from "lucide-react";
import CTA from "@/components/home/CTA";
import IndustriesSection from "@/components/shared/IndustriesSection";
import { buildFaqEntries } from "./faqs";

interface Props {
  city: string;
  state?: string;
}

export default function LocationPage({ city, state }: Props) {
  const location = state ? `${city}, ${state}` : city;
  const slug = city.toLowerCase().replace(/\s+/g, "-");

  const FAQS = buildFaqEntries(city, location);
  const SITE = "https://wildranktechnologies.com";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/${slug}-seo-company/#business`,
    name: `Wildrank Technologies - ${city} SEO`,
    url: `${SITE}/${slug}-seo-company`,
    description: `Local SEO and AI-visibility services for businesses in ${location}.`,
    email: "gupta@wildranktechnologies.com",
    telephone: PHONE_E164,
    areaServed: { "@type": "City", name: city },
    parentOrganization: { "@id": `${SITE}/#organization` },
    serviceType: [
      "Search Engine Optimization",
      "Local SEO",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/${slug}-seo-company/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-16 w-full relative z-10">
          <div className="max-w-3xl animate-[fadeInUp_0.6s_ease-out_both]">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" /> {location} SEO Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight mb-6">
              {city} SEO <span className="gradient-text">Company</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
              Dominate search results in {city}. Our local SEO experts help businesses in {location} rank higher on Google, drive qualified traffic, and convert more customers with proven, data-driven strategies.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {[`500+ clients served nationwide`, "Google Business Profile Optimization", "Local Link Building", "Monthly Reporting & Transparency"].map(h => (
                <li key={h} className="flex items-center gap-2 text-sm text-muted"><CheckCircle className="w-4 h-4 text-green-700 flex-shrink-0" />{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.03]">
                Get Free {city} SEO Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/seo-pricing" className="flex items-center gap-2 border border-hairline/10 hover:border-hairline/30 text-ink font-semibold px-7 py-3.5 rounded-xl transition-all">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why local SEO */}
      <section className="py-24 lg:py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">Why {city} Businesses Choose <span className="gradient-text">Wildrank</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">We understand the {city} market. Our local SEO strategies are tailored to your city, your industry, and your competition.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: `${city} Market Expertise`, desc: `Deep knowledge of ${city}'s business landscape, local directories, and neighborhood-level targeting.`, color: "text-blue-600", bg: "bg-blue-500/10" },
              { icon: Search, title: "Google Map Pack Dominance", desc: "We get your business into the coveted 3-pack for your most important local search terms.", color: "text-green-700", bg: "bg-green-500/10" },
              { icon: TrendingUp, title: "Measured, Not Guessed", desc: `Every ${city} campaign starts with a baseline audit, so improvement is measured against your own starting point rather than an industry average.`, color: "text-orange-700", bg: "bg-orange-500/10" },
              { icon: Users, title: "Dedicated Local Team", desc: `A named strategist who understands ${city} and manages your campaign from start to finish.`, color: "text-purple-600", bg: "bg-purple-500/10" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6 group">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-ink font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="py-24 lg:py-16 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">Our SEO Services in <span className="gradient-text">{city}</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Local SEO & Google Business Profile", desc: `Complete GBP optimization, local citations, and review management to dominate ${city} searches.` },
              { title: "Technical SEO Audit", desc: "Site speed, mobile optimization, crawlability, and Core Web Vitals fixes that search engines reward." },
              { title: "On-Page Optimization", desc: `City-specific keyword targeting, content optimization, and internal linking tailored to ${city}.` },
              { title: "Link Building & Authority", desc: `High-quality backlinks from ${city} publications, business directories, and industry sites.` },
              { title: "Content Marketing", desc: `Location-specific blog content and landing pages that attract ${city}-based searchers.` },
              { title: "Monthly Reporting", desc: "Transparent monthly reports showing rankings, traffic, leads, and revenue impact." },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6">
                <h3 className="text-ink font-bold text-base mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What local SEO actually involves */}
      <section className="py-20 lg:py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">What {city} SEO Actually Involves</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Ranking for local searches is not one tactic. It is a sequence, and skipping a step
              usually costs you the position you were chasing.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-10 text-muted">
            {[
              {
                h: "Google Business Profile is the foundation",
                p: `Before any website work, your Google Business Profile decides whether you appear in the map pack at all. For ${city} businesses that means a complete profile: correct categories, services written out in full, fresh photographs, accurate hours, and a steady flow of genuine reviews. An incomplete profile caps your local visibility regardless of how good your site is.`,
              },
              {
                h: "Citations have to be consistent",
                p: `Your business name, address and phone number must match exactly across every directory and citation site. A suite number written one way on your website and another way on a directory splits your authority and confuses the local ranking signal. We audit and correct this across the directories that matter in ${city}.`,
              },
              {
                h: "Local content has to mean something to ${city}",
                p: `A page that swaps the city name into the same paragraph is not local content, and Google has been explicit about this for years. Content that earns a local ranking answers real questions from real customers: which neighbourhoods you serve, what your pricing looks like in practice, what happens on a first visit, and which problems you handle that competitors ignore.`,
              },
              {
                h: "Reviews are the strongest single lever",
                p: `For local intent, review volume and recency move rankings more reliably than anything else you can do. That means a system for asking, a process for responding to every review including the negative ones, and steady growth in review count over months rather than a one-off push.`,
              },
              {
                h: "AI search changes what counts",
                p: `A growing share of buying questions now go to ChatGPT, Perplexity or an AI Overview instead of a list of blue links. Those systems pull from structured, clearly attributed sources. That is why every ${city} plan here includes G.E.O and A.E.O work alongside conventional SEO: structured data, entity clarity, and content written so a machine can quote it accurately.`,
              },
            ].map((item, i) => (
              <motion.div key={item.h} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <h3 className="text-ink font-bold text-xl mb-2">{item.h}</h3>
                <p className="leading-relaxed">{item.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — also emitted as FAQPage structured data */}
      <section className="py-20 lg:py-16 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">{city} SEO FAQs</h2>
            <p className="text-muted text-lg">The questions {city} business owners ask us most often.</p>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6">
                <h3 className="text-ink font-bold text-base mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process facts — no unverifiable performance claims */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Clients Served Nationwide", color: "text-green-700" },
              { value: "Local", label: "Google Business Profile", color: "text-blue-600" },
              { value: "Monthly", label: "Reporting, No Lock-In", color: "text-orange-700" },
              { value: "AI-Ready", label: "G.E.O and A.E.O Included", color: "text-purple-600" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center">
                <p className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-muted text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />
      <CTA />
    </>
  );
}
