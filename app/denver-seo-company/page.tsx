import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver SEO Company | SEO & AI Search | Wildrank Technologies",
  description: "SEO company in Denver, CO — technical SEO, local search and AI search visibility (GEO/AEO) for Denver businesses. Get a free audit.",
  alternates: { canonical: "/denver-seo-company" },
};


export default function Page() {
  return <LocationPage city="Denver" state="CO" />;
}
