import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Firm | San Francisco | Wildrank Technologies — Rank on Google & AI Search",
  description: "Wildrank is an SEO firm helping San Francisco startups and local brands win rankings on Google, Perplexity and Gemini. Free audit + AI search visibility strategy. Book a consultation.",
  alternates: { canonical: "/san-francisco-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Francisco" state="CA" />;
}
