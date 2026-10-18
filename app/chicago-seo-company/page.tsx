import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago SEO Company | AI Search | Wildrank Technologies",
  description: "SEO company in Chicago, IL — technical SEO, local search and AI search visibility (GEO/AEO) for Chicago businesses. Get a free audit.",
  alternates: { canonical: "/chicago-seo-company" },
};


export default function Page() {
  return <LocationPage city="Chicago" state="IL" />;
}
