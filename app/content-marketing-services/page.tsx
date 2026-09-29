"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  FileText,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Zap,
  Shield,
  BookOpen,
  Pen,
  Share2,
  Video,
  AlertTriangle,
  Clock,
  Search,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "You publish content regularly but it barely gets traffic and never generates leads" },
  { icon: Clock, text: "Content creation is inconsistent — you go weeks without posting because there's no system" },
  { icon: Search, text: "Your blog exists but it doesn't rank for any meaningful keywords in your industry" },
  { icon: Target, text: "Competitors are positioning themselves as thought leaders while your brand stays quiet" },
];

const services = [
  { icon: BookOpen, title: "Blog & SEO Content", description: "Research-backed, SEO-optimized articles that rank for high-intent keywords and drive qualified organic traffic. Every piece is built around search demand and user intent.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Pen, title: "Thought Leadership", description: "Executive bylines, industry reports, and opinion pieces that establish your brand as the authority in your space — content that earns backlinks and media coverage.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: FileText, title: "Landing Pages & Sales Content", description: "Conversion-focused web copy, case studies, white papers, and comparison guides that move prospects from awareness to decision.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Video, title: "Video & Visual Content", description: "Explainer videos, infographics, data visualizations, and interactive content that captures attention and drives shares across platforms.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Share2, title: "Content Distribution", description: "Strategic promotion across email, social, syndication networks, and paid amplification to ensure your best content reaches its full audience potential.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: BarChart3, title: "Content Analytics & ROI", description: "Track which content drives traffic, leads, and revenue. We measure performance and continuously refine strategy based on what the data shows.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Content Audit & Opportunity Analysis", description: "We analyze your existing content, identify gaps, map competitor strategies, and uncover keyword clusters where content can drive real business results.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "02", title: "Strategy & Editorial Calendar", description: "A documented content strategy with topic pillars, keyword targets, content types, publishing cadence, and a 3-month editorial roadmap.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "03", title: "Content Production", description: "Our writers and designers produce SEO-optimized articles, landing pages, visuals, and supporting assets — every piece reviewed for accuracy and brand voice.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "04", title: "Publish & Promote", description: "Content goes live with full on-page SEO, internal linking, and a distribution plan across email, social, and syndication channels.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { step: "05", title: "Measure & Iterate", description: "Monthly content performance reviews track rankings, traffic, engagement, and conversions. We update underperforming pieces and double down on winners.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const results = [
  { value: "+480%", label: "Organic Traffic", description: "B2B SaaS company in 8 months", color: "text-blue-400" },
  { value: "52", label: "Page-1 Rankings", description: "From 8 rankings in 6 months", color: "text-green-400" },
  { value: "+215%", label: "Lead Generation", description: "Financial services firm via content", color: "text-orange-400" },
  { value: "3.2x", label: "Content ROI", description: "Revenue attributed to content marketing", color: "text-purple-400" },
];

const whyUs = [
  { icon: Search, title: "SEO-First Writing", description: "Every article starts with keyword research and search intent analysis. We write for humans, but we structure for algorithms — so content ranks and resonates.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Users, title: "Industry-Specialized Writers", description: "We match your content to writers with genuine expertise in your field. No generic freelancers — real subject matter knowledge that builds credibility.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Zap, title: "AI-Assisted, Human-Crafted", description: "We use AI for research acceleration and data analysis, but every piece is written, edited, and reviewed by experienced humans. No AI-generated filler.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Original Research & Data", description: "We incorporate proprietary data, original surveys, and expert interviews to create content that can't be replicated by competitors or AI tools.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: TrendingUp, title: "Full-Funnel Coverage", description: "From top-of-funnel awareness content to bottom-funnel comparison guides and case studies — we cover every stage of the buyer journey.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Target, title: "Distribution Built-In", description: "Creating great content is half the battle. We build distribution into every strategy so your content actually reaches the audience it deserves.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "How many pieces of content do you produce per month?", a: "It varies by package. Our standard plans include 4-8 long-form articles, 2-4 supporting assets (infographics, social snippets, email content), and ongoing optimization of existing pages. Enterprise clients often commission 12-20+ pieces monthly." },
  { q: "How do you ensure content quality and accuracy?", a: "Every piece goes through a multi-step process: keyword/intent research, outline approval, expert writing, editorial review, fact-checking, and SEO optimization. For technical topics, we use writers with industry experience and subject matter expert reviewers." },
  { q: "Do you write in our brand voice?", a: "Absolutely. We start every engagement with a brand voice workshop and create a documented style guide. Our writers study your existing content, competitors, and audience to nail your tone from the first draft. Most clients can't tell our content from their internal team's." },
  { q: "How long until content starts ranking?", a: "New content typically starts gaining search visibility within 4-8 weeks, with meaningful rankings appearing in 2-4 months. Highly competitive keywords may take 6+ months. We also optimize existing content for faster wins while new pieces gain authority." },
  { q: "Can you help with content for specific industries?", a: "Yes. We have writer networks covering SaaS, healthcare, finance, legal, e-commerce, manufacturing, and professional services. We match industry expertise to your project and ensure technical accuracy through our editorial process." },
];

export default function ContentMarketingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <FileText className="w-3.5 h-3.5" /> Content Marketing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Content Marketing Services That Attract, Engage, and{" "}
              <span className="gradient-text">Convert</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Great content doesn&apos;t just fill a blog — it ranks in search, builds trust with prospects, and drives pipeline. We create SEO-driven content strategies that position your brand as the go-to authority in your space and turn readers into customers.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Get a Free Content Audit <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                See Content Samples
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Most Content Marketing Fails</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Publishing without strategy is just noise. These are the problems we solve for every client.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Full-Service <span className="gradient-text">Content Marketing</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From strategy to creation to distribution — a complete content engine that drives measurable business results.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Content That <span className="gradient-text">Compounds Over Time</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A systematic approach to content that builds topical authority and compounds organic results month after month.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Content That <span className="gradient-text">Delivers Results</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real performance metrics from content strategies we&apos;ve executed.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Content Marketing <span className="gradient-text">Done Right</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We build content programs that compound — not just content calendars that collect dust.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Content Marketing <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">Common questions about our content marketing approach.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-purple-500/40" : "border-white/5"}`}>
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
