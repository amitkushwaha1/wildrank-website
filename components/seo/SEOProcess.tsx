"use client";

import { motion } from "framer-motion";
import { Search, FileText, Settings, TrendingUp, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Website & SEO Audit",
    description:
      "We start with a deep technical audit — crawling your site, analyzing backlinks, checking penalties, and benchmarking against competitors.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    step: "02",
    title: "Keyword & Strategy",
    description:
      "Our team researches high-intent keywords, maps them to your pages, and builds a content strategy aligned with your business goals.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Settings,
    step: "03",
    title: "On-Page Optimization",
    description:
      "We optimize titles, meta tags, headings, content, internal links, structured data, and site speed for maximum search visibility.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Off-Page & Link Building",
    description:
      "We build high-authority backlinks through guest posts, business listings, article submissions, and digital PR campaigns.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Tracking & Reporting",
    description:
      "Monthly ranking reports, traffic analytics, and conversion tracking keep you fully informed on every metric that matters.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: RefreshCw,
    step: "06",
    title: "Continuous Optimization",
    description:
      "SEO is never set-and-forget. We continuously refine strategy based on algorithm updates, competitor moves, and performance data.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function SEOProcess() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Proven <span className="gradient-text">SEO Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic, data-driven approach that consistently delivers first-page rankings and sustainable organic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <span className="text-4xl font-black text-white/5 leading-none mt-1">{step.step}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
