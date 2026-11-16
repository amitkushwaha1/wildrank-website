import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityAreas, getAllCitySlugs } from "@/data/cityAreas";
import Link from "next/link";
import CTA from "@/components/home/CTA";

interface Props {
  params: { city: string };
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const areas = getCityAreas(params.city);
  if (areas.length === 0) return {};
  const cityName = areas[0].cityName;
  return {
    title: `${cityName} SEO Services — All Areas | Wildrank Technologies`,
    description: `Wildrank Technologies provides SEO services across all areas of ${cityName}. ${areas.length} neighborhood-specific SEO pages. AI-powered SEO, local SEO, PPC for ${cityName} businesses.`,
    alternates: { canonical: `/areas/${params.city}` },
  };
}

export default function CityAreasPage({ params }: Props) {
  const areas = getCityAreas(params.city);
  if (areas.length === 0) notFound();

  const cityName = areas[0].cityName;
  const tier1 = areas.filter((a) => a.tier === 1);
  const tier2 = areas.filter((a) => a.tier === 2);
  const tier3 = areas.filter((a) => a.tier === 3);
  const tier4 = areas.filter((a) => a.tier === 4);
  const tier5 = areas.filter((a) => a.tier === 5);
  const tier6 = areas.filter((a) => a.tier === 6);

  const renderTier = (title: string, items: typeof areas) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold text-ink mb-4">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((area) => (
            <Link
              key={area.areaSlug}
              href={`/areas/${area.citySlug}/${area.areaSlug}`}
              className="glass-card rounded-xl border border-hairline/10 p-4 hover:border-accent/30 transition-colors"
            >
              <div className="font-semibold text-ink">{area.areaName}</div>
              <div className="text-sm text-muted">{area.primaryKeyword}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-muted mb-6">
            <a href="/" className="hover:text-ink">Home</a>
            <span className="mx-2">/</span>
            <span className="text-ink">{cityName} Areas</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink mb-6">
            {cityName} SEO Services — All Areas
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Wildrank Technologies provides SEO services across all areas of {cityName}.
            {areas.length} neighborhood-specific SEO pages with unique content, schema markup, and local keywords.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTier("Tier 1 — Boroughs & Primary Areas", tier1)}
          {renderTier("Tier 2 — Key Neighborhoods", tier2)}
          {renderTier("Tier 3 — Secondary Neighborhoods", tier3)}
          {renderTier("Tier 4 — Tertiary Areas", tier4)}
          {renderTier("Tier 5 — Outlying Areas", tier5)}
          {renderTier("Tier 6 — Surrounding Areas", tier6)}
        </div>
      </section>

      <CTA />
    </>
  );
}
