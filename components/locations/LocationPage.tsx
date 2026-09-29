"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, TrendingUp, Search, Users, BarChart3 } from "lucide-react";
import CTA from "@/components/home/CTA";

interface Props {
  city: string;
  state?: string;
}

export default function LocationPage({ city, state }: Props) {
  const location = state ? `${city}, ${state}` : city;
  const slug = city.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-3xl animate-[fadeInUp_0.6s_ease-out_both]">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" /> {location} SEO Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {city} SEO <span className="gradient-text">Company</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Dominate search results in {city}. Our local SEO experts help businesses in {location} rank higher on Google, drive qualified traffic, and convert more customers with proven, data-driven strategies.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {[`#1 Rankings in ${city}`, "Google Business Profile Optimization", "Local Link Building", "Monthly Reporting & Transparency"].map(h => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.03]">
                Get Free {city} SEO Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/seo-pricing" className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why local SEO */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why {city} Businesses Choose <span className="gradient-text">Wildrank</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We understand the {city} market. Our local SEO strategies are tailored to your city, your industry, and your competition.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: `${city} Market Expertise`, desc: `Deep knowledge of ${city}'s business landscape, local directories, and neighborhood-level targeting.`, color: "text-blue-400", bg: "bg-blue-500/10" },
              { icon: Search, title: "Google Map Pack Dominance", desc: "We get your business into the coveted 3-pack for your most important local search terms.", color: "text-green-400", bg: "bg-green-500/10" },
              { icon: TrendingUp, title: "Proven Local Results", desc: `Our ${city} clients see an average 280% increase in local organic traffic within 6 months.`, color: "text-orange-400", bg: "bg-orange-500/10" },
              { icon: Users, title: "Dedicated Local Team", desc: `A named strategist who understands ${city} and manages your campaign from start to finish.`, color: "text-purple-400", bg: "bg-purple-500/10" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6 group">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our SEO Services in <span className="gradient-text">{city}</span></h2>
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
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "+280%", label: "Avg. Traffic Growth", color: "text-green-400" },
              { value: "150+", label: `${city} Clients`, color: "text-blue-400" },
              { value: "#1", label: "Local Rankings", color: "text-orange-400" },
              { value: "4.9★", label: "Client Rating", color: "text-purple-400" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center">
                <p className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
