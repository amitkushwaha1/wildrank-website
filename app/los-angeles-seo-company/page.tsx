import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Firm | Los Angeles | Wildrank Technologies — Rank on Google & AI Search",
  description: "Wildrank is an SEO firm helping Los Angeles startups and local brands win rankings on Google, Perplexity and Gemini. Free audit + AI search visibility strategy. Book a consultation.",
  alternates: { canonical: "/los-angeles-seo-company" },
};


export default function Page() {
  return <LocationPage city="Los Angeles" state="CA" />;
}
