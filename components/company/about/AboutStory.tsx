"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2006", title: "Founded in Noida", desc: "Started as a small SEO consultancy with a team of 5, focused on helping local businesses rank on Google." },
  { year: "2010", title: "100+ Team Members", desc: "Expanded into PPC, social media, and web development. Crossed 100 team members and launched our white-label program." },
  { year: "2014", title: "Google Partner Status", desc: "Achieved Google AdWords Certified Partner status and ISO 9001:2008 certification, validating our quality standards." },
  { year: "2018", title: "Google Partner", desc: "Recognized by Deloitte as one of the fastest-growing technology companies in India. Expanded to US and UK markets." },
  { year: "2022", title: "AI-Powered Platform", desc: "Launched our proprietary AI marketing platform, enabling smarter targeting, faster optimization, and better results." },
  { year: "2024", title: "350+ Team, 30+ Countries", desc: "Today we serve clients across 30+ countries with a 350+ person team and 660+ successful projects delivered." },
];

export default function AboutStory() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">From Startup to <span className="gradient-text">Global Leader</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-dark-border hidden lg:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="glass-card rounded-2xl p-6 border border-dark-border inline-block w-full lg:max-w-sm">
                    <span className="text-accent font-bold text-sm">{m.year}</span>
                    <h3 className="text-white font-bold text-lg mt-1 mb-2">{m.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-dark flex-shrink-0 z-10 hidden lg:block" />
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
