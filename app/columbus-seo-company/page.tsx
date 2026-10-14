import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Columbus SEO Company | Wildrank Technologies",
  description:
    "Columbus, OH: Wildrank is an SEO company for Columbus businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/columbus-seo-company" },
};


export default function Page() {
  return <LocationPage city="Columbus" state="OH" />;
}
