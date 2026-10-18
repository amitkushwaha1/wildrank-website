"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Brain, TrendingUp, ArrowRight } from "lucide-react";

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
  { name: "Google Gemini",       Logo: GeminiLogo,     note: "Surfaced in Gemini responses",          bg: "bg-[#9B72CB]/10" },
  { name: "Perplexity",          Logo: PerplexityLogo, note: "Quoted as a cited source",              bg: "bg-[#20808D]/10" },
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
        {/* items-start, not items-center. The text column is shorter than the
            image column, so centring it pushed its first 225px below the top of
            the image: scrolling to this section showed the photograph and a
            blank column beside it, with the heading fading in only once the
            column itself reached the viewport. Top-aligning puts the eyebrow
            level with the image, and the entrance delays are now short enough
            that the text arrives with the picture rather than after it. */}
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-lg shadow-primary/25"
            >
              Leveraging AI for SEO
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-6"
            >
              The Best AI SEO{" "}
              <span className="gradient-text">Agency</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-muted text-base leading-relaxed mb-6"
            >
              Search has transformed. We engineer Generative Engine Optimization
              (GEO) so your brand is cited as the definitive answer across
              ChatGPT, Perplexity, Gemini and Google AI Overviews — powered by
              sub-second Next.js web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-muted text-base leading-relaxed mb-8"
            >
              At Wildrank, our AI SEO strategists combine entity mapping,
              structured markup and search-intent modelling to keep your brand
              visible in a market where being indexed is no longer the same as
              being recommended.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
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

            {/* The method. The right column is roughly twice the height of this
                one — a portrait plus a six-row platform card — so the column
                ended a screen above it and left the space beside the portrait
                empty. This fills it with the question the section raises and
                does not answer: how does any of that actually happen? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 border-t border-hairline/10 pt-8"
            >
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                How we get you cited
              </p>
              <ol className="space-y-4">
                {[
                  {
                    n: "01",
                    t: "Map the entity",
                    d: "We establish the verifiable facts about your business — services, locations, credentials — that a model can safely rely on.",
                  },
                  {
                    n: "02",
                    t: "Structure the pages",
                    d: "Schema, FAQ markup and definitional copy, written so an answer engine can lift a sentence and still be correct.",
                  },
                  {
                    n: "03",
                    t: "Measure the answers",
                    d: "We track the prompts that matter across six platforms every month, and report which ones now name you.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="pt-0.5 font-mono text-xs font-bold text-primary-light">
                      {step.n}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">{step.t}</span>
                      <span className="block text-sm leading-relaxed text-muted">{step.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href="/geo-aeo-services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary-light"
              >
                How GEO and AEO work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
