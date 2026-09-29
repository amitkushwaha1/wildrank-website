"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Cpu, Sparkles, Brain, Search, Bot, MessageSquareText, TrendingUp } from "lucide-react";

const aiFeatures = [
  { icon: Brain, title: "AI Content Optimization", desc: "We structure your content so large language models can read, understand, and cite it as a trusted source in AI-generated answers.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Search, title: "Generative Engine Optimization (GEO)", desc: "Beyond traditional SEO — we optimize for how AI engines like ChatGPT and Gemini surface and summarize information.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: MessageSquareText, title: "Answer Engine Optimization (AEO)", desc: "Structured data, FAQ schema, and conversational content that wins featured snippets and voice search results.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Sparkles, title: "Predictive Keyword Intelligence", desc: "Our AI predicts emerging search trends and intent shifts before your competitors even notice them.", color: "text-orange-400", bg: "bg-orange-500/10" },
];

export default function AISeoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div style={{ y }} className="absolute top-20 -left-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }} className="absolute bottom-20 -right-20 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold px-4 py-2 rounded-full mb-4"
          >
            <Cpu className="w-3.5 h-3.5" /> The Future of Search
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            AI SEO — Get Found in <span className="gradient-text">AI Search</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Search is changing. People now ask ChatGPT, Gemini, and Perplexity instead of Google. We make sure your brand shows up — and gets cited — in the AI answers your customers trust.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 glass-card rounded-xl p-5 group"
                >
                  <div className={`w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — 3D image visual */}
          <motion.div style={{ rotate }} className="relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

              {/* The image */}
              <div className="relative">
                <Image
                  src="/ai-seo.jpg"
                  alt="AI-powered SEO — robot hand interacting with SEO technology"
                  width={1024}
                  height={614}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay for blending with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent pointer-events-none" />

                {/* Animated scan line */}
                <motion.div
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none"
                />
              </div>

              {/* Live AI badge inside image */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white font-medium">AI SEO Active</span>
              </div>
            </motion.div>

            {/* Floating badge — AI Visibility */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 glass-card rounded-xl px-4 py-3 border border-purple-500/20"
            >
              <p className="text-xs text-gray-500 mb-0.5">AI Visibility</p>
              <p className="text-lg font-bold text-green-400 flex items-center gap-1">94% <TrendingUp className="w-4 h-4" /></p>
            </motion.div>

            {/* Floating badge — AI Citations */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card rounded-xl px-4 py-3 border border-purple-500/20"
            >
              <p className="text-xs text-gray-500 mb-0.5">AI Citations</p>
              <p className="text-lg font-bold text-purple-400">+187%</p>
            </motion.div>

            {/* Floating platform chip */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 glass-card rounded-xl px-3 py-2 border border-white/10 hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white font-medium">ChatGPT Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 border border-purple-500/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          <p className="text-gray-300 text-lg mb-2 relative z-10">
            <span className="text-white font-bold">60% of searches</span> now end without a click to a traditional website.
          </p>
          <p className="text-gray-400 relative z-10 max-w-2xl mx-auto">
            If your content isn&apos;t optimized for AI engines, you&apos;re invisible to a growing share of your audience. We fix that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
