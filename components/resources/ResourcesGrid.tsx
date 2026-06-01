"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, FileText, CheckSquare, BarChart3, BookOpen, Video, Calculator } from "lucide-react";

const resources = [
  {
    icon: FileText, type: "Guide", title: "The Ultimate SEO Checklist 2025", description: "A 120-point checklist covering technical SEO, on-page, off-page, and local SEO — everything you need to audit any website.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", badge: "Most Downloaded",
  },
  {
    icon: BarChart3, type: "Template", title: "PPC Campaign Tracking Spreadsheet", description: "A ready-to-use Google Sheets template for tracking ad spend, conversions, ROAS, and CPA across all your PPC campaigns.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", badge: null,
  },
  {
    icon: CheckSquare, type: "Checklist", title: "Website Launch Checklist", description: "50+ items to verify before launching any website — from SEO setup and speed optimization to security and analytics.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", badge: null,
  },
  {
    icon: BookOpen, type: "Guide", title: "White Label Agency Starter Guide", description: "Everything you need to know about starting or scaling a white-label digital marketing agency — pricing, processes, and pitfalls.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", badge: "New",
  },
  {
    icon: Video, type: "Video Series", title: "SEO Fundamentals Video Course", description: "A free 10-part video series covering keyword research, on-page optimization, link building, and technical SEO from scratch.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20", badge: null,
  },
  {
    icon: Calculator, type: "Tool", title: "ROI Calculator for Digital Marketing", description: "Input your current metrics and see projected ROI from SEO, PPC, and social media campaigns based on real industry benchmarks.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", badge: "Interactive",
  },
  {
    icon: FileText, type: "Template", title: "Monthly SEO Report Template", description: "A professional, client-ready SEO report template covering rankings, traffic, backlinks, and recommendations.", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", badge: null,
  },
  {
    icon: CheckSquare, type: "Checklist", title: "Social Media Audit Checklist", description: "Audit any brand's social media presence across all platforms with this comprehensive 80-point checklist.", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", badge: null,
  },
  {
    icon: BookOpen, type: "Guide", title: "Local SEO Playbook for Small Business", description: "Step-by-step guide to dominating local search results — Google Business Profile, citations, reviews, and local content.", color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20", badge: null,
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Free <span className="gradient-text">Downloads & Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything is free. No credit card, no catch — just useful resources to help you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -6 }}
                className={`glass-card rounded-2xl border ${r.border} p-6 group relative`}>
                {r.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-accent/20 text-accent px-2.5 py-1 rounded-full">
                    {r.badge}
                  </span>
                )}
                <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <span className={`text-xs font-semibold ${r.color} uppercase tracking-wider`}>{r.type}</span>
                <h3 className="text-white font-bold text-base mt-1 mb-2 leading-snug">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{r.description}</p>
                <motion.a href="/company/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-accent/20 hover:text-accent border border-dark-border hover:border-accent/30 px-4 py-2.5 rounded-lg transition-all duration-200">
                  <Download className="w-4 h-4" /> Download Free <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
