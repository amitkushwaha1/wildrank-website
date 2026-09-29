import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Miami, FL. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/miami-seo-company" },
};

export default function Page() {
  return <LocationPage city="Miami" state="FL" />;
}
