import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas SEO Company - Wildrank Technologies",
  description: "Turn searches into customers with a Dallas SEO company that blends content, technical fixes and GEO. Talk to Wildrank's Google Partner team.",
  alternates: { canonical: "/dallas-seo-company" },
};

export default function Page() {
  return <LocationPage city="Dallas" state="TX" />;
}
