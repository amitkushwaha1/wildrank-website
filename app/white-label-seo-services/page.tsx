import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import RelatedReading from "@/components/shared/RelatedReading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label SEO for Agencies | Wildrank Technologies",
  description: "White label SEO for agencies: technical SEO, link building, content and reporting delivered under your brand. Resell-ready, fully white-labelled.",
  alternates: { canonical: "/white-label-seo-services" },
};

const features = [
  { icon: "Settings", title: "Technical SEO", desc: "Site audits, speed optimization, structured data, and crawl fixes — branded as your agency's work.", color: "text-blue-600", bg: "bg-blue-500/10" },
  { icon: "Search", title: "On-Page Optimization", desc: "Title tags, meta descriptions, content optimization, and internal linking for your clients.", color: "text-orange-700", bg: "bg-orange-500/10" },
  { icon: "Link", title: "Link Building", desc: "White-hat backlinks through guest posts and digital PR — reported under your brand.", color: "text-green-700", bg: "bg-green-500/10" },
  { icon: "FileText", title: "Content Creation", desc: "SEO blog posts and landing pages written by our team, delivered as yours.", color: "text-purple-600", bg: "bg-purple-500/10" },
  { icon: "MapPin", title: "Local SEO", desc: "Google Business Profile optimization and local citations for your clients' locations.", color: "text-red-700", bg: "bg-red-500/10" },
  { icon: "BarChart3", title: "White-Label Reports", desc: "Monthly ranking and traffic reports with your logo, colors, and branding.", color: "text-cyan-700", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Will my clients know you're doing the work?", a: "Never. All reports, dashboards, and communications carry your branding. We operate under a strict NDA and act as a silent extension of your team." },
  { q: "How quickly can you start on new clients?", a: "Most white-label SEO clients are onboarded within 48–72 hours. We start with an audit and keyword research, then move into execution." },
  { q: "What's the minimum commitment?", a: "There's no minimum. Start with one client and scale as your book of business grows. Our wholesale pricing means healthy margins from day one." },
  { q: "Do you guarantee rankings?", a: "No ethical agency can guarantee specific rankings, but our white-hat process has delivered first-page results for 90%+ of client keywords we manage." },
];

export default function Page() {
  return (
    <>
      <WhiteLabelPage badge="White Label SEO Services" title="White Label" highlight="SEO Services"
        description="Offer enterprise-grade SEO to your clients without hiring a single in-house specialist. We do the work, you take the credit."
        intro="Your clients demand SEO results, but building an in-house team is expensive and slow. Our white-label SEO service gives you a full team of strategists, content writers, and link builders — all working invisibly under your brand. You sell and manage the relationship; we deliver the rankings."
        features={features} faqs={faqs} />
      <RelatedReading slug="white-label-seo-for-agencies" title="White Label SEO for Agencies: When It Makes Sense" />
    </>
  );
}
