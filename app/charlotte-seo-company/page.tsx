import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlotte SEO Company | Wildrank Technologies",
  description:
    "Charlotte, NC: Wildrank is an SEO company for Charlotte businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/charlotte-seo-company" },
};


export default function Page() {
  return <LocationPage city="Charlotte" state="NC" />;
}
