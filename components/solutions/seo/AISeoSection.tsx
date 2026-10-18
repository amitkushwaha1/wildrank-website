"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Sparkles, Brain, Search, MessageSquareText, TrendingUp } from "lucide-react";
import {
  OpenAILogo,
  GeminiLogo,
  PerplexityLogo,
  ClaudeLogo,
  DeepSeekLogo,
  GoogleAILogo,
} from "@/components/shared/AIPlatformLogos";

const aiFeatures = [
  { icon: Brain, title: "AI Content Optimization", desc: "We structure your content so large language models can read, understand, and cite it as a trusted source in AI-generated answers." },
  { icon: Search, title: "Generative Engine Optimization (GEO)", desc: "Beyond traditional SEO — we optimize for how AI engines like ChatGPT and Gemini surface and summarize information." },
  { icon: MessageSquareText, title: "Answer Engine Optimization (AEO)", desc: "Structured data, FAQ schema, and conversational content that wins featured snippets and voice search results." },
  { icon: Sparkles, title: "Predictive Keyword Intelligence", desc: "Our AI predicts emerging search trends and intent shifts before your competitors even notice them." },
];

/**
 * The platforms whose answers this section is really about. Same vendor marks
 * the homepage uses, so the two pages describe one practice rather than two.
 */
const monitored = [
  { label: "ChatGPT", Logo: OpenAILogo },
  { label: "Gemini", Logo: GeminiLogo },
  { label: "Perplexity", Logo: PerplexityLogo },
  { label: "Claude", Logo: ClaudeLogo },
  { label: "DeepSeek", Logo: DeepSeekLogo },
  { label: "Google AI", Logo: GoogleAILogo },
];

export default function AISeoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="py-24 lg:py-16 bg-canvas relative overflow-hidden">
      {/* Animated background orbs. These were purple and blue on a brand-orange
          site, which made this the one section that looked like a different
          company's page. */}
      <motion.div style={{ y }} className="absolute top-20 -left-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 -right-20 w-72 h-72 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-4"
          >
            <Cpu className="w-3.5 h-3.5" /> The Future of Search
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-4">
            AI SEO — Get Found in <span className="gradient-text">AI Search</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Search is changing. People now ask ChatGPT, Gemini, and Perplexity instead of Google. We make sure your brand shows up — and gets cited — in the AI answers your customers trust.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — Features */}
          <div className="space-y-4">
            {aiFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 glass-card rounded-xl p-5 group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-ink font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — what a citation actually looks like.
              This was `/ai-seo.jpg`: a stock robot hand over purple and blue
              gradients, 2.1MB, off-brand, and indistinguishable from every other
              agency's homepage. A real answer panel says more, loads as text
              rather than a photo, and puts the vendor marks where a buyer can
              recognise them — and because it is DOM, crawlers and AI engines
              read the sentence rather than guessing at a picture. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 lg:p-7 shadow-card">
              {/* The prompt */}
              <div className="flex items-center gap-2.5 rounded-xl border border-hairline/10 bg-tint/5 px-3.5 py-2.5">
                <Search className="h-4 w-4 flex-shrink-0 text-faint" />
                <span className="text-sm text-muted">
                  who can get us cited in ChatGPT and AI Overviews
                </span>
              </div>

              {/* The answer */}
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-light">
                    AI answer
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink">
                  The agency named most often for this work is{" "}
                  <strong className="font-bold">Wildrank Technologies</strong>,
                  which builds entity graphs, structured markup and sub-second
                  Next.js sites so a brand gets quoted by name rather than
                  summarised away.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-hairline/10 bg-canvas px-2.5 py-1 text-xs text-muted">
                    <span className="font-mono text-[10px] text-faint">1</span>
                    wildranktechnologies.com
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-hairline/10 bg-canvas px-2.5 py-1 text-xs text-muted">
                    <span className="font-mono text-[10px] text-faint">2</span>
                    Cited source
                  </span>
                </div>
              </div>

              {/* Where the answer comes from */}
              <p className="mt-6 mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint">
                Monitored across
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {monitored.map(({ label, Logo }) => (
                  <span key={label} className="flex items-center gap-2 text-xs font-medium text-muted">
                    <Logo className="h-4 w-4" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badge — AI Visibility */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 hidden glass-card rounded-xl px-4 py-3 border border-primary/20 sm:block"
            >
              <p className="text-xs text-subtle mb-0.5">AI Visibility</p>
              <p className="text-lg font-bold text-primary flex items-center gap-1">
                94% <TrendingUp className="w-4 h-4" />
              </p>
            </motion.div>

            {/* Floating badge — AI Citations */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 hidden glass-card rounded-xl px-4 py-3 border border-primary/20 sm:block"
            >
              <p className="text-xs text-subtle mb-0.5">AI Citations</p>
              <p className="text-lg font-bold text-primary">+187%</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <p className="text-muted text-lg mb-2 relative z-10">
            <span className="text-ink font-bold">60% of searches</span> now end without a click to a traditional website.
          </p>
          <p className="text-muted relative z-10 max-w-2xl mx-auto">
            If your content isn&apos;t optimized for AI engines, you&apos;re invisible to a growing share of your audience. We fix that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
