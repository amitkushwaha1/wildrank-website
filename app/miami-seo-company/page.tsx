import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami SEO Company | Wildrank Technologies",
  description:
    "Miami, FL: Wildrank is an SEO company for Miami businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/miami-seo-company" },
};


export default function Page() {
  return <LocationPage city="Miami" state="FL" />;
}
