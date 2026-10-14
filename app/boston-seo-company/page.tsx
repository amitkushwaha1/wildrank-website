import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston SEO Experts | Wildrank Technologies",
  description:
    "Boston, MA: Wildrank is a team of SEO experts for Boston businesses — technical SEO, local search and AI visibility across Google, Perplexity and Gemini. Free audit. No long-term contract.",
  alternates: { canonical: "/boston-seo-company" },
};


export default function Page() {
  return <LocationPage city="Boston" state="MA" />;
}
