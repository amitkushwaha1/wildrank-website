import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Firm | New York | Wildrank Technologies — Rank on Google & AI Search",
  description: "Wildrank is an SEO firm helping New York startups and local brands win rankings on Google, Perplexity and Gemini. Free audit + AI search visibility strategy. Book a consultation.",
  alternates: { canonical: "/new-york-seo-company" },
};


export default function Page() {
  return <LocationPage city="New York" state="NY" />;
}
