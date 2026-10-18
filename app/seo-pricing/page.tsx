import type { Metadata } from "next";
import SeoPricingClient from "./client";
import { pricingServiceSchema } from "@/lib/pricingSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Pricing & Packages | Wildrank Technologies",
  description: "Wildrank Technologies SEO pricing: four plans — Basic, Silver, Gold and Premium — covering keywords, content and backlinks. GEO and AEO included in every tier.",
  alternates: { canonical: "/seo-pricing" },
};

const schema = pricingServiceSchema({
  path: "/seo-pricing",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  lowPrice: 499,
  highPrice: 1799,
  offerCount: 4,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SeoPricingClient />
    </>
  );
}
