import type { Metadata } from "next";
import ContentMarketingServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Content Marketing Services | WildRank",
  description: "Content that attracts, engages and converts. Research-led articles, landing pages and thought leadership built around what people actually search.",
  alternates: { canonical: "/content-marketing-services" },
};

export default function Page() {
  return <ContentMarketingServicesClient />;
}
