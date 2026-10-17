import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Diego SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in San Diego, CA — technical SEO, local search and AI search visibility (GEO/AEO) for San Diego businesses. Get a free audit.",
  alternates: { canonical: "/san-diego-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Diego" state="CA" />;
}
