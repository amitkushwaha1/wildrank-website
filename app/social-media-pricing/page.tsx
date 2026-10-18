import type { Metadata } from "next";
import SocialMediaPricingClient from "./client";
import { pricingServiceSchema } from "@/lib/pricingSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Social Media Pricing & Packages | Wildrank Technologies",
  description: "Social media management pricing with Basic, Silver, Gold and Premium options covering content, publishing and community management.",
  alternates: { canonical: "/social-media-pricing" },
};

const schema = pricingServiceSchema({
  path: "/social-media-pricing",
  name: "Social Media Management",
  serviceType: "Social Media Marketing",
  lowPrice: 899,
  highPrice: 2499,
  offerCount: 4,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SocialMediaPricingClient />
    </>
  );
}
