import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Columbus SEO Company - Wildrank Technologies",
  description: "Wildrank helps Columbus retail, healthcare and service businesses rank in local search and map results. Start with a free website SEO audit.",
  alternates: { canonical: "/columbus-seo-company" },
};

export default function Page() {
  return <LocationPage city="Columbus" state="OH" />;
}
