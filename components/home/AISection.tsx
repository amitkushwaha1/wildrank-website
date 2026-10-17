"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Search, Sparkles, Globe, Brain, TrendingUp } from "lucide-react";

/* SVG logos for each AI platform */
function ChatGPTLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M22.2 14.1c.3-1 .4-2.1.2-3.2-.4-2.3-1.8-4.3-3.8-5.4.1-.6.1-1.2 0-1.8-.4-2.3-1.9-4.3-3.9-5.3-2.5-1.3-5.4-1-7.6.6C6 .1 5 .2 4 .6 1.7 1.5.2 3.7 0 6.1c-.5.3-1 .7-1.4 1.2C-2.8 9-2.8 11.5-1.6 14c-.3 1-.4 2.1-.2 3.2.4 2.3 1.8 4.3 3.8 5.4-.1.6-.1 1.2 0 1.8.4 2.3 1.9 4.3 3.9 5.3 2.5 1.3 5.4 1 7.6-.6 1.1.8 2.1.7 3.1.3 2.3-.9 3.8-3.1 4-5.5.5-.3 1-.7 1.4-1.2 1.4-1.7 1.4-4.2.2-5.6z" transform="scale(0.85) translate(2,2)" fill="#10A37F"/>
      <path d="M9.5 18.3l-2.2-1.3v-5l4.5-2.6 2.2 1.3-4.5 2.6v5zm5.5-3.2l-2.2 1.3V11l4.5-2.6V11l-2.3 1.4v2.7z" fill="white" transform="scale(0.85) translate(2,2)"/>
    </svg>
  );
}

function GeminiLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#gemini-grad)"/>
      <path d="M12 5.5c0 3.59 2.91 6.5 6.5 6.5-3.59 0-6.5 2.91-6.5 6.5 0-3.59-2.91-6.5-6.5-6.5 3.59 0 6.5-2.91 6.5-6.5z" fill="white"/>
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#4285F4"/>
          <stop offset="25%" stopColor="#9B72CB"/>
          <stop offset="50%" stopColor="#D96570"/>
          <stop offset="75%" stopColor="#D96570"/>
          <stop offset="100%" stopColor="#9B72CB"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PerplexityLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill="#1B1B1B"/>
      <path d="M12 4L6 8v4l6 4 6-4V8l-6-4z" stroke="#20B8CD" strokeWidth="1.5" fill="none"/>
      <path d="M12 4v12M6 8l6 4 6-4" stroke="#20B8CD" strokeWidth="1.5" fill="none"/>
      <path d="M6 12l6 4 6-4" stroke="#20B8CD" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="19" r="1.5" fill="#20B8CD"/>
    </svg>
  );
}

function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill="#CC9B7A"/>
      <path d="M12 6C8.7 6 6 8.7 6 12s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10.5c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
    </svg>
  );
}

function GoogleAILogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFFFFF"/>
      <path d="M12 11v3.5h5c-.2 1.1-.8 2-1.7 2.6l2.7 2.1c1.6-1.5 2.5-3.7 2.5-6.2 0-.6-.1-1.2-.2-1.7H12z" fill="#4285F4"/>
      <path d="M6.3 13.7l-.6.5-2.2 1.7C5 18.6 8.2 20.5 12 20.5c2.4 0 4.4-.8 5.9-2.2l-2.7-2.1c-.8.5-1.8.9-3.2.9-2.4 0-4.5-1.6-5.2-3.8l-.5.4z" fill="#34A853"/>
      <path d="M3.5 7.1C2.9 8.3 2.5 9.6 2.5 11s.4 2.7 1 3.9l2.8-2.2c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7L3.5 7.1z" fill="#FBBC05"/>
      <path d="M12 5.5c1.4 0 2.6.5 3.5 1.3l2.6-2.6C16.4 2.7 14.4 1.8 12 1.8 8.2 1.8 5 3.7 3.5 6.4l2.8 2.2c.7-2.2 2.8-3.1 5.7-3.1z" fill="#EA4335"/>
    </svg>
  );
}

const aiPlatforms = [
  { name: "ChatGPT",    Logo: ChatGPTLogo,    bg: "bg-[#10A37F]/10" },
  { name: "Gemini",     Logo: GeminiLogo,     bg: "bg-blue-500/10" },
  { name: "Perplexity", Logo: PerplexityLogo, bg: "bg-cyan-500/10" },
  { name: "Claude",     Logo: ClaudeLogo,     bg: "bg-orange-500/10" },
  { name: "Google AI",  Logo: GoogleAILogo,   bg: "bg-red-500/10" },
];

export default function AISection() {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
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
              <h3 className="mb-5 text-base font-bold text-ink">AI Platforms We Optimize For</h3>

              <div className="space-y-2.5">
                {aiPlatforms.map((platform, i) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-tint/5"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${platform.bg}`}>
                      <platform.Logo />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{platform.name}</p>
                      <p className="text-xs text-muted">Optimized for visibility</p>
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
