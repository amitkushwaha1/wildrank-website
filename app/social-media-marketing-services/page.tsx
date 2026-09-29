"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Heart,
  TrendingUp,
  BarChart3,
  Target,
  Camera,
  Users,
  Zap,
  Shield,
  MessageCircle,
  Share2,
  Video,
  AlertTriangle,
  Clock,
  Eye,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "You post consistently but engagement is flatlined and follower growth has stalled" },
  { icon: Clock, text: "Creating quality social content eats up hours your team doesn't have" },
  { icon: Eye, text: "Organic reach keeps declining and you're not sure paid social is worth the spend" },
  { icon: Target, text: "Your competitors' social presence makes yours look like an afterthought" },
];

const services = [
  { icon: Camera, title: "Content Creation", description: "Scroll-stopping graphics, carousels, Reels, and video content crafted by designers who understand each platform's algorithm and audience behavior.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { icon: Target, title: "Paid Social Advertising", description: "Precision-targeted campaigns on Meta, TikTok, LinkedIn, and X that reach your ideal customers with the right message at the right moment.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: MessageCircle, title: "Community Management", description: "Active comment responses, DM management, and engagement strategies that turn followers into brand advocates and customers.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Users, title: "Influencer Partnerships", description: "We identify, vet, and manage influencer collaborations that put your brand in front of engaged, relevant audiences at scale.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Video, title: "Short-Form Video", description: "TikTok, Reels, and Shorts content that captures attention in the first second and drives shares, saves, and conversions.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Monthly performance reports with engagement metrics, audience growth, content performance, and ROI attribution for paid campaigns.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Brand & Audience Audit", description: "We analyze your existing presence, competitor landscape, audience demographics, and content performance to find the gaps and opportunities.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { step: "02", title: "Strategy & Content Calendar", description: "A custom content strategy with platform-specific pillars, posting cadence, campaign themes, and a 30-day content calendar ready to execute.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "03", title: "Content Production", description: "Our creative team produces platform-native content — graphics, videos, copy, and stories designed to stop the scroll and spark engagement.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "04", title: "Publish & Engage", description: "Content goes live at optimized times. We actively monitor, respond to comments, and engage with your community daily.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "05", title: "Analyze & Iterate", description: "Weekly performance reviews drive content refinements. We double down on what works and pivot away from what doesn't.", color: "text-orange-400", bg: "bg-orange-500/10" },
];

const results = [
  { value: "+420%", label: "Engagement Rate", description: "DTC beauty brand in 4 months", color: "text-pink-400" },
  { value: "2.1M", label: "Monthly Impressions", description: "Restaurant chain across 12 locations", color: "text-blue-400" },
  { value: "3.2x", label: "ROAS on Paid Social", description: "Fashion e-commerce brand", color: "text-green-400" },
  { value: "+85K", label: "Followers Gained", description: "Fitness brand in 6 months", color: "text-purple-400" },
];

const whyUs = [
  { icon: Camera, title: "Platform-Native Content", description: "We don't recycle the same post across platforms. Each piece is designed specifically for where it lives — format, tone, and algorithm.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Zap, title: "Trend-Responsive", description: "Our team spots trending audio, formats, and cultural moments early — and gets your brand into the conversation while it's still relevant.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Brand-Safe Always", description: "Every post passes through brand guidelines review. Your voice stays consistent and your reputation stays protected.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: TrendingUp, title: "Growth + Revenue Focus", description: "Vanity metrics are nice, but we optimize for what matters: profile visits, website clicks, DM inquiries, and actual sales.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Share2, title: "Paid + Organic Synergy", description: "We integrate paid campaigns with organic strategy so they amplify each other instead of competing.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Heart, title: "Community-First Approach", description: "Real engagement builds brand loyalty. We don't just post and ghost — we build relationships in your comments and DMs.", color: "text-orange-400", bg: "bg-orange-500/10" },
];

const faqs = [
  { q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, TikTok, LinkedIn, X (Twitter), Pinterest, and YouTube. We'll recommend the platforms that make sense for your audience rather than spreading thin across all of them. Most businesses see the best ROI focusing on 2-3 platforms done exceptionally well." },
  { q: "How much content do you create per month?", a: "It depends on your package, but our standard plans include 12-20 feed posts, 15-30 Stories, and 4-8 Reels/short-form videos per platform per month. We also create ad creative for paid campaigns separately." },
  { q: "Do you handle paid social advertising too?", a: "Absolutely. Paid social is a core part of our offering. We manage campaigns on Meta Ads, TikTok Ads, and LinkedIn Ads with full funnel targeting — from brand awareness to retargeting to conversion campaigns." },
  { q: "Can we approve content before it goes live?", a: "Yes. Every client gets access to a content approval workflow where you can review, comment on, and approve all posts before they're scheduled. You maintain full control while we handle the heavy lifting." },
  { q: "How do you measure social media ROI?", a: "Beyond engagement metrics, we track profile-to-website traffic, lead form submissions, direct message inquiries, and — for e-commerce — attributed revenue from social. You'll see exactly how social contributes to your bottom line." },
];

export default function SocialMediaMarketingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Heart className="w-3.5 h-3.5" /> Social Media Marketing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Social Media Marketing Services That Build{" "}
              <span className="gradient-text">Brands People Love</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Followers don&apos;t pay the bills — but the right social strategy turns attention into loyalty and loyalty into revenue. We create content that connects, communities that engage, and campaigns that convert.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/social-media-pricing" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                View Pricing Plans <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Get a Free Social Audit
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Your Social Strategy Isn&apos;t Working</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">If this sounds familiar, you&apos;re not alone. Most businesses struggle with social because they lack a system.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Complete <span className="gradient-text">Social Media Management</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From strategy to execution to reporting — everything your brand needs to thrive on social.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How We Build Your <span className="gradient-text">Social Presence</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A repeatable system for social growth that combines creativity with data-driven optimization.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Social Growth <span className="gradient-text">By the Numbers</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real metrics from brands we&apos;ve grown on social media.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Social Media Done <span className="gradient-text">Differently</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We combine creative excellence with performance marketing discipline to deliver social that actually moves the needle.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Social Media <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">What you need to know before partnering with us.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-pink-500/40" : "border-white/5"}`}>
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
