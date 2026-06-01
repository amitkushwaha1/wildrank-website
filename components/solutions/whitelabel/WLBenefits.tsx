"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Clock, DollarSign, Users, Award } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Full NDA Protection", description: "Every engagement is covered by a strict NDA. Your clients will never know we exist.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Eye, title: "Invisible Partnership", description: "All reports, dashboards, and communications carry your branding — not ours.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Clock, title: "Fast Turnaround", description: "Dedicated teams mean faster delivery. Most projects start within 48 hours of onboarding.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: DollarSign, title: "Higher Margins", description: "Our wholesale pricing lets you mark up 2–3x and still be competitive in your market.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Users, title: "Scalable Capacity", description: "Take on 10 clients or 100 — our team scales with your pipeline without any hiring delays.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Award, title: "Award-Winning Quality", description: "Deloitte Fast 50 recognized. Your clients get enterprise-grade work at agency pricing.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function WLBenefits() {
  return (
    <section className="py-24 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Partner With Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Built for <span className="gradient-text">Agency Growth</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We've designed our white-label program specifically to help agencies win more clients, deliver better results, and grow faster.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 border border-dark-border group">
                <div className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
