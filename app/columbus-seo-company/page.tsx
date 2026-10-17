import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Columbus SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Columbus, OH — technical SEO, local search and AI search visibility (GEO/AEO) for Columbus businesses. Get a free audit.",
  alternates: { canonical: "/columbus-seo-company" },
};


export default function Page() {
  return <LocationPage city="Columbus" state="OH" />;
}
