import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago SEO Company | Wildrank Technologies",
  description:
    "Chicago, IL: Wildrank is an SEO company for Chicago businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/chicago-seo-company" },
};


export default function Page() {
  return <LocationPage city="Chicago" state="IL" />;
}
