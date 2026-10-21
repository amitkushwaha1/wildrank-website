"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, PhoneCall, TrendingUp, ShieldCheck, Bot } from "lucide-react";
import NeuralOrb from "@/components/home/NeuralOrb";
import FallingStars from "@/components/shared/FallingStars";

/**
 * The five hero figures.
 *
 * Deliberately no "500+ clients" card. That claim already heads the proof band
 * one section below, and it used to appear in both places — a visitor met the
 * same sentence twice before scrolling past two sections. These five are the
 * figures a buyer in 2026 screens for: entity age, AI citation lift, the
 * guarantee, whether anyone answers the phone, and how many answer engines are
 * actually watched. That is also the vocabulary that gets a brand quoted by
 * ChatGPT and Gemini rather than merely indexed by them.
 *
 * The fourth card used to read "< 300ms — Next.js Edge Latency". It was
 * dropped rather than reworded. A sub-300ms response is not something this
 * business does that a competitor does not — any site on any CDN, static or
 * not, can print the same figure, and it says nothing a buyer can hold us to.
 * A number that a competitor could put on their own homepage unchanged is not
 * a differentiator, it is decoration, and on a page whose whole argument is
 * "we can be measured" it reads as the one figure we could not measure.
 * What replaced it is the thing the section directly below now leads with: the
 * phone gets answered. That is ownable, it is checkable, and it is the same
 * promise the missed-call section makes in full.
 */
type Stat = {
  icon: typeof Award;
  value: string;
  title: string;
  desc: string;
  color: string;
  bg: string;
};

const stats: Stat[] = [
  { icon: Award,       value: "2006",    title: "Founded & Proven",       desc: "Founded 2006. Two decades delivering behind the scenes for B2B clients and agency partners — no public website needed until now.",        color: "text-primary", bg: "bg-primary/10" },
  { icon: TrendingUp,  value: "+340%",   title: "Avg. AI Citation Lift",  desc: "Average lift in citations across ChatGPT, Gemini, Perplexity and Google AI Overviews.",     color: "text-primary", bg: "bg-primary/10" },
  { icon: ShieldCheck, value: "90-Day",  title: "Results Guarantee",      desc: "Agreed traffic, citation or pipeline milestones met in 90 days, or advisory fees refunded.", color: "text-primary", bg: "bg-primary/10" },
  { icon: PhoneCall,   value: "24/7",    title: "Calls Answered",         desc: "An AI receptionist picks up nights, weekends and the busy line, so an enquiry is not lost.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Bot,         value: "6",       title: "AI Platforms Monitored", desc: "ChatGPT, Gemini, Perplexity, Claude, DeepSeek and Google AI Overviews, checked monthly.",   color: "text-primary", bg: "bg-primary/10" },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const trustLogos = ["AI-Powered SEO", "GEO & AEO Ready", "Results-Driven"];
  return (
    <section className="relative min-h-screen overflow-hidden bg-band pt-20">

      {/* ── Ambient drifting stars ── */}
      <FallingStars />

      {/* ── Technical grid. This was drawn in white, so on the light band it was
             invisible — three "opacity-[0.03]" layers contributing nothing. ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,20,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(17,17,20,0.05) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 25%, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 25%, black 0%, transparent 72%)",
        }}
      />

      {/* ── Ambient glows. The second was `secondary`, which is near-black ink
             and read as a grey smudge rather than warmth. ── */}
      <div className="pointer-events-none absolute top-0 left-0 h-[40rem] w-[40rem] rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/6 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-lg shadow-primary/25"
            >
              AI-Powered Digital Marketing
            </motion.div>

            {/* Headline.
                Entrances above the fold animate transform only — never opacity.
                This <h1> is the Largest Contentful Paint element; starting it at
                opacity:0 leaves the biggest text on the page invisible until
                React hydrates and framer-motion runs, which measured ~2.2 s of
                LCP element-render delay on mobile. A translate-only entrance
                paints immediately, so the LCP fires with the first frame. */}
            <motion.h1
              initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.04] mb-6"
            >
              <span className="text-ink">Be the Brand Google Ranks</span>
              <br />
              <span className="gradient-text">AI Recommends First</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-muted text-lg leading-relaxed max-w-lg mb-4"
            >
              From Google to Gemini, Perplexity to voice — we engineer your brand&apos;s visibility across every AI and search surface that your customers use.
            </motion.p>

            {/* Trust logos */}
            <motion.div
              initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {trustLogos.map(l => (
                <span key={l} className="text-xs font-semibold text-faint tracking-widest uppercase">{l}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(252,72,18,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Book a Strategy Session <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/search-engine-optimization-services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-hairline/10 hover:border-hairline/30 text-ink font-semibold px-8 py-4 rounded-xl transition-all hover:bg-tint/5"
              >
                Explore Services
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT — the neural orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <NeuralOrb />
          </motion.div>

        </div>

        {/* ── Stat cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card ring-glow rounded-2xl p-5 group cursor-default"
                style={{ "--ring-hue": String(i * 137.508 % 360) } as React.CSSProperties}
              >
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className={`text-2xl font-extrabold ${stat.color} mb-0.5`}>{stat.value}</p>
                <p className="text-ink font-semibold text-sm mb-1">{stat.title}</p>
                <p className="text-faint text-xs leading-relaxed">{stat.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
