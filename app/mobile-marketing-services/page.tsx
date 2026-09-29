"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Smartphone,
  TrendingUp,
  BarChart3,
  Target,
  MapPin,
  Bell,
  MessageSquare,
  Zap,
  Shield,
  Users,
  Globe,
  AlertTriangle,
  Clock,
  Radio,
} from "lucide-react";
import CTA from "@/components/home/CTA";

const painPoints = [
  { icon: AlertTriangle, text: "Over 60% of your traffic is mobile but your marketing strategy still treats it as an afterthought" },
  { icon: Clock, text: "Your app downloads are decent but retention drops off a cliff after the first week" },
  { icon: Target, text: "You're missing customers who are physically near your business and ready to buy" },
  { icon: Smartphone, text: "SMS and push notification campaigns feel spammy because there's no personalization or timing strategy" },
];

const services = [
  { icon: MessageSquare, title: "SMS Marketing", description: "Permission-based text campaigns with 98% open rates. Promotional blasts, transactional messages, and two-way conversational commerce that drives immediate action.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Bell, title: "Push Notifications", description: "Behavioral triggers, segmented messaging, and A/B tested push campaigns that re-engage users without annoying them into uninstalling.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Smartphone, title: "App Store Optimization", description: "ASO strategies covering keyword research, visual assets, ratings management, and conversion optimization that lift organic installs by 40-80%.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: MapPin, title: "Geo-Targeting & Proximity", description: "Location-based campaigns using geofencing, beacon technology, and proximity targeting to reach customers when they're near your store or a competitor's.", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  { icon: Radio, title: "In-App Advertising", description: "Programmatic mobile ad campaigns across premium app inventory — interstitials, native ads, rewarded video, and playable formats that drive installs and engagement.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: TrendingUp, title: "Mobile Analytics & Attribution", description: "Full-funnel mobile measurement from impression to install to in-app purchase with proper attribution across channels and campaign types.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

const process = [
  { step: "01", title: "Mobile Audit & Strategy", description: "We analyze your mobile presence, user behavior data, app performance, and competitive landscape to build a custom mobile-first strategy.", color: "text-green-400", bg: "bg-green-500/10" },
  { step: "02", title: "Audience Segmentation", description: "We segment your mobile users by behavior, location, lifecycle stage, and preferences to deliver hyper-relevant messaging.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { step: "03", title: "Campaign Creation", description: "Our team designs multi-channel mobile campaigns — SMS sequences, push flows, geo-triggered ads, and ASO assets all working together.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { step: "04", title: "Launch & Monitor", description: "Campaigns go live with real-time monitoring. We track delivery rates, opt-outs, conversions, and engagement to catch issues instantly.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { step: "05", title: "Optimize & Scale", description: "Continuous A/B testing of messaging, timing, and targeting. We scale what works and cut what doesn't — every week.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const results = [
  { value: "98%", label: "SMS Open Rate", description: "Average across client campaigns", color: "text-green-400" },
  { value: "+72%", label: "App Retention", description: "Fitness app Day-30 retention lift", color: "text-blue-400" },
  { value: "5.2x", label: "ROI on Mobile Ads", description: "QSR chain geo-targeting campaigns", color: "text-orange-400" },
  { value: "+340%", label: "In-Store Visits", description: "Retail brand using proximity marketing", color: "text-purple-400" },
];

const whyUs = [
  { icon: Smartphone, title: "Mobile-First Thinking", description: "We don't adapt desktop strategies for mobile. We build from the phone up, accounting for screen size, attention spans, and mobile user behavior.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Zap, title: "Real-Time Triggers", description: "Our campaigns fire based on user actions, locations, and behaviors — not arbitrary schedules. The right message hits at the moment it matters most.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Compliance Built-In", description: "TCPA, GDPR, CCPA — we handle the legal complexity of mobile messaging so you never risk fines or reputation damage.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Users, title: "Cross-Channel Integration", description: "Mobile doesn't live in a silo. We connect SMS, push, email, and paid campaigns into one cohesive customer journey.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Globe, title: "Global Reach, Local Precision", description: "Whether you're targeting one zip code or twenty countries, our geo-targeting capabilities deliver precision at any scale.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: BarChart3, title: "Transparent Attribution", description: "Know exactly which mobile touchpoint drove each conversion. Our attribution models track the complete path from impression to purchase.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "What types of businesses benefit most from mobile marketing?", a: "Any business with a mobile app, physical locations, or a customer base that primarily engages via smartphone. We work with retailers, restaurants, fitness brands, healthcare providers, e-commerce companies, and SaaS platforms. If your customers have phones (they do), mobile marketing works for you." },
  { q: "Is SMS marketing still effective in 2024?", a: "More effective than ever. SMS has a 98% open rate and 45% response rate — dramatically higher than email. The key is permission-based lists, personalized messaging, and strategic timing. We've seen clients generate $18+ per SMS subscriber per month when done right." },
  { q: "How do you handle opt-ins and compliance?", a: "We build compliant opt-in flows, manage preference centers, process opt-outs instantly, and maintain full audit trails. Our campaigns comply with TCPA, CAN-SPAM, GDPR, and CCPA requirements. We also handle carrier registration and 10DLC compliance for SMS." },
  { q: "What's geofencing and how does it work?", a: "Geofencing creates virtual boundaries around physical locations. When a customer's phone enters that boundary, it triggers a targeted ad, push notification, or SMS. We use it to target customers near your stores, near competitor locations, or at relevant events and venues." },
  { q: "How do you measure mobile campaign success?", a: "We track delivery rates, open rates, click-through rates, conversion rates, cost per acquisition, and attributed revenue. For apps, we measure installs, DAU/MAU, retention cohorts, and lifetime value. Everything is tied back to actual business outcomes." },
];

export default function MobileMarketingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Smartphone className="w-3.5 h-3.5" /> Mobile Marketing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Mobile Marketing Services That Reach Customers{" "}
              <span className="gradient-text">Where They Are</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Your customers live on their phones. Our mobile marketing strategies — SMS, push notifications, geo-targeting, and app marketing — put your brand in their hands at the exact moment they&apos;re ready to engage.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <motion.a href="/mobile-app-pricing" whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(249,115,22,0.4)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                View Mobile Pricing <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
                Get a Free Mobile Audit
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">The Mobile Gap Most Businesses Ignore</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Mobile traffic dominates, but most marketing strategies haven&apos;t caught up. Sound familiar?</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Full-Stack <span className="gradient-text">Mobile Marketing</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every mobile channel and tactic, unified under one strategy designed to reach customers on the device they never put down.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mobile Marketing <span className="gradient-text">Done Right</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A systematic approach that balances personalization with respect for user experience.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mobile Performance <span className="gradient-text">That Converts</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Numbers that prove mobile marketing isn&apos;t optional — it&apos;s essential.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mobile Expertise <span className="gradient-text">You Can Trust</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We specialize in mobile because that&apos;s where your customers are. Here&apos;s what makes us different.</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mobile Marketing <span className="gradient-text">Questions Answered</span></h2>
            <p className="text-gray-400 text-lg">Everything you need to know about mobile-first marketing.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-green-500/40" : "border-white/5"}`}>
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
