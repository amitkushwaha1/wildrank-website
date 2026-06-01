"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, BarChart3, Globe, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "White-Hat Only",
    description: "We use only Google-approved techniques. No shortcuts, no penalties — just sustainable rankings that last.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "AI-Powered Strategy",
    description: "Our proprietary AI tools analyze search trends, competitor gaps, and content opportunities faster than any manual process.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Dedicated SEO Team",
    description: "You get a dedicated account manager, SEO strategist, and content team — not a shared pool of generalists.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    description: "Live dashboards and monthly reports show exactly what we're doing, what's ranking, and what revenue it's driving.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Globe,
    title: "Local & Global SEO",
    description: "Whether you target one city or multiple countries, we build strategies that dominate at every geographic level.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Email, phone, and chat support available around the clock. Your questions never go unanswered.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function SEOWhyUs() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            SEO Done <span className="gradient-text">The Right Way</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine deep expertise, cutting-edge tools, and genuine transparency to deliver SEO results you can count on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group"
              >
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
  );
}
