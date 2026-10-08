import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix SEO Company - Wildrank Technologies",
  description: "Phoenix SEO company for home services, real estate and local brands. Rank in Google Maps and local search to get more calls. Free audit available.",
  alternates: { canonical: "/phoenix-seo-company" },
};

export default function Page() {
  return <LocationPage city="Phoenix" state="AZ" />;
}
