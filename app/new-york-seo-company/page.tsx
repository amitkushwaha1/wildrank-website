import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York SEO Company | AI Search | Wildrank Technologies",
  description: "SEO company in New York, NY — technical SEO, local search and AI search visibility (GEO/AEO) for New York businesses. Get a free audit.",
  alternates: { canonical: "/new-york-seo-company" },
};


export default function Page() {
  return <LocationPage city="New York" state="NY" />;
}
