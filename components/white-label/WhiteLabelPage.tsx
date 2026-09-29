"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, Shield, Eye, Clock, DollarSign, Plus, Minus, Layers,
  Search, Link, Settings, FileText, MapPin, BarChart3, MousePointerClick, Target,
  RefreshCw, ShoppingCart, Globe, Share2, PenTool, MessageCircle, Camera, Calendar,
  Mail, Cpu, Brain, MessageSquareText, Sparkles, Bot, Code2, Smartphone, Award,
  Headphones, Database, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CTA from "@/components/home/CTA";

const iconMap: Record<string, LucideIcon> = {
  Search, Link, Settings, FileText, MapPin, BarChart3, MousePointerClick, Target,
  RefreshCw, ShoppingCart, Globe, Share2, PenTool, MessageCircle, Camera, Calendar,
  Mail, Cpu, Brain, MessageSquareText, Sparkles, Bot, Code2, Smartphone, Layers, Award,
  Headphones, Database, Users, Clock,
};

export interface WLFeature { icon: string; title: string; desc: string; color: string; bg: string; }
export interface WLFaq { q: string; a: string; }

interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  intro: string;
  features: WLFeature[];
  faqs: WLFaq[];
}

const benefits = [
  { icon: Shield, title: "Full NDA Protection", desc: "Every engagement is covered by a strict NDA. Your clients will never know we exist.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Eye, title: "100% Your Brand", desc: "All reports, dashboards, and deliverables carry your branding — never ours.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Clock, title: "Fast Onboarding", desc: "Most white-label clients are onboarded and live within 48–72 hours.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: DollarSign, title: "Higher Margins", desc: "Wholesale pricing lets you mark up 2–3x and stay competitive in your market.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function WhiteLabelPage({ badge, title, highlight, description, intro, features, faqs }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] hero-gradient flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="max-w-3xl animate-[fadeInUp_0.6s_ease-out_both]">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Layers className="w-3.5 h-3.5" /> {badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {title} <span className="gradient-text">{highlight}</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">{description}</p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {["Your brand, our execution", "Save 40–60% vs in-house", "Dedicated account manager", "Full NDA protection"].map(h => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.03]">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/white-label-pricing" className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed">{intro}</motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">What You Get</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Delivered Under <span className="gradient-text">Your Brand</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => { const Icon = iconMap[f.icon] ?? Layers; return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6 group">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><Icon className={`w-6 h-6 ${f.color}`} /></div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Agencies <span className="gradient-text">Partner With Us</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => { const Icon = b.icon; return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="glass-card rounded-2xl p-6 group">
                <div className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><Icon className={`w-6 h-6 ${b.color}`} /></div>
                <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`glass-card rounded-xl overflow-hidden transition-all ${openFaq === i ? "border-purple-500/40" : ""}`}>
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
