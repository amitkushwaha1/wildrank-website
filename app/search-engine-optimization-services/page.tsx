"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Search,
  TrendingUp,
  Settings,
  Link,
  MapPin,
  FileText,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Users,
  Globe,
  AlertTriangle,
  Target,
} from "lucide-react";
import CTA from "@/components/home/CTA";
import AISeoSection from "@/components/solutions/seo/AISeoSection";

const painPoints = [
  { icon: AlertTriangle, text: "Your website barely gets any organic traffic despite having great content" },
  { icon: TrendingUp, text: "Competitors keep outranking you for keywords that should be yours" },
  { icon: Target, text: "Google algorithm updates tank your rankings overnight" },
  { icon: Search, text: "You're invisible to potential customers searching for what you offer" },
];

const services = [
  { icon: Settings, title: "Technical SEO", description: "We fix what's broken under the hood — site speed, crawlability, Core Web Vitals, structured data, and mobile optimization that search engines reward.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Search, title: "On-Page Optimization", description: "Strategic title tags, meta descriptions, heading architecture, internal linking, and content optimization mapped to high-intent keywords.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Link, title: "Link Building", description: "High-authority backlinks earned through digital PR, guest posting, and white-hat outreach — no PBNs, no shortcuts, no penalties.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: MapPin, title: "Local SEO", description: "Google Business Profile optimization, local citations, geo-targeted content, and review management that puts you on the local map.", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  { icon: FileText, title: "Content Strategy", description: "Topical authority mapping, SEO blog posts, and landing pages built around search intent — content that ranks and converts.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Cpu, title: "AEO & GEO Optimization", description: "Answer Engine Optimization for AI-powered search, featured snippets, voice queries, and next-gen SERP formats that are reshaping how people find information.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Deep-Dive Audit", description: "We crawl every page, analyze your backlink profile, benchmark competitors, and uncover the technical issues holding you back.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "02", title: "Keyword & Content Mapping", description: "AI-powered research identifies high-intent keywords, then we map them to existing pages and plan new content to fill the gaps.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { step: "03", title: "On-Page & Technical Fixes", description: "We optimize your pages, fix crawl errors, improve site speed, add structured data, and make your site search-engine friendly.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "04", title: "Authority Building", description: "Ongoing link building through guest posts, digital PR, and niche outreach to build domain authority month over month.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "05", title: "Track, Report, Refine", description: "Monthly ranking reports, traffic analytics, and strategy refinements based on what the data tells us. No guesswork.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const results = [
  { value: "+340%", label: "Organic Traffic", description: "E-commerce fashion brand in 6 months", color: "text-blue-400" },
  { value: "180+", label: "Page-1 Keywords", description: "Property group in 8 months", color: "text-green-400" },
  { value: "$2.4M", label: "Revenue Generated", description: "B2B SaaS platform in 12 months", color: "text-orange-400" },
  { value: "+220%", label: "Lead Generation", description: "Healthcare clinic in 5 months", color: "text-purple-400" },
];

const whyUs = [
  { icon: Shield, title: "100% White-Hat", description: "We follow Google's guidelines to the letter. No black-hat tricks, no penalties, no sudden ranking drops. Just sustainable growth.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Zap, title: "AI-Powered Tools", description: "Proprietary AI analyzes search trends, competitor gaps, and content opportunities faster and deeper than manual research ever could.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Users, title: "Dedicated SEO Team", description: "You get a named strategist, content writer, and link builder — a real team focused on your growth, not a ticket queue.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: BarChart3, title: "Full Transparency", description: "Live dashboards and monthly reports show every action taken, every ranking change, and exactly how SEO is impacting your revenue.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Globe, title: "Local & Global Reach", description: "Whether you serve one neighborhood or twenty countries, we build geo-specific strategies that dominate at every level.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Target, title: "Revenue-Focused", description: "Rankings are nice but revenue is the point. Every decision we make is tied back to your bottom line, not vanity metrics.", color: "text-orange-400", bg: "bg-orange-500/10" },
];

const faqs = [
  { q: "How long until I see SEO results?", a: "Most clients see measurable ranking improvements within 3-6 months. The timeline depends on your industry competition, current site health, and domain authority. We provide monthly progress reports from day one so you always know where things stand." },
  { q: "What makes your SEO different from other agencies?", a: "We combine AI-powered analysis with human expertise. While most agencies rely on generic playbooks, we build custom strategies using proprietary tools that analyze competitor gaps and search trends in real-time. Plus, you get a dedicated team — not a rotating cast of generalists." },
  { q: "Do you guarantee first-page rankings?", a: "No ethical SEO agency can guarantee specific rankings because Google's algorithm is constantly evolving. What we do guarantee: white-hat techniques, transparent reporting, and a proven process that has delivered first-page results for 90%+ of our client keywords." },
  { q: "What's included in an SEO engagement?", a: "Every package includes technical audits, keyword research, on-page optimization, link building, content strategy, monthly ranking reports, and dedicated support. The scope and intensity scale with your plan level." },
  { q: "Can you help with AI search and Answer Engines?", a: "Absolutely. Our AEO (Answer Engine Optimization) service ensures your content appears in AI-generated answers, featured snippets, and voice search results — the formats that are rapidly becoming the primary way people consume search results." },
];

export default function SEOServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Search className="w-3.5 h-3.5" /> SEO Services
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Search Engine Optimization That Delivers{" "}
              <span className="gradient-text">Real Revenue Growth</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Stop watching competitors steal your traffic. Our AI-powered SEO strategies put your business in front of the people actively searching for what you sell — and turn that visibility into revenue.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/seo-pricing" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                View SEO Pricing <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Get Free SEO Audit
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Sound Familiar?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">If any of these keep you up at night, you&apos;re not alone. These are the exact problems we solve every day.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-card rounded-xl p-5 border border-red-500/10">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Full-Spectrum <span className="gradient-text">SEO Services</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every layer of SEO covered — from the technical foundation to content creation and authority building.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}
                  className={`glass-card rounded-2xl p-6 border ${s.border} h-full group`}>
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI SEO Section */}
      <AISeoSection />

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Proven <span className="gradient-text">SEO Process</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A systematic, data-driven approach that consistently moves the needle on organic traffic and revenue.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-white/5 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-lg font-bold ${s.color}`}>{s.step}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Real Numbers from <span className="gradient-text">Real Campaigns</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">These aren&apos;t hypotheticals. These are actual results from client campaigns we&apos;ve managed.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                <p className={`text-4xl font-extrabold ${r.color} mb-2`}>{r.value}</p>
                <p className="text-white text-sm font-semibold mb-1">{r.label}</p>
                <p className="text-gray-500 text-xs">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">SEO Done <span className="gradient-text">The Right Way</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Deep expertise, AI-powered tools, and complete transparency — the combination that separates us from the noise.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 border border-white/5 group">
                  <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${r.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">SEO Questions <span className="gradient-text">Answered</span></h2>
            <p className="text-gray-400 text-lg">Everything you need to know before getting started.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-blue-500/40" : "border-white/5"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={openFaq === i}>
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-accent flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
