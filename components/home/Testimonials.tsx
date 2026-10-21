"use client";

import { motion } from "framer-motion";
import { Quote, Users, ShieldCheck, MessageCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Client References
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-4">
            Real Clients. <span className="gradient-text">Real Conversations.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We don&apos;t publish placeholder quotes. Our work has been delivered
            behind the scenes for two decades, so our proof lives in the results
            our clients see — and in the conversations we&apos;re happy to arrange.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Users,
              title: "Ask for a reference",
              desc: "We will connect you directly with a client in your industry who has used our services. No scripted testimonials — a real conversation.",
            },
            {
              icon: ShieldCheck,
              title: "NDA-protected work",
              desc: "Much of our B2B delivery is under NDA, which is why you won't find public case studies. We can share anonymised metrics on request.",
            },
            {
              icon: MessageCircle,
              title: "Start with a pilot",
              desc: "Engage us on a small, defined scope first. Measure the outcome, then scale. No long-term lock-in required.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-dark-border text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-ink font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            <Quote className="w-4 h-4" /> Request a Client Reference
          </a>
        </motion.div>
      </div>
    </section>
  );
}
