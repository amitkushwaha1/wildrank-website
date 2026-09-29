import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Seattle, WA. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/seattle-seo-company" },
};

export default function Page() {
  return <LocationPage city="Seattle" state="WA" />;
}
