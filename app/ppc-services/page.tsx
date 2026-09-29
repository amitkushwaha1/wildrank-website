"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, MousePointerClick, Target, TrendingUp, BarChart3, DollarSign, RefreshCw, ShoppingCart, Globe, Plus, Minus } from "lucide-react";
import CTA from "@/components/home/CTA";

const services = [
  { icon: MousePointerClick, title: "Google Ads Management", desc: "Search, display, shopping, and Performance Max campaigns optimized for your target CPA and ROAS goals.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Target, title: "Social PPC (Meta & LinkedIn)", desc: "Precision-targeted paid campaigns on Facebook, Instagram, and LinkedIn that reach your ideal buyers.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: RefreshCw, title: "Remarketing & Retargeting", desc: "Re-engage visitors who left without converting using dynamic creatives and smart audience segmentation.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: ShoppingCart, title: "E-Commerce & Shopping Ads", desc: "Product listing ads that showcase your inventory directly in search results with pricing and images.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Globe, title: "Bing & Microsoft Ads", desc: "Capture the 30% of searchers who don't use Google — often at a lower cost-per-click.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: BarChart3, title: "Conversion Rate Optimization", desc: "Landing page testing, funnel optimization, and tracking setup to maximize every dollar of ad spend.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

const process = [
  { step: "01", title: "Audit & Research", desc: "We analyze your current campaigns, competitors, and identify the highest-value keywords and audiences." },
  { step: "02", title: "Strategy & Setup", desc: "Campaign architecture, bidding strategy, tracking pixels, and conversion goals — all configured for success." },
  { step: "03", title: "Launch & A/B Test", desc: "We launch with multiple ad variants and continuously test headlines, descriptions, and landing pages." },
  { step: "04", title: "Optimize Daily", desc: "Real-time bid adjustments, negative keyword pruning, and budget reallocation based on performance data." },
  { step: "05", title: "Report & Scale", desc: "Monthly transparent reports showing spend, conversions, and ROAS. We scale what works and cut what doesn't." },
];

const stats = [
  { value: "8.5x", label: "Average ROAS", color: "text-green-400" },
  { value: "-42%", label: "Cost Per Lead Reduced", color: "text-blue-400" },
  { value: "+340%", label: "Conversion Rate Lift", color: "text-orange-400" },
  { value: "200+", label: "Campaigns Managed", color: "text-purple-400" },
];

const faqs = [
  { q: "How much should I spend on PPC?", a: "It depends on your industry and goals. We typically recommend starting with $2,000–$5,000/month in ad spend to gather enough data for optimization. Our management fee is separate from your ad budget." },
  { q: "How quickly will I see results from PPC?", a: "Unlike SEO, PPC delivers results almost immediately. Most campaigns start generating leads within the first week. Full optimization typically takes 4–6 weeks as we gather conversion data." },
  { q: "Do I own my ad accounts?", a: "Yes, always. Your Google Ads, Meta, and Bing accounts belong to you. We request manager access and never hold your accounts hostage if you leave." },
  { q: "What's your management fee structure?", a: "We charge flat monthly fees based on your plan tier — not a percentage of ad spend. This means as your budget grows, your management costs don't balloon with it." },
  { q: "Can you fix my underperforming campaigns?", a: "Absolutely. We regularly take over poorly performing accounts and turn them around within 30–60 days through proper structure, targeting, and bid optimization." },
];

export default function PPCServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl animate-[fadeInUp_0.6s_ease-out_both]">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <MousePointerClick className="w-3.5 h-3.5" /> PPC Management Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Pay Per Click Management <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Stop wasting money on ads that don&apos;t convert. Our data-driven PPC campaigns deliver qualified leads at a fraction of the cost — with full transparency on every dollar spent.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {["Google & Bing Certified", "No wasted ad spend", "Real-time optimization", "Full conversion tracking"].map(h => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.03]">
                Get Free PPC Audit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/ppc-pricing" className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need PPC */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Businesses Choose <span className="gradient-text">PPC Advertising</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">SEO takes months. PPC delivers qualified traffic today — with full control over budget, targeting, and messaging.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Instant Visibility", desc: "Appear at the top of search results within hours, not months. Reach buyers actively searching for your product." },
              { title: "Precise Targeting", desc: "Target by keyword, location, device, time, demographics, and even competitor audiences." },
              { title: "Measurable ROI", desc: "Track every click, conversion, and dollar. Know exactly which campaigns drive revenue." },
              { title: "Scalable Growth", desc: "Found a winning campaign? Scale it instantly. PPC grows as fast as your budget allows." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our PPC Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Every Paid Channel, <span className="gradient-text">Mastered</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => { const Icon = s.icon; return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6 group">
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><Icon className={`w-6 h-6 ${s.color}`} /></div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our PPC <span className="gradient-text">Process</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-white/5 mb-2">{s.step}</div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Results That <span className="gradient-text">Speak</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center">
                <p className={`text-4xl font-extrabold ${s.color} mb-2`}>{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">PPC <span className="gradient-text">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`glass-card rounded-xl overflow-hidden transition-all ${openFaq === i ? "border-primary/40" : ""}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-accent flex-shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
