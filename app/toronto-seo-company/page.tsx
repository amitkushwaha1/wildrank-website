import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto SEO Company | Wildrank Technologies",
  description:
    "Toronto, ON: Wildrank is an SEO company for Toronto businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/toronto-seo-company" },
};


export default function Page() {
  return <LocationPage city="Toronto" state="ON" />;
}
