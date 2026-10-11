import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle SEO Company - Wildrank Technologies",
  description: "Seattle SEO company helping tech, ecommerce and B2B companies grow organic revenue and AI search visibility. Request your free SEO audit.",
  alternates: { canonical: "/seattle-seo-company" },
};

export default function Page() {
  return <LocationPage city="Seattle" state="WA" />;
}
