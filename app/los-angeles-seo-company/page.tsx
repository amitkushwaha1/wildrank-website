import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Los Angeles, CA — technical SEO, local search and AI search visibility (GEO/AEO) for Los Angeles businesses. Get a free audit.",
  alternates: { canonical: "/los-angeles-seo-company" },
};


export default function Page() {
  return <LocationPage city="Los Angeles" state="CA" />;
}
