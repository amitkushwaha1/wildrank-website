import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire SEO Expert for Agencies | Wildrank Technologies",
  description: "Hire dedicated white-label SEO experts for your agency. Skilled, vetted SEO specialists working under your brand.",
  alternates: { canonical: "/hire-seo-expert" },
};

const features = [
  { icon: "Users", title: "Dedicated SEO Specialist", desc: "A vetted, full-time SEO expert working exclusively on your clients' accounts.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "Settings", title: "Technical & On-Page", desc: "Audits, optimization, and fixes handled by an experienced professional.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Search", title: "Keyword & Strategy", desc: "Research, mapping, and ongoing strategy aligned with your clients' goals.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Award", title: "Vetted Expertise", desc: "Every expert is screened for skills, communication, and proven results.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Clock", title: "Flexible Hours", desc: "Full-time, part-time, or project-based — scale up or down as needed.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "BarChart3", title: "Branded Reporting", desc: "Your expert delivers reports under your agency's brand.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "How quickly can I get an SEO expert?", a: "Most agencies are matched with a dedicated SEO expert within 3–5 business days." },
  { q: "Can I interview the expert first?", a: "Yes. We match you with candidates and you can interview before committing." },
  { q: "What if it's not a good fit?", a: "We'll replace your expert quickly at no extra cost until you're satisfied." },
  { q: "Is this white-labeled?", a: "Yes. Your expert represents your agency under full NDA in all client communication." },
];

export default function Page() {
  return <WhiteLabelPage badge="Hire SEO Expert" title="Hire a Dedicated" highlight="SEO Expert"
    description="Add a skilled, vetted SEO specialist to your team without the cost and hassle of hiring in-house."
    intro="Building an in-house SEO team is expensive and slow. Instead, hire a dedicated white-label SEO expert through Wildrank — a vetted professional who works as part of your team, handles your clients' SEO, and reports under your brand, at a fraction of the cost of a full-time hire."
    features={features} faqs={faqs} />;
}
