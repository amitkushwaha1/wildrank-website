import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indianapolis SEO Company | Wildrank Technologies",
  description:
    "Indianapolis, IN: Wildrank is an SEO company for Indianapolis businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/indianapolis-seo-company" },
};


export default function Page() {
  return <LocationPage city="Indianapolis" state="IN" />;
}
