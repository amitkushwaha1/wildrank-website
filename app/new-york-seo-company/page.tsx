import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in New York, NY. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/new-york-seo-company" },
};

export default function Page() {
  return <LocationPage city="New York" state="NY" />;
}
