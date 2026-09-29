import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Guest Post Services | Wildrank Technologies",
  description: "White label guest posting for agencies. Editorially placed guest posts on relevant high-authority sites under your brand.",
  alternates: { canonical: "/white-label-guest-post-services" },
};

const features = [
  { icon: "Search", title: "Site Prospecting", desc: "We find relevant, high-authority blogs with real traffic in your client's niche.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "PenTool", title: "Content Writing", desc: "Expert writers craft genuinely useful articles that publishers want to feature.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Globe", title: "Editorial Outreach", desc: "Real relationships with editors get your content placed, not paid link farms.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Award", title: "High-Authority Placements", desc: "Guest posts on sites with strong Domain Rating and genuine readership.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "FileText", title: "Contextual Backlinks", desc: "Natural, relevant anchor text links within high-quality content.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "BarChart3", title: "Branded Reporting", desc: "Full reports of every placement with live links and metrics, under your brand.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Are the guest posts permanent?", a: "Yes. All placements are permanent, do-follow, editorially placed posts on live websites." },
  { q: "Do you write the content?", a: "Yes. Our writers produce high-quality, original articles tailored to each publisher's audience and your client's keywords." },
  { q: "How do you vet the sites?", a: "We check organic traffic, Domain Rating, topical relevance, and spam signals before any placement." },
  { q: "Is it white-labeled?", a: "Completely. All outreach and reporting happen under your brand with full NDA protection." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Guest Post Services" title="White Label" highlight="Guest Post Services"
    description="Secure editorially placed guest posts on relevant, high-authority websites — all under your agency's brand."
    intro="Quality guest posting requires writing talent and genuine publisher relationships that take years to build. Our white-label guest post service handles prospecting, content, and outreach to land your clients on authoritative sites — boosting their rankings and your agency's reputation."
    features={features} faqs={faqs} />;
}
