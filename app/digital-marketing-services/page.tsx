import type { Metadata } from "next";
import DigitalMarketingServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Digital Marketing Services | Wildrank Technologies",
  description: "Paid and organic digital marketing managed as one system. Campaigns, content and analytics aligned to revenue, not vanity metrics.",
  alternates: { canonical: "/digital-marketing-services" },
};

export default function Page() {
  return <DigitalMarketingServicesClient />;
}
