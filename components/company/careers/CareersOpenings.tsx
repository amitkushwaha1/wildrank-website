"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const openings = [
  { title: "Senior SEO Strategist", dept: "Digital Marketing", location: "Noida / Remote", type: "Full-time", color: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "PPC Campaign Manager", dept: "Digital Marketing", location: "Remote", type: "Full-time", color: "text-orange-400", bg: "bg-orange-500/10" },
  { title: "React / Next.js Developer", dept: "Technology", location: "Noida / Remote", type: "Full-time", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { title: "Mobile App Developer (React Native)", dept: "Technology", location: "Remote", type: "Full-time", color: "text-green-400", bg: "bg-green-500/10" },
  { title: "Social Media Manager", dept: "Digital Marketing", location: "Remote", type: "Full-time", color: "text-pink-400", bg: "bg-pink-500/10" },
  { title: "Content Writer (SEO Focus)", dept: "Content", location: "Remote", type: "Full-time / Part-time", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { title: "UI/UX Designer", dept: "Design", location: "Noida / Remote", type: "Full-time", color: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Business Development Manager", dept: "Sales", location: "USA / Remote", type: "Full-time", color: "text-red-400", bg: "bg-red-500/10" },
];

export default function CareersOpenings() {
  return (
    <section className="py-24 bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Open Positions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Find Your <span className="gradient-text">Next Role</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We&apos;re growing fast and always looking for talented people to join our team.</p>
        </motion.div>
        <div className="space-y-3">
          {openings.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl border border-dark-border hover:border-primary/30 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${job.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-xs font-bold ${job.color}`}>{job.dept[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{job.title}</h3>
                    <p className="text-gray-500 text-xs">{job.dept}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />{job.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />{job.type}
                  </span>
                  <motion.a href="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1 bg-accent hover:bg-accent-light text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
