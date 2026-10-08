import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston SEO Company - Wildrank Technologies",
  description: "Boston SEO company with 17+ years of experience. Boost rankings across Google, Gemini and Perplexity for healthcare, education and B2B brands.",
  alternates: { canonical: "/boston-seo-company" },
};

export default function Page() {
  return <LocationPage city="Boston" state="MA" />;
}
