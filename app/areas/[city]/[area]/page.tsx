import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityArea, getCityAreas, getAllCitySlugs, getAllAreaSlugs } from "@/data/cityAreas";
import CTA from "@/components/home/CTA";

interface Props {
  params: { city: string; area: string };
}

export function generateStaticParams() {
  const params: { city: string; area: string }[] = [];
  for (const city of getAllCitySlugs()) {
    for (const area of getAllAreaSlugs(city)) {
      params.push({ city, area });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getCityArea(params.city, params.area);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/areas/${area.citySlug}/${area.areaSlug}` },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getCityArea(params.city, params.area);
  if (!area) notFound();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://wildranktechnologies.com/" },
      { "@type": "ListItem", position: 2, name: area.cityName, item: `https://wildranktechnologies.com/areas/${area.citySlug}` },
      { "@type": "ListItem", position: 3, name: area.areaName, item: `https://wildranktechnologies.com/areas/${area.citySlug}/${area.areaSlug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://wildranktechnologies.com/areas/${area.citySlug}/${area.areaSlug}/#service`,
    name: area.h1,
    serviceType: "Search Engine Optimization",
    provider: { "@id": "https://wildranktechnologies.com/#organization" },
    areaServed: { "@type": "City", name: area.areaName },
    url: `https://wildranktechnologies.com/areas/${area.citySlug}/${area.areaSlug}`,
    description: area.intro,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-muted mb-6">
            <a href="/" className="hover:text-ink">Home</a>
            <span className="mx-2">/</span>
            <a href={`/areas/${area.citySlug}`} className="hover:text-ink">{area.cityName}</a>
            <span className="mx-2">/</span>
            <span className="text-ink">{area.areaName}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink mb-6">
            {area.h1}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            {area.intro}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">About {area.areaName}</h2>
                <p className="text-muted leading-relaxed">
                  {area.areaName} is a key area in {area.cityName}{area.borough ? `, located in ${area.borough}` : ""}.
                  Businesses in {area.areaName} face unique search challenges and opportunities.
                  Wildrank Technologies builds {area.areaName}-specific SEO campaigns that target the keywords your customers actually search.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">Industries We Serve in {area.areaName}</h2>
                <div className="flex flex-wrap gap-2">
                  {area.industries.map((ind) => (
                    <span key={ind} className="px-3 py-1 rounded-full bg-tint/5 border border-hairline/10 text-sm text-muted">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">Local Landmarks &amp; Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {area.landmarks.map((lm) => (
                    <span key={lm} className="px-3 py-1 rounded-full bg-tint/5 border border-hairline/10 text-sm text-muted">
                      {lm}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">Transit &amp; Accessibility</h2>
                <p className="text-muted leading-relaxed">{area.transit}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {area.faqs.map((faq, i) => (
                    <div key={i} className="glass-card rounded-xl border border-hairline/10 overflow-hidden">
                      <details className="group">
                        <summary className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer list-none">
                          <span className="font-semibold text-ink">{faq.q}</span>
                          <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-6 pb-5">
                          <p className="text-muted leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl border border-hairline/10 p-6">
                <h3 className="text-lg font-bold text-ink mb-4">Area Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted">City:</span>
                    <span className="text-ink ml-2">{area.cityName}</span>
                  </div>
                  {area.borough && (
                    <div>
                      <span className="text-muted">Borough/Area:</span>
                      <span className="text-ink ml-2">{area.borough}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-muted">Primary Keyword:</span>
                    <span className="text-ink ml-2">{area.primaryKeyword}</span>
                  </div>
                  <div>
                    <span className="text-muted">Est. Search Volume:</span>
                    <span className="text-ink ml-2">{area.searchVolume}</span>
                  </div>
                  <div>
                    <span className="text-muted">ZIP Codes:</span>
                    <span className="text-ink ml-2">{area.zipCodes.slice(0, 5).join(", ")}{area.zipCodes.length > 5 ? "..." : ""}</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl border border-hairline/10 p-6">
                <h3 className="text-lg font-bold text-ink mb-4">Get Started</h3>
                <p className="text-sm text-muted mb-4">
                  Ready to rank in {area.areaName}? Get a free SEO audit.
                </p>
                <a
                  href="/contact"
                  className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
