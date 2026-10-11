import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin SEO Company - Wildrank Technologies",
  description: "Wildrank is an Austin SEO company helping startups and local brands win Google rankings and AI search visibility. Request your free audit.",
  alternates: { canonical: "/austin-seo-company" },
};

export default function Page() {
  return <LocationPage city="Austin" state="TX" />;
}
