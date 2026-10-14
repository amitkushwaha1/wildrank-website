import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin SEO Company | Wildrank Technologies",
  description:
    "Austin, TX: Wildrank is an SEO company for Austin businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/austin-seo-company" },
};


export default function Page() {
  return <LocationPage city="Austin" state="TX" />;
}
