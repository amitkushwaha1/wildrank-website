import type { Metadata } from "next";
import SchemaGenerator from "@/components/tools/SchemaGenerator";

export const metadata: Metadata = {
  title: "Free JSON-LD Schema Markup Generator | Wildrank Technologies",
  description:
    "Generate valid JSON-LD structured data for Organization, LocalBusiness, Service, FAQPage, Article, Product, Event and BreadcrumbList. Free, client-side, no signup.",
  alternates: { canonical: "/tools/schema-generator" },
};

export default function Page() {
  return <SchemaGenerator />;
}
