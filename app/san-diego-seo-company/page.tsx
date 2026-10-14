import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Diego SEO Company | Wildrank Technologies",
  description:
    "San Diego CA: Wildrank is an SEO company for San Diego businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/san-diego-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Diego" state="CA" />;
}
