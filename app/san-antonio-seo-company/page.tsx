import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Antonio SEO Company | Wildrank Technologies",
  description:
    "San Antonio TX: Wildrank is an SEO company for San Antonio businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/san-antonio-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Antonio" state="TX" />;
}
