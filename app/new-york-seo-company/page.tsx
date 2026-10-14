import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York SEO Company | Wildrank Technologies",
  description:
    "New York NY: Wildrank is an SEO company for New York businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/new-york-seo-company" },
};


export default function Page() {
  return <LocationPage city="New York" state="NY" />;
}
