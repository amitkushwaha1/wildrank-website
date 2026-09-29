import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire PPC Expert | Wildrank Technologies",
  description: "Hire dedicated white-label PPC experts for your agency. Certified Google & Meta ads specialists working under your brand.",
  alternates: { canonical: "/hire-ppc-expert" },
};

const features = [
  { icon: "Users", title: "Dedicated PPC Specialist", desc: "A certified paid media expert working exclusively on your clients' campaigns.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "Target", title: "Multi-Platform Mastery", desc: "Google, Bing, Meta, and LinkedIn ads managed by one skilled professional.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "BarChart3", title: "ROAS Optimization", desc: "Daily bid management and optimization focused on your clients' return on ad spend.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Award", title: "Certified & Vetted", desc: "Google and Meta certified experts, screened for skills and results.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Clock", title: "Flexible Engagement", desc: "Full-time, part-time, or per-project — scale to your client load.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "MousePointerClick", title: "Branded Reporting", desc: "Campaign reports delivered under your agency's brand.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Are your PPC experts certified?", a: "Yes. All our PPC specialists hold Google Ads and Meta Blueprint certifications and have managed real budgets." },
  { q: "How fast can I onboard one?", a: "Typically within 3–5 business days, including a matching call and interview." },
  { q: "Can they manage large budgets?", a: "Yes. Our experts manage everything from small local budgets to six-figure monthly ad spends." },
  { q: "Is this white-labeled?", a: "Completely. Your expert works under your brand with full NDA protection." },
];

export default function Page() {
  return <WhiteLabelPage badge="Hire PPC Expert" title="Hire a Dedicated" highlight="PPC Expert"
    description="Add a certified paid media specialist to your team without the overhead of a full-time hire."
    intro="Great PPC managers are hard to find and expensive to keep. Hire a dedicated white-label PPC expert through Wildrank — a certified Google and Meta ads specialist who manages your clients' campaigns, optimizes for ROAS, and reports under your brand, all for a fraction of an in-house salary."
    features={features} faqs={faqs} />;
}
