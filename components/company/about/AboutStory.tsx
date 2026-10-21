"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2006", title: "Founded (B2B)", desc: "Started as a B2B digital marketing and software delivery partner. We worked behind the scenes for brands and agencies — our clients were our only storefront, so there was no public website." },
  { year: "2010", title: "100+ Team Members", desc: "Expanded into PPC, social media, web and software development. Crossed 100 team members and launched our white-label program for agency partners." },
  { year: "2014", title: "Expanded Services", desc: "Grew into full-spectrum digital marketing and IT services, serving B2B clients across multiple industries and markets." },
  { year: "2018", title: "US & UK Markets", desc: "Expanded beyond India to serve clients in the US and UK, while continuing to operate as a B2B delivery partner." },
  { year: "2022", title: "AI-Powered Platform", desc: "Launched our proprietary AI marketing platform, enabling smarter targeting, faster optimization, and better results." },
  { year: "2026", title: "Public Launch", desc: "Launched our first public website and opened direct B2B + B2C services, after two decades of behind-the-scenes delivery. That is why everything here is new." },
];

export default function AboutStory() {
  return (
    <section className="py-24 lg:py-16 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">From Startup to <span className="gradient-text">Global Leader</span></h2>
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
                    <h3 className="text-ink font-bold text-lg mt-1 mb-2">{m.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
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
