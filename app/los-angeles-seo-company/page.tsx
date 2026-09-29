import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Los Angeles, CA. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/los-angeles-seo-company" },
};

export default function Page() {
  return <LocationPage city="Los Angeles" state="CA" />;
}
