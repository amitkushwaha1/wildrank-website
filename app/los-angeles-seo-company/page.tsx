import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles SEO Company | Wildrank Technologies",
  description:
    "Los Angeles CA: Wildrank is an SEO company for Los Angeles businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/los-angeles-seo-company" },
};


export default function Page() {
  return <LocationPage city="Los Angeles" state="CA" />;
}
