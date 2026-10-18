import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indianapolis SEO Company | AI Search | Wildrank Technologies",
  description: "SEO company in Indianapolis, IN — technical SEO, local search and AI search visibility (GEO/AEO) for Indianapolis businesses. Get a free audit.",
  alternates: { canonical: "/indianapolis-seo-company" },
};


export default function Page() {
  return <LocationPage city="Indianapolis" state="IN" />;
}
