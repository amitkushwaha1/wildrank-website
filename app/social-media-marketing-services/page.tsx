import type { Metadata } from "next";
import SocialMediaMarketingServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Social Media Marketing Services | Wildrank Technologies",
  description: "Social media that builds brands people remember. Strategy, content and community management across every platform that matters.",
  alternates: { canonical: "/social-media-marketing-services" },
};

export default function Page() {
  return <SocialMediaMarketingServicesClient />;
}
