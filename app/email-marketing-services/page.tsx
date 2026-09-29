"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Mail,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Zap,
  Shield,
  Clock,
  Layers,
  Split,
  AlertTriangle,
  DollarSign,
  Filter,
  Workflow,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "Your emails land in spam or get ignored — open rates keep declining quarter after quarter" },
  { icon: DollarSign, text: "You have a growing email list but no strategy to turn subscribers into paying customers" },
  { icon: Clock, text: "Manual email sends eat up hours each week and campaigns go out inconsistently" },
  { icon: Filter, text: "Everyone on your list gets the same generic message regardless of their interests or buying stage" },
];

const services = [
  { icon: Workflow, title: "Marketing Automation", description: "Welcome sequences, abandoned cart flows, re-engagement campaigns, and post-purchase series that run 24/7 and nurture leads on autopilot.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Filter, title: "List Segmentation", description: "Behavioral, demographic, and purchase-based segmentation that ensures every subscriber gets messages relevant to their specific needs and stage.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Split, title: "A/B Testing & Optimization", description: "Subject lines, send times, content layouts, CTAs, and personalization variables tested systematically to continuously improve performance.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Layers, title: "Email Design & Copywriting", description: "Mobile-responsive templates and conversion-focused copy that reflects your brand voice and drives clicks — no generic templates.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Users, title: "List Growth & Management", description: "Lead magnet strategy, opt-in form optimization, list hygiene, and compliance management that builds a healthy, engaged subscriber base.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: BarChart3, title: "Analytics & Revenue Attribution", description: "Track opens, clicks, conversions, and revenue per email. See exactly how much your email program contributes to the bottom line.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Email Program Audit", description: "We review your current list health, deliverability, automation flows, past campaign performance, and tech stack to identify quick wins.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "02", title: "Strategy & Segmentation", description: "We build a comprehensive email strategy with audience segments, campaign calendar, automation roadmap, and KPI targets.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "03", title: "Design & Build", description: "Custom email templates designed for your brand, automation flows built in your ESP, and all tracking/tagging configured for attribution.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "04", title: "Launch & Test", description: "Campaigns and automations go live with A/B tests on every critical element. We monitor deliverability and engagement daily.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { step: "05", title: "Optimize & Scale", description: "Monthly performance reviews drive ongoing improvements to copy, design, timing, and segmentation. We scale what works and sunset what doesn't.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const results = [
  { value: "$42", label: "Revenue Per Dollar Spent", description: "Average ROI across email campaigns", color: "text-blue-400" },
  { value: "+187%", label: "Email Revenue", description: "E-commerce brand in 3 months", color: "text-green-400" },
  { value: "38%", label: "Open Rate Average", description: "B2B SaaS client (industry avg: 21%)", color: "text-orange-400" },
  { value: "+94%", label: "Click-Through Rate Lift", description: "After segmentation implementation", color: "text-purple-400" },
];

const whyUs = [
  { icon: Workflow, title: "Automation Architects", description: "We don't just send emails — we build intelligent systems that respond to customer behavior in real-time with the right message at the right moment.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Zap, title: "Deliverability Experts", description: "Warm-up protocols, authentication setup, list hygiene, and sender reputation management that keeps your emails in the inbox, not the spam folder.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Compliance Guaranteed", description: "CAN-SPAM, GDPR, CCPA, and platform-specific regulations handled properly. Unsubscribe management, consent tracking, and data handling done right.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Target, title: "Revenue-Focused Copy", description: "Our copywriters specialize in conversion emails — not just pretty newsletters. Every word is written to move readers toward a specific action.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: TrendingUp, title: "Platform Agnostic", description: "Klaviyo, Mailchimp, HubSpot, ActiveCampaign, Brevo — we work with your existing ESP or help you choose the right one.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Split, title: "Testing DNA", description: "We run structured A/B tests on every campaign and automation. Compounded 2-3% improvements add up to massive performance gains over time.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "What email platforms do you work with?", a: "We have expertise across all major ESPs: Klaviyo, Mailchimp, HubSpot, ActiveCampaign, Brevo (formerly Sendinblue), Constant Contact, and custom solutions. We'll work with your current platform or recommend a switch if it's holding you back." },
  { q: "How quickly can email marketing show ROI?", a: "Quick-win automations like welcome series and abandoned cart flows can generate measurable revenue within the first 2-4 weeks. Full program optimization typically shows strong ROI within 60-90 days as we implement segmentation and test our way to higher performance." },
  { q: "How do you improve deliverability?", a: "We implement SPF, DKIM, and DMARC authentication, manage sender reputation, run list hygiene protocols, use engagement-based segmentation to maintain high interaction rates, and follow proper warm-up sequences for new sending domains or IPs." },
  { q: "How often should we email our list?", a: "It depends on your audience and content value. Most B2C brands perform well at 3-5 emails per week, while B2B typically does best at 1-2 per week. We'll test frequency for your specific audience and optimize based on engagement and unsubscribe data." },
  { q: "Do you handle the email copywriting and design?", a: "Yes, completely. Our team includes dedicated email copywriters and designers who create every campaign from scratch. You approve the content before it sends, but we handle all creative production so your team doesn't have to." },
];

export default function EmailMarketingServicesPage() {
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
              <Mail className="w-3.5 h-3.5" /> Email Marketing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Email Marketing Services That Turn Subscribers Into{" "}
              <span className="gradient-text">Revenue</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Email isn&apos;t dead — it&apos;s the highest-ROI channel in digital marketing. We build automated email systems that nurture leads, recover abandoned carts, and turn one-time buyers into repeat customers while you sleep.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                Get a Free Email Audit <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                See Email Case Studies
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Your Email Program Underperforms</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Most businesses leave money on the table with email. These are the most common reasons — and we fix all of them.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">End-to-End <span className="gradient-text">Email Marketing</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Strategy, design, automation, and optimization — everything your email channel needs to become a revenue engine.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Building Your <span className="gradient-text">Email Revenue Engine</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A structured approach that transforms email from a cost center into your most profitable marketing channel.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Email Performance <span className="gradient-text">That Compounds</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real numbers from email programs we&apos;ve built and managed.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Email Marketing <span className="gradient-text">Experts</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We treat email as the revenue channel it is — not an afterthought bolted onto an SEO package.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Email Marketing <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">Everything you need to know about working with us on email.</p>
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

      <CTA />
    </>
  );
}
