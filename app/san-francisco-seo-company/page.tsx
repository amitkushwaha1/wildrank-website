import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Francisco SEO Company | Wildrank Technologies",
  description: "SEO company in San Francisco, CA — technical SEO, local search and AI search visibility (GEO/AEO) for San Francisco businesses. Get a free audit.",
  alternates: { canonical: "/san-francisco-seo-company" },
};


export default function Page() {
  return <LocationPage city="San Francisco" state="CA" />;
}
