import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Firm | Toronto | Wildrank Technologies — Rank on Google & AI Search",
  description: "Wildrank is an SEO firm helping Toronto startups and local brands win rankings on Google, Perplexity and Gemini. Free audit + AI search visibility strategy. Book a consultation.",
  alternates: { canonical: "/toronto-seo-company" },
};


export default function Page() {
  return <LocationPage city="Toronto" state="ON" />;
}
