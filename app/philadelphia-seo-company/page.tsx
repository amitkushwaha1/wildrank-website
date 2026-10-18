import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philadelphia SEO Company | AI Search | Wildrank Technologies",
  description: "SEO company in Philadelphia, PA — technical SEO, local search and AI search visibility (GEO/AEO) for Philadelphia businesses. Get a free audit.",
  alternates: { canonical: "/philadelphia-seo-company" },
};


export default function Page() {
  return <LocationPage city="Philadelphia" state="PA" />;
}
