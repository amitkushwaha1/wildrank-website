import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Link Building Services | Wildrank Technologies",
  description: "White label link building for agencies. High-authority backlinks via guest posts, digital PR, and outreach under your brand.",
  alternates: { canonical: "/white-label-link-building" },
};

const features = [
  { icon: "FileText", title: "Guest Post Outreach", desc: "Editorially placed guest posts on relevant, high-authority websites.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "Globe", title: "Digital PR Links", desc: "Earned media coverage and links from news sites and industry publications.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Award", title: "Niche Edits", desc: "Contextual links inserted into existing, indexed, relevant content.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Search", title: "Competitor Backlink Analysis", desc: "We reverse-engineer competitor link profiles to find your best opportunities.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Link", title: "Tiered Link Building", desc: "Strategic link tiers that strengthen authority safely and sustainably.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "BarChart3", title: "Branded Link Reports", desc: "Monthly reports showing every link acquired, with metrics, under your brand.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Are these white-hat links?", a: "100%. We only build editorially earned, relevant links from real websites with genuine traffic. No PBNs, no link farms." },
  { q: "What metrics do you target?", a: "We focus on relevance and real authority — Domain Rating, organic traffic, and topical fit — not just vanity metrics." },
  { q: "How many links per month?", a: "It scales with your package and client goals, typically 5–30+ quality links per month per client." },
  { q: "Can you share the sites first?", a: "Yes. We can provide prospect lists for approval before placement, depending on the package." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Link Building" title="White Label" highlight="Link Building Services"
    description="Build your clients' domain authority with high-quality, white-hat backlinks — all delivered under your brand."
    intro="Link building is the hardest part of SEO to scale, requiring relationships, outreach, and content. Our white-label link building team handles the entire process — prospecting, outreach, content, and placement — delivering authority-boosting backlinks your clients will love, reported under your brand."
    features={features} faqs={faqs} />;
}
