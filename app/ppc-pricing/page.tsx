import type { Metadata } from "next";
import PpcPricingClient from "./client";
import { pricingServiceSchema } from "@/lib/pricingSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "PPC Pricing - Plans For Every Budget | Wildrank Technologies",
  description: "Straightforward PPC pricing across Basic, Silver, Gold and Premium tiers. Transparent reporting on spend, conversions and ROAS.",
  alternates: { canonical: "/ppc-pricing" },
};

const schema = pricingServiceSchema({
  path: "/ppc-pricing",
  name: "PPC Management",
  serviceType: "Pay Per Click Advertising",
  lowPrice: 299,
  highPrice: 799,
  offerCount: 4,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PpcPricingClient />
    </>
  );
}
