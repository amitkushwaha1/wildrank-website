"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Search, Sparkles, Globe, Brain, TrendingUp } from "lucide-react";

import {
  OpenAILogo,
  GeminiLogo,
  PerplexityLogo,
  ClaudeLogo,
  DeepSeekLogo,
  GoogleAILogo,
} from "@/components/shared/AIPlatformLogos";

/**
 * The platforms this section is really about, with the vendor's own logo and a
 * line that says specifically what winning looks like there. "Optimized for
 * visibility" under every row wasted the one place on the homepage that can
 * state, in the language buyers now use, what a GEO engagement produces.
 *
 * This list is deliberately identical to the pills orbiting the hero orb. A
 * seventh platform (Microsoft Copilot) was tried and cut: it added a row the
 * hero does not name, which both contradicted the hero and pushed the card far
 * enough down the image that the cascade stopped reading as a cascade.
 */
const aiPlatforms = [
  { name: "ChatGPT",             Logo: OpenAILogo,     note: "Cited in answers and recommendations",  bg: "bg-[#10A37F]/10" },
  { name: "Google Gemini",       Logo: GeminiLogo,     note: "Surfaced in Gemini responses",          bg: "bg-[#8E75B2]/10" },
  { name: "Perplexity",          Logo: PerplexityLogo, note: "Quoted as a cited source",              bg: "bg-[#1FB8CD]/10" },
  { name: "Claude",              Logo: ClaudeLogo,     note: "Referenced in research answers",        bg: "bg-[#D97757]/10" },
  { name: "DeepSeek",            Logo: DeepSeekLogo,   note: "Present in DeepSeek answers",           bg: "bg-[#5786FE]/10" },
  { name: "Google AI Overviews", Logo: GoogleAILogo,   note: "Included in AI Overviews and SGE",      bg: "bg-[#4285F4]/10" },
];

export default function AISection() {
  return (
    <section className="py-24 lg:py-16 section-gradient relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Cpu className="w-3.5 h-3.5" /> Leveraging AI for SEO
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-6"
            >
              The Best AI SEO{" "}
              <span className="gradient-text">Agency</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-base leading-relaxed mb-6"
            >
              Search is evolving faster. With the rise of LLMs and Generative Engine Optimization (GEO), the way people search information is changing, and traditional SEO alone may not be enough. AI-powered SEO is smarter and more adaptive, ensuring your business stays visible across emerging AI-driven platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-base leading-relaxed mb-8"
            >
              At Wildrank, our AI SEO experts combine user data, search intent, keyword prediction, and intelligent content optimization to keep your brand future-proof in this new era of search.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { icon: Brain, text: "AI Content Optimization" },
                { icon: Search, text: "GEO & AEO Ready" },
                { icon: Sparkles, text: "Smart Keyword Prediction" },
                { icon: TrendingUp, text: "LLM Visibility Boost" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-ink font-medium">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-light" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — the human side of the AI story, with the platform card
              cascading over its lower edge (overlap removed below lg). */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            {/* Double-bezel: a glass shell around an inner core, so the image
                reads as a mounted pane rather than a pasted rectangle. */}
            <div className="glass-card rounded-[2rem] p-2">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/ai-search-strategist.webp"
                  alt="Strategist wearing a transparent neural-interface helmet, representing AI-driven search visibility"
                  width={900}
                  height={900}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <Globe className="h-3 w-3" />
                  Generative Engine Optimization
                </div>
              </div>
            </div>

            <div className="glass-card relative z-10 -mt-14 ml-auto w-[95%] rounded-2xl p-6 lg:-mt-16">
              <h3 className="text-base font-bold text-ink">AI Platforms We Optimize For</h3>
              <p className="mb-5 mt-1.5 text-xs leading-relaxed text-muted">
                Generative Engine Optimization puts your brand inside the answer, not just the results list.
              </p>

              <div className="space-y-2">
                {aiPlatforms.map((platform, i) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-tint/5"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${platform.bg}`}>
                      <platform.Logo />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{platform.name}</p>
                      <p className="mt-1 text-xs leading-snug text-muted">{platform.note}</p>
                    </div>
                    <div className="ml-auto h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
