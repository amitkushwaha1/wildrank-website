import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label PPC Services | Wildrank Technologies",
  description: "White label PPC management for agencies. Google Ads, Bing, and social campaigns managed under your brand.",
  alternates: { canonical: "/white-label-ppc-services" },
};

const features = [
  { icon: "MousePointerClick", title: "Google Ads Management", desc: "Search, display, and Performance Max campaigns built and optimized under your brand.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "Target", title: "Social PPC", desc: "Meta, LinkedIn, and TikTok ad campaigns managed for your clients.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "RefreshCw", title: "Remarketing", desc: "Retargeting campaigns that re-engage your clients' lost visitors.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "ShoppingCart", title: "Shopping Ads", desc: "E-commerce product campaigns that drive sales for your retail clients.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: "Globe", title: "Bing & Microsoft Ads", desc: "Expand reach to the audiences Google misses, at lower CPCs.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: "BarChart3", title: "White-Label Reporting", desc: "Branded performance dashboards showing spend, conversions, and ROAS.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

const faqs = [
  { q: "Do my clients keep their ad accounts?", a: "Yes, always. Ad accounts remain in your client's name. We request manager access and never hold accounts hostage." },
  { q: "How do you charge for PPC management?", a: "We charge flat wholesale management fees, not a percentage of spend. You mark up and bill your clients however you prefer." },
  { q: "Can you take over existing campaigns?", a: "Absolutely. We regularly audit and turn around underperforming accounts within 30–60 days." },
  { q: "Is the ad spend included?", a: "No — ad spend is billed separately and paid by your client directly. Our fee covers strategy, setup, and management only." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label PPC Services" title="White Label" highlight="PPC Services"
    description="Deliver high-ROI paid advertising campaigns to your clients without building a paid media team. We manage; you bill."
    intro="Paid media is one of the most requested — and most technical — services agencies offer. Our white-label PPC team manages Google, Bing, and social campaigns under your brand, delivering the ROAS your clients expect while you focus on growing your agency."
    features={features} faqs={faqs} />;
}
