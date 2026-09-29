import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Digital Marketing | Wildrank Technologies",
  description: "Complete white label digital marketing for agencies. SEO, PPC, social, email, and content under your brand.",
  alternates: { canonical: "/white-label-digital-marketing" },
};

const features = [
  { icon: "Search", title: "White Label SEO", desc: "Full-service organic search optimization delivered as your agency's work.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "MousePointerClick", title: "White Label PPC", desc: "Google and social paid campaigns managed under your brand.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Share2", title: "Social Media", desc: "Content, community management, and paid social for your clients.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "Mail", title: "Email Marketing", desc: "Automated campaigns and newsletters branded as your agency.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "PenTool", title: "Content Marketing", desc: "Blogs, landing pages, and copy that ranks and converts.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "BarChart3", title: "Unified Reporting", desc: "One branded dashboard across every channel you resell.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Can I offer all services or pick a few?", a: "Pick whatever fits your agency. Start with one service and add channels as your clients' needs grow." },
  { q: "Is everything truly white-labeled?", a: "Yes. Every report, email, and deliverable carries your branding. We're invisible to your clients." },
  { q: "How is pricing structured?", a: "Wholesale per-service or bundled pricing. You set your own retail rates and keep the margin." },
  { q: "Do I get a dedicated point of contact?", a: "Yes. You get a dedicated account manager who coordinates all services across your client roster." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Digital Marketing" title="White Label" highlight="Digital Marketing"
    description="A complete digital marketing department behind your brand. Offer every service your clients need without expanding your team."
    intro="Clients increasingly want a single agency that handles everything — SEO, PPC, social, email, and content. Instead of hiring specialists for each, partner with us. We deliver the full digital marketing stack under your brand, so you can win bigger contracts and keep clients longer."
    features={features} faqs={faqs} />;
}
