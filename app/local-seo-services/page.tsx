import type { Metadata } from "next";
import LocalSeoServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile | Wildrank Technologies",
  description: "Local SEO services that put your business in the map pack: Google Business Profile optimisation, reviews, local landing pages and citation building.",
  alternates: { canonical: "/local-seo-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/local-seo-services"
        name="Local SEO and Google Business Profile Services"
        serviceType={[
          "Local SEO",
          "Google Business Profile Optimization",
          "Local Citation Building",
        ]}
        description="Local SEO that puts your business in the map pack: Google Business Profile optimisation, reviews, local landing pages and citations."
      />
      <LocalSeoServicesClient />
    </>
  );
}
