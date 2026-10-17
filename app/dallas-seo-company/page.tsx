import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas SEO Company | SEO & AI Search | WildRank",
  description: "SEO company in Dallas, TX — technical SEO, local search and AI search visibility (GEO/AEO) for Dallas businesses. Get a free audit.",
  alternates: { canonical: "/dallas-seo-company" },
};


export default function Page() {
  return <LocationPage city="Dallas" state="TX" />;
}
