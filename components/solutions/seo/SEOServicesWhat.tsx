"use client";

import { motion } from "framer-motion";
import { Search, Link, Settings, MapPin, FileText, Cpu, ArrowRight } from "lucide-react";
import { TiltCard, staggerContainer, fadeUpItem } from "@/components/shared/Motion3D";

const services = [
  { icon: Settings, title: "Technical SEO", description: "Site speed, Core Web Vitals, crawlability, indexation, structured data, and mobile optimization — the foundation of strong rankings.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Search, title: "On-Page SEO", description: "Title tags, meta descriptions, heading structure, content optimization, internal linking, and keyword mapping across every page.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Link, title: "Link Building", description: "High-authority backlinks through guest posts, digital PR, business listings, and white-hat outreach campaigns.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: MapPin, title: "Local SEO", description: "Google Business Profile optimization, local citations, geo-targeted content, and review management for local dominance.", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  { icon: FileText, title: "Content Strategy", description: "Topical authority mapping, content calendars, SEO-optimized blog posts, and landing pages that rank and convert.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Cpu, title: "AI & AEO", description: "Answer Engine Optimization for AI search, featured snippets, voice search, and next-generation search result formats.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

export default function SEOServicesWhat() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Full-Spectrum <span className="gradient-text">SEO Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every aspect of SEO covered — from the technical foundation to content and authority building.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={fadeUpItem}>
                <TiltCard intensity={10} className={`glass-card rounded-2xl p-6 border ${s.border} h-full group`}>
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                  <a href="/pricing/seo" className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all duration-200">
                    See pricing <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
