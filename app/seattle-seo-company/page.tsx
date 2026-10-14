import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Firm | Seattle | Wildrank Technologies — Rank on Google & AI Search",
  description: "Wildrank is an SEO firm helping Seattle startups and local brands win rankings on Google, Perplexity and Gemini. Free audit + AI search visibility strategy. Book a consultation.",
  alternates: { canonical: "/seattle-seo-company" },
};


export default function Page() {
  return <LocationPage city="Seattle" state="WA" />;
}
