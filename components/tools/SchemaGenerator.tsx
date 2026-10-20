"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Code2 } from "lucide-react";

type SchemaType =
  | "Organization"
  | "LocalBusiness"
  | "Service"
  | "FAQPage"
  | "Article"
  | "Product"
  | "Event"
  | "BreadcrumbList";

const TYPES: { value: SchemaType; label: string; hint: string }[] = [
  { value: "Organization", label: "Organization", hint: "Company entity facts: name, logo, address, sameAs." },
  { value: "LocalBusiness", label: "LocalBusiness", hint: "A business with a physical location or service area." },
  { value: "Service", label: "Service", hint: "A service you offer, tied to your organization." },
  { value: "FAQPage", label: "FAQPage", hint: "Questions and answers on the page." },
  { value: "Article", label: "Article", hint: "Blog post or guide with author and dates." },
  { value: "Product", label: "Product", hint: "A product with price and availability." },
  { value: "Event", label: "Event", hint: "An event with date, location and offers." },
  { value: "BreadcrumbList", label: "BreadcrumbList", hint: "Navigation trail for the page." },
];

type Field = { key: string; label: string; placeholder?: string; type?: "text" | "url" | "textarea" | "number" };

const FIELDS: Record<SchemaType, Field[]> = {
  Organization: [
    { key: "name", label: "Name", placeholder: "Wildrank Technologies", type: "text" },
    { key: "url", label: "Website URL", placeholder: "https://example.com", type: "url" },
    { key: "logo", label: "Logo URL (square, ≥112px)", placeholder: "https://example.com/logo.png", type: "url" },
    { key: "description", label: "Description", placeholder: "What the company does", type: "textarea" },
    { key: "telephone", label: "Phone", placeholder: "+1-555-000-0000", type: "text" },
    { key: "email", label: "Email", placeholder: "info@example.com", type: "text" },
    { key: "street", label: "Street address", placeholder: "30 N Gould St", type: "text" },
    { key: "city", label: "City", placeholder: "Sheridan", type: "text" },
    { key: "region", label: "State / region", placeholder: "WY", type: "text" },
    { key: "postal", label: "Postal code", placeholder: "82801", type: "text" },
    { key: "country", label: "Country code", placeholder: "US", type: "text" },
    { key: "founded", label: "Founded (year)", placeholder: "2006", type: "text" },
  ],
  LocalBusiness: [
    { key: "name", label: "Name", placeholder: "Wildrank Technologies", type: "text" },
    { key: "url", label: "Website URL", placeholder: "https://example.com", type: "url" },
    { key: "telephone", label: "Phone", placeholder: "+1-555-000-0000", type: "text" },
    { key: "street", label: "Street address", placeholder: "30 N Gould St", type: "text" },
    { key: "city", label: "City", placeholder: "Sheridan", type: "text" },
    { key: "region", label: "State / region", placeholder: "WY", type: "text" },
    { key: "postal", label: "Postal code", placeholder: "82801", type: "text" },
    { key: "country", label: "Country code", placeholder: "US", type: "text" },
    { key: "hours", label: "Opening hours (e.g. Mo-Fr 09:00-18:00)", placeholder: "Mo-Fr 09:00-18:00", type: "text" },
  ],
  Service: [
    { key: "name", label: "Service name", placeholder: "Search Engine Optimization", type: "text" },
    { key: "provider", label: "Provider name", placeholder: "Wildrank Technologies", type: "text" },
    { key: "url", label: "Service page URL", placeholder: "https://example.com/seo-services", type: "url" },
    { key: "description", label: "Description", placeholder: "What the service does", type: "textarea" },
    { key: "serviceType", label: "Service type (comma separated)", placeholder: "SEO, Technical SEO", type: "text" },
    { key: "areaServed", label: "Area served", placeholder: "United States", type: "text" },
  ],
  FAQPage: [
    { key: "q1", label: "Question 1", placeholder: "What does this service cost?", type: "text" },
    { key: "a1", label: "Answer 1", placeholder: "Answer…", type: "textarea" },
    { key: "q2", label: "Question 2 (optional)", placeholder: "", type: "text" },
    { key: "a2", label: "Answer 2 (optional)", placeholder: "", type: "textarea" },
    { key: "q3", label: "Question 3 (optional)", placeholder: "", type: "text" },
    { key: "a3", label: "Answer 3 (optional)", placeholder: "", type: "textarea" },
  ],
  Article: [
    { key: "headline", label: "Headline", placeholder: "Article title", type: "text" },
    { key: "url", label: "Article URL", placeholder: "https://example.com/blog/post", type: "url" },
    { key: "description", label: "Description", placeholder: "Short summary", type: "textarea" },
    { key: "datePublished", label: "Published (YYYY-MM-DD)", placeholder: "2026-10-20", type: "text" },
    { key: "author", label: "Author / publisher", placeholder: "Wildrank Technologies", type: "text" },
  ],
  Product: [
    { key: "name", label: "Product name", placeholder: "SEO Audit", type: "text" },
    { key: "description", label: "Description", placeholder: "What it is", type: "textarea" },
    { key: "price", label: "Price", placeholder: "499", type: "number" },
    { key: "currency", label: "Currency", placeholder: "USD", type: "text" },
    { key: "availability", label: "Availability", placeholder: "InStock", type: "text" },
    { key: "url", label: "Product URL", placeholder: "https://example.com/product", type: "url" },
  ],
  Event: [
    { key: "name", label: "Event name", placeholder: "Webinar: AI Search Visibility", type: "text" },
    { key: "startDate", label: "Start date/time", placeholder: "2026-11-15T15:00:00", type: "text" },
    { key: "endDate", label: "End date/time (optional)", placeholder: "2026-11-15T16:00:00", type: "text" },
    { key: "location", label: "Location (or 'Online')", placeholder: "Online", type: "text" },
    { key: "url", label: "Event URL", placeholder: "https://example.com/event", type: "url" },
    { key: "description", label: "Description", placeholder: "What the event covers", type: "textarea" },
  ],
  BreadcrumbList: [
    { key: "b1", label: "Crumb 1 name", placeholder: "Home", type: "text" },
    { key: "u1", label: "Crumb 1 URL", placeholder: "https://example.com/", type: "url" },
    { key: "b2", label: "Crumb 2 name", placeholder: "Services", type: "text" },
    { key: "u2", label: "Crumb 2 URL", placeholder: "https://example.com/services", type: "url" },
    { key: "b3", label: "Crumb 3 name", placeholder: "SEO", type: "text" },
    { key: "u3", label: "Crumb 3 URL", placeholder: "https://example.com/seo", type: "url" },
  ],
};

function val(v: string | undefined) {
  return (v ?? "").trim();
}

function build(type: SchemaType, d: Record<string, string>): object | null {
  switch (type) {
    case "Organization": {
      const o: any = { "@context": "https://schema.org", "@type": "Organization" };
      if (val(d.name)) o.name = val(d.name);
      if (val(d.url)) o.url = val(d.url);
      if (val(d.logo)) o.logo = { "@type": "ImageObject", url: val(d.logo) };
      if (val(d.description)) o.description = val(d.description);
      if (val(d.telephone)) o.telephone = val(d.telephone);
      if (val(d.email)) o.email = val(d.email);
      if (val(d.founded)) o.foundingDate = val(d.founded);
      if (val(d.street) || val(d.city) || val(d.region) || val(d.postal) || val(d.country)) {
        o.address = {
          "@type": "PostalAddress",
          ...(val(d.street) && { streetAddress: val(d.street) }),
          ...(val(d.city) && { addressLocality: val(d.city) }),
          ...(val(d.region) && { addressRegion: val(d.region) }),
          ...(val(d.postal) && { postalCode: val(d.postal) }),
          ...(val(d.country) && { addressCountry: val(d.country) }),
        };
      }
      return o;
    }
    case "LocalBusiness": {
      const o: any = { "@context": "https://schema.org", "@type": "LocalBusiness" };
      if (val(d.name)) o.name = val(d.name);
      if (val(d.url)) o.url = val(d.url);
      if (val(d.telephone)) o.telephone = val(d.telephone);
      if (val(d.street) || val(d.city) || val(d.region) || val(d.postal) || val(d.country)) {
        o.address = {
          "@type": "PostalAddress",
          ...(val(d.street) && { streetAddress: val(d.street) }),
          ...(val(d.city) && { addressLocality: val(d.city) }),
          ...(val(d.region) && { addressRegion: val(d.region) }),
          ...(val(d.postal) && { postalCode: val(d.postal) }),
          ...(val(d.country) && { addressCountry: val(d.country) }),
        };
      }
      if (val(d.hours)) o.openingHours = val(d.hours);
      return o;
    }
    case "Service": {
      const o: any = { "@context": "https://schema.org", "@type": "Service" };
      if (val(d.name)) o.name = val(d.name);
      if (val(d.description)) o.description = val(d.description);
      if (val(d.url)) o.url = val(d.url);
      if (val(d.areaServed)) o.areaServed = val(d.areaServed);
      if (val(d.serviceType)) o.serviceType = val(d.serviceType).split(",").map((s) => s.trim()).filter(Boolean);
      if (val(d.provider)) o.provider = { "@type": "Organization", name: val(d.provider) };
      return o;
    }
    case "FAQPage": {
      const items = [];
      for (let i = 1; i <= 3; i++) {
        const q = val(d[`q${i}`]);
        const a = val(d[`a${i}`]);
        if (q && a) items.push({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } });
      }
      if (items.length === 0) return null;
      return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items };
    }
    case "Article": {
      const o: any = { "@context": "https://schema.org", "@type": "Article" };
      if (val(d.headline)) o.headline = val(d.headline);
      if (val(d.description)) o.description = val(d.description);
      if (val(d.url)) o.url = val(d.url);
      if (val(d.datePublished)) o.datePublished = val(d.datePublished);
      if (val(d.author)) o.author = { "@type": "Organization", name: val(d.author) };
      o.publisher = { "@type": "Organization", name: val(d.author) || "Wildrank Technologies" };
      return o;
    }
    case "Product": {
      const o: any = { "@context": "https://schema.org", "@type": "Product" };
      if (val(d.name)) o.name = val(d.name);
      if (val(d.description)) o.description = val(d.description);
      if (val(d.url)) o.url = val(d.url);
      const offer: any = { "@type": "Offer" };
      if (val(d.price)) offer.price = val(d.price);
      if (val(d.currency)) offer.priceCurrency = val(d.currency);
      if (val(d.availability)) offer.availability = `https://schema.org/${val(d.availability)}`;
      o.offers = offer;
      return o;
    }
    case "Event": {
      const o: any = { "@context": "https://schema.org", "@type": "Event" };
      if (val(d.name)) o.name = val(d.name);
      if (val(d.description)) o.description = val(d.description);
      if (val(d.startDate)) o.startDate = val(d.startDate);
      if (val(d.endDate)) o.endDate = val(d.endDate);
      if (val(d.url)) o.url = val(d.url);
      if (val(d.location)) o.location = { "@type": "Place", name: val(d.location) };
      return o;
    }
    case "BreadcrumbList": {
      const items = [];
      for (let i = 1; i <= 3; i++) {
        const name = val(d[`b${i}`]);
        const url = val(d[`u${i}`]);
        if (name) items.push({ "@type": "ListItem", position: i, name, ...(url && { item: url }) });
      }
      if (items.length === 0) return null;
      return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
    }
    default:
      return null;
  }
}

export default function SchemaGenerator() {
  const [type, setType] = useState<SchemaType>("Organization");
  const [data, setData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    const r = build(type, data);
    if (!r) return "";
    return JSON.stringify(r, null, 2);
  }, [type, data]);

  const set = (key: string, v: string) => setData((prev) => ({ ...prev, [key]: v }));

  const copy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <main className="min-h-screen bg-canvas">
      <section className="relative overflow-hidden bg-band pt-32 pb-14">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-light">
            Free tool
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            JSON-LD schema markup generator
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Generate valid structured data for the pages that matter: your organization, your services,
            your FAQs, your articles. Paste the result into a{" "}
            <code className="rounded bg-canvas px-1.5 py-0.5 text-sm text-ink">&lt;script type=&quot;application/ld+json&quot;&gt;</code>{" "}
            tag. Everything runs in your browser — nothing is sent anywhere.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-ink">Schema type</label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value as SchemaType);
                  setData({});
                }}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-ink"
              >
                {TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-muted">{TYPES.find((t) => t.value === type)?.hint}</p>

              <div className="mt-6 space-y-4">
                {FIELDS[type].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">{f.label}</label>
                    {f.type === "textarea" ? (
                      <textarea
                        value={data[f.key] ?? ""}
                        onChange={(e) => set(f.key, e.target.value)}
                        placeholder={f.placeholder}
                        rows={3}
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-ink placeholder:text-faint"
                      />
                    ) : (
                      <input
                        type={f.type === "number" ? "number" : "text"}
                        value={data[f.key] ?? ""}
                        onChange={(e) => set(f.key, e.target.value)}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-ink placeholder:text-faint"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">Output</span>
                <button
                  onClick={copy}
                  disabled={!output}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-primary/40 disabled:opacity-40"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="max-h-[32rem] overflow-auto rounded-2xl border border-border bg-ink/95 p-5 text-sm leading-relaxed text-canvas">
                <code>{output || "// Fill the fields on the left to generate JSON-LD."}</code>
              </pre>
              <p className="mt-3 text-xs text-muted">
                Validate the result in Google&apos;s Rich Results Test before publishing. Structured data
                only helps when it matches what is actually on the page.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-band p-8">
            <div className="flex items-start gap-4">
              <Code2 className="mt-1 text-primary" size={24} />
              <div>
                <h2 className="text-xl font-bold text-ink">Don&apos;t want to do this by hand?</h2>
                <p className="mt-2 text-muted">
                  Wildrank Technologies ships schema, service data and entity markup as part of every
                  technical SEO engagement. If you would rather have it done and verified,{" "}
                  <a href="/contact" className="font-semibold text-primary underline decoration-primary/30">
                    book a free audit
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
