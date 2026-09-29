"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  MapPin,
  TrendingUp,
  BarChart3,
  Target,
  Star,
  Building2,
  Globe,
  Zap,
  Shield,
  Users,
  Search,
  AlertTriangle,
  Navigation,
  Phone,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "Your business doesn't show up in Google Maps or the local 3-pack when customers search nearby" },
  { icon: Star, text: "Competitors have more reviews and higher ratings, stealing customers who should be yours" },
  { icon: Navigation, text: "You have multiple locations but each one performs inconsistently in local search" },
  { icon: Phone, text: "Potential customers can't find accurate information about your hours, services, or phone number online" },
];

const services = [
  { icon: MapPin, title: "Google Business Profile Optimization", description: "Complete GBP setup and optimization — categories, attributes, photos, posts, Q&A, and services configured to maximize local visibility and conversions.", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  { icon: Building2, title: "Local Citation Building", description: "Consistent NAP data across 80+ directories, data aggregators, and industry-specific platforms. We fix existing errors and build new citations that strengthen your local authority.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Star, title: "Review Management", description: "Review generation campaigns, response templates, sentiment monitoring, and strategies to increase your star rating across Google, Yelp, and industry platforms.", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { icon: Globe, title: "Local Content Strategy", description: "Geo-targeted landing pages, location-specific blog posts, and neighborhood guides that capture long-tail local searches your competitors miss.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Target, title: "Local Link Building", description: "Backlinks from local news outlets, chambers of commerce, community organizations, and local bloggers that signal geographic relevance to Google.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Search, title: "Multi-Location SEO", description: "Scalable local SEO for businesses with 2 to 200+ locations — individual GBP management, location pages, and consolidated reporting.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Local SEO Audit", description: "We audit your GBP, citations, reviews, local content, and competitor positioning to identify exactly what's holding back your local visibility.", color: "text-red-400", bg: "bg-red-500/10" },
  { step: "02", title: "GBP & Citation Cleanup", description: "Fix NAP inconsistencies, optimize your Google Business Profile, claim missing listings, and establish accurate data across all platforms.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "03", title: "Review Strategy Launch", description: "Implement review generation systems, set up monitoring alerts, and create response protocols that improve your online reputation.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { step: "04", title: "Local Content & Links", description: "Publish geo-targeted content and earn local backlinks that build your topical and geographic authority month over month.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "05", title: "Track & Expand", description: "Monitor local rankings, map pack positions, and conversion metrics. Scale strategy across new locations or service areas as you grow.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

const results = [
  { value: "3-Pack", label: "Map Pack Rankings", description: "78% of clients in top 3 within 90 days", color: "text-red-400" },
  { value: "+312%", label: "Local Calls & Directions", description: "Multi-location dental group in 5 months", color: "text-blue-400" },
  { value: "4.8★", label: "Average Rating Achieved", description: "From 3.2★ for home services company", color: "text-yellow-400" },
  { value: "+195%", label: "Local Organic Traffic", description: "Law firm across 3 offices in 6 months", color: "text-green-400" },
];

const whyUs = [
  { icon: MapPin, title: "Local-Only Focus", description: "We're not generalists who bolt on local as an afterthought. Local SEO is a core specialty with dedicated team members who live and breathe proximity search.", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Zap, title: "Multi-Location Expertise", description: "From 2 locations to 200+, we've built scalable systems that manage each location individually while maintaining brand consistency across the portfolio.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "GBP Suspension Recovery", description: "If your listing has been suspended or penalized, we know the reinstatement process inside and out. We've recovered hundreds of profiles.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Users, title: "Review Generation Systems", description: "Automated review request flows via email and SMS that consistently generate new reviews without feeling pushy to your customers.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: BarChart3, title: "Hyperlocal Reporting", description: "Track rankings by zip code, see competitor movements in your area, and measure calls, directions, and website clicks from your GBP.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: TrendingUp, title: "Proven Results Timeline", description: "Most clients see map pack improvements within 60-90 days. We set realistic expectations and deliver on them consistently.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "How long does it take to rank in the Google local 3-pack?", a: "Most businesses see significant improvement within 60-90 days, though highly competitive markets may take 4-6 months. The timeline depends on your current citation accuracy, review profile, competition density, and GBP optimization state when we start." },
  { q: "Do you manage Google Business Profiles directly?", a: "Yes. We handle all GBP management including posts, photos, Q&A responses, product/service updates, attribute optimization, and review responses. You maintain ownership — we manage it with your approval." },
  { q: "How do you handle businesses with multiple locations?", a: "We create individual strategies for each location while maintaining a centralized management system. Each location gets its own optimized GBP, location landing page, citation profile, and performance reporting — all visible in one dashboard." },
  { q: "What's the difference between local SEO and regular SEO?", a: "Local SEO focuses on geographic visibility — appearing in Google Maps, the local pack, and for 'near me' searches. Regular SEO targets organic results nationally. Most local businesses need both, and we integrate them into one cohesive strategy." },
  { q: "Can you help recover a suspended Google Business Profile?", a: "Absolutely. We've successfully reinstated hundreds of GBP listings. We identify the suspension cause, fix violations, submit proper reinstatement requests, and implement safeguards to prevent future issues." },
];

export default function LocalSEOServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" /> Local SEO Services
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Local SEO Services That Put You on the{" "}
              <span className="gradient-text">Map — Literally</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              When customers search for what you offer in your area, you need to be the first business they see. Our local SEO strategies dominate the Google Map Pack and drive foot traffic, phone calls, and direction requests to your door.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Get a Free Local Audit <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/seo-pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                View Local SEO Pricing
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Are You Invisible in Local Search?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">46% of Google searches have local intent. If you&apos;re not showing up, these customers are going to your competitors.</p>
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
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Deliver</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Complete <span className="gradient-text">Local SEO Solutions</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every signal Google uses to rank local businesses — optimized and managed for you.</p>
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

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">From Invisible to <span className="gradient-text">Unmissable</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A proven local SEO methodology that gets businesses into the map pack and keeps them there.</p>
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
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Results We&apos;ve Achieved</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Local Dominance <span className="gradient-text">In Numbers</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real results from local businesses we&apos;ve helped dominate their markets.</p>
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
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Wildrank</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Local SEO <span className="gradient-text">Specialists</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Local search is our specialty, not a checkbox on a generic SEO package.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Local SEO <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">Common questions from businesses looking to dominate local search.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-red-500/40" : "border-white/5"}`}>
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

      <CTA />
    </>
  );
}
