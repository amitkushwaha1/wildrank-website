import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville SEO Company - Wildrank Technologies",
  description: "Wildrank is a Jacksonville SEO company helping healthcare, finance and local brands rank higher and earn more calls. Claim your free SEO audit.",
  alternates: { canonical: "/jacksonville-seo-company" },
};

export default function Page() {
  return <LocationPage city="Jacksonville" state="FL" />;
}
