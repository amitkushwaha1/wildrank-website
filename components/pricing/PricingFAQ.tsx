"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqsByService: Record<string, { q: string; a: string }[]> = {
  SEO: [
    { q: "How long before I see SEO results?", a: "Most clients see measurable improvements in 3–6 months. Competitive industries may take longer. We provide monthly reports from day one." },
    { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade at any time. We carry over all existing work and scale the strategy to match your new plan." },
    { q: "Do you use white-hat techniques only?", a: "Always. We strictly follow Google's guidelines — no black-hat tactics, no PBNs, no shortcuts that risk penalties." },
    { q: "Is there a minimum commitment?", a: "We recommend 3 months to see meaningful results, but there are no long-term contracts. Cancel with 30 days notice." },
  ],
  PPC: [
    { q: "What is your management fee structure?", a: "We charge a flat monthly management fee based on your plan tier. There are no percentage-of-spend fees — your budget goes entirely to ads." },
    { q: "Which ad platforms do you manage?", a: "Google Ads, Bing Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, and Pinterest — depending on your plan." },
    { q: "How quickly can campaigns go live?", a: "Most campaigns are live within 5–7 business days of onboarding, including research, setup, and tracking configuration." },
    { q: "Do I own my ad accounts?", a: "Yes, always. Your ad accounts remain yours. We request manager access and never hold your accounts hostage." },
  ],
  "Social Media": [
    { q: "How many posts per month are included?", a: "Starter includes 12 posts/month, Growth includes 20, and Pro includes 30 across your chosen platforms." },
    { q: "Do you create the content or do I?", a: "We handle everything — copywriting, graphics, and scheduling. You review and approve before anything goes live." },
    { q: "Which platforms are covered?", a: "Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and Pinterest. Platform selection depends on your plan and audience." },
    { q: "Can I add paid social ads to my plan?", a: "Yes. Paid social ad management can be added to any plan as an add-on. Contact us for custom pricing." },
  ],
  "Web Development": [
    { q: "How long does a website project take?", a: "Landing pages take 1–2 weeks. Business websites 3–5 weeks. E-commerce and custom apps 6–12 weeks depending on scope." },
    { q: "Do you provide hosting?", a: "We can recommend and set up hosting, but we don't lock you into our hosting. You own everything." },
    { q: "Will my site be mobile-friendly?", a: "Every site we build is mobile-first and fully responsive across all screen sizes and devices." },
    { q: "What happens after launch?", a: "We offer ongoing maintenance retainers for updates, security patches, and performance monitoring." },
  ],
  "Mobile App": [
    { q: "How long does app development take?", a: "MVP apps typically take 8–12 weeks. Full-featured apps take 16–24 weeks. We provide a detailed timeline after scoping." },
    { q: "Do you handle App Store submission?", a: "Yes. We handle the full submission process for both Apple App Store and Google Play Store." },
    { q: "What is your development process?", a: "We follow an agile process with 2-week sprints, regular demos, and your feedback incorporated at every stage." },
    { q: "Do I own the source code?", a: "Yes. Full source code ownership is transferred to you upon project completion and final payment." },
  ],
  "White Label": [
    { q: "Will my clients know you exist?", a: "Never. All reports, dashboards, and communications carry your branding. We operate under strict NDA." },
    { q: "What is the minimum commitment?", a: "No minimum commitment. Start with one service and scale as your client base grows." },
    { q: "How fast can you onboard new clients?", a: "Most white-label clients are onboarded within 48–72 hours of signing up." },
    { q: "Can I set my own pricing to clients?", a: "Absolutely. Our wholesale pricing lets you mark up 2–3x and remain competitive in your market." },
  ],
};

export default function PricingFAQ({ service }: { service: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = faqsByService[service] ?? faqsByService.SEO;

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">Everything you need to know before choosing a plan.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? "border-primary/40" : "border-dark-border"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                {open === i
                  ? <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                  : <Plus  className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-dark-border pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
