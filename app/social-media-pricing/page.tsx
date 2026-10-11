import type { Metadata } from "next";
import SocialMediaPricingClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Social Media Pricing - Plans & Packages | Wildrank Technologies",
  description: "Social media management pricing with Basic, Silver, Gold and Premium options covering content, publishing and community management.",
  alternates: { canonical: "/social-media-pricing" },
};

export default function Page() {
  return <SocialMediaPricingClient />;
}
