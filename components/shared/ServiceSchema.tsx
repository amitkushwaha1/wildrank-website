// Service JSON-LD for a service page. The provider points at the Organization
// node in app/layout.tsx by @id, so search engines and AI answer engines read
// the service as offered by Wildrank Technologies rather than as an orphan.
// Render this from a server component (the page.tsx shell), not from a
// "use client" file.

const SITE = "https://wildranktechnologies.com";

type ServiceSchemaProps = {
  path: string;
  name: string;
  description: string;
  serviceType: string[];
  alternateName?: string[];
};

export default function ServiceSchema({
  path,
  name,
  description,
  serviceType,
  alternateName,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${path}/#service`,
    name,
    ...(alternateName ? { alternateName } : {}),
    serviceType,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    url: `${SITE}${path}`,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
