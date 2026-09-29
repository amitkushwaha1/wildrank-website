import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Jacksonville, FL. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/jacksonville-seo-company" },
};

export default function Page() {
  return <LocationPage city="Jacksonville" state="FL" />;
}
