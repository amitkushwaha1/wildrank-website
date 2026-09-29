import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label AI Services | Wildrank Technologies",
  description: "White label AI services for agencies. AI SEO, GEO, AEO, content automation, and chatbots delivered under your brand.",
  alternates: { canonical: "/white-label-ai-services" },
};

const features = [
  { icon: "Search", title: "AI SEO (GEO)", desc: "Generative Engine Optimization to get your clients cited in ChatGPT, Gemini, and Perplexity.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "MessageSquareText", title: "Answer Engine Optimization", desc: "Structured content that wins featured snippets and AI-generated answers.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Brain", title: "AI Content Generation", desc: "Human-edited, AI-assisted content produced at scale under your brand.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Bot", title: "AI Chatbots", desc: "Custom AI chat assistants built and deployed for your clients' websites.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Sparkles", title: "Predictive Analytics", desc: "AI-powered keyword and trend prediction to keep clients ahead.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "Cpu", title: "Automation Workflows", desc: "AI marketing automation that saves your team hours every week.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "What is AI SEO / GEO?", a: "Generative Engine Optimization makes your clients' content discoverable and citable by AI search engines like ChatGPT, Gemini, and Perplexity — the fastest-growing search channels." },
  { q: "Is AI content safe for SEO?", a: "Yes, when done right. All our AI-assisted content is human-edited and fact-checked to meet Google's helpful content standards." },
  { q: "Can you build custom AI tools?", a: "Yes. We build branded chatbots, automation workflows, and AI integrations tailored to your clients' needs." },
  { q: "Is this white-labeled too?", a: "Completely. Every AI deliverable and report carries your branding under full NDA." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label AI Services" title="White Label" highlight="AI Services"
    description="Offer cutting-edge AI marketing services to your clients before your competitors even understand them."
    intro="AI is reshaping search and marketing faster than most agencies can keep up. Our white-label AI services let you offer GEO, AEO, AI content, and custom AI tools under your brand — positioning your agency as a forward-thinking leader without needing an in-house AI team."
    features={features} faqs={faqs} />;
}
