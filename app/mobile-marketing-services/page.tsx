import type { Metadata } from "next";
import MobileMarketingServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Mobile Marketing Services | Wildrank Technologies",
  description: "Reach customers on the device they carry. Mobile-first campaigns, app promotion and SMS that turn attention into action.",
  alternates: { canonical: "/mobile-marketing-services" },
};

export default function Page() {
  return <MobileMarketingServicesClient />;
}
