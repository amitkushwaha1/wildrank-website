"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  Layers,
  Globe,
  Zap,
  Users,
  Shield,
  PieChart,
  Lightbulb,
  AlertTriangle,
  Clock,
  DollarSign,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "You're spending on multiple channels but can't tell which ones are actually driving revenue" },
  { icon: Clock, text: "Your team is stretched thin managing SEO, ads, social, and email without a unified strategy" },
  { icon: DollarSign, text: "Marketing budget keeps growing but ROI stays flat — or worse, shrinks" },
  { icon: Target, text: "Competitors seem to be everywhere online while your brand struggles to get noticed" },
];

const services = [
  { icon: TrendingUp, title: "SEO & Organic Growth", description: "Dominate search results with technical SEO, content strategy, and link building that compounds traffic month over month.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Target, title: "Paid Advertising", description: "Google Ads, social PPC, and display campaigns managed for maximum ROAS with granular audience targeting and bid optimization.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Megaphone, title: "Social Media Marketing", description: "Platform-specific content, community management, and paid social strategies that build brand loyalty and drive conversions.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: Layers, title: "Content Marketing", description: "Blog posts, landing pages, case studies, and video content designed to attract, nurture, and convert your ideal customers.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Globe, title: "Email & Automation", description: "Drip sequences, newsletter campaigns, and behavioral triggers that keep your pipeline warm and moving toward purchase.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: PieChart, title: "Analytics & CRO", description: "Conversion rate optimization, A/B testing, and attribution modeling so you know exactly what's working and why.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Discovery & Audit", description: "We analyze your current marketing ecosystem — what's working, what's leaking budget, where the biggest opportunities hide.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "02", title: "Strategy Development", description: "A custom multi-channel blueprint aligned to your revenue goals, audience personas, and competitive landscape.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { step: "03", title: "Channel Activation", description: "We launch campaigns across your highest-ROI channels with proper tracking, creative assets, and conversion paths in place.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "04", title: "Optimize & Scale", description: "Weekly performance reviews, A/B tests, and budget reallocation to continuously improve results across every channel.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "05", title: "Report & Grow", description: "Monthly strategy sessions with clear ROI reporting, new opportunity identification, and roadmap updates for the quarter ahead.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const results = [
  { value: "+285%", label: "Revenue Growth", description: "SaaS startup in 9 months", color: "text-blue-400" },
  { value: "4.8x", label: "Average ROAS", description: "E-commerce brand across channels", color: "text-green-400" },
  { value: "-42%", label: "Cost Per Lead", description: "Financial services firm in 4 months", color: "text-orange-400" },
  { value: "+156%", label: "Qualified Leads", description: "B2B manufacturing company in 6 months", color: "text-purple-400" },
];

const whyUs = [
  { icon: Layers, title: "True Multi-Channel Expertise", description: "Not a one-trick agency. We have dedicated specialists for SEO, PPC, social, email, and content — all working from the same playbook.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Zap, title: "AI-Enhanced Performance", description: "Machine learning models optimize bids, predict trends, and identify opportunities faster than any manual process.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Revenue Attribution", description: "We track every dollar from first touch to closed deal. You'll always know which channels and campaigns are earning their keep.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Users, title: "Your Extended Team", description: "A dedicated strategist, channel managers, designers, and copywriters — embedded in your business, not just assigned to your account.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Lightbulb, title: "Strategy-First Approach", description: "We don't just execute tactics. Every campaign ladders up to a cohesive strategy built around your growth objectives.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: BarChart3, title: "No Long-Term Locks", description: "We earn your business monthly with performance, not contracts. Most clients stay 3+ years because the results speak for themselves.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "What channels do your digital marketing services cover?", a: "We cover the full spectrum: SEO, Google Ads, social media (paid and organic), email marketing, content marketing, programmatic display, and CRO. We build your channel mix based on where your audience actually spends time and what drives the highest ROI for your industry." },
  { q: "How do you measure success across multiple channels?", a: "We implement full-funnel attribution using multi-touch models so you can see exactly how each channel contributes to revenue. You get a unified dashboard showing real-time performance, CAC, LTV, and ROAS across every active channel." },
  { q: "What's your minimum budget recommendation?", a: "For a multi-channel strategy to be effective, we typically recommend a minimum of $5,000/month in ad spend plus management fees. However, we can start with focused single-channel campaigns and scale as we prove ROI." },
  { q: "How quickly can you launch campaigns?", a: "Most clients are fully live within 2-3 weeks of kickoff. The first week is dedicated to audit and strategy, the second to asset creation and setup, and week three is launch with monitoring. Quick wins often start appearing within the first 30 days." },
  { q: "Do you work with businesses in specific industries?", a: "We serve B2B and B2C companies across e-commerce, SaaS, healthcare, professional services, real estate, and manufacturing. Our process adapts to your industry, but the data-driven methodology stays consistent." },
];

export default function DigitalMarketingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Megaphone className="w-3.5 h-3.5" /> Full-Service Digital Marketing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Digital Marketing Services That Drive{" "}
              <span className="gradient-text">Measurable Revenue</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              One fragmented tactic won&apos;t cut it anymore. We build integrated, data-driven marketing strategies across every channel that matters — so every dollar you spend works harder and every campaign feeds the next.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Get a Free Strategy Call <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                View Case Studies
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Most Digital Marketing Falls Flat</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">These are the frustrations we hear from businesses every week — and the problems our integrated approach was built to solve.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Integrated <span className="gradient-text">Marketing Solutions</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every channel, every touchpoint, every stage of the funnel — connected by strategy and powered by data.</p>
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
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our <span className="gradient-text">Growth Framework</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A proven 5-step system that turns scattered marketing into a unified growth engine.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Performance That <span className="gradient-text">Speaks for Itself</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real outcomes from real campaigns managed by our team.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What Sets Us <span className="gradient-text">Apart</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We&apos;re not another generalist agency. We&apos;re a performance-obsessed team that lives and breathes ROI.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Digital Marketing <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">Common questions from businesses exploring full-service marketing.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-orange-500/40" : "border-white/5"}`}>
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
