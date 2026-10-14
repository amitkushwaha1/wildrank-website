import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Francisco SEO Company | Wildrank Technologies",
  description:
    "San Francisco CA: Wildrank is an SEO company for San Francisco businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/san-francisco-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Francisco" state="CA" />;
}
