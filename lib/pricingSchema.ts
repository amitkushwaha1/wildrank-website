import { SITE_URL } from "@/lib/site";

/**
 * Machine-readable pricing for the five pricing pages.
 *
 * Every one of these pages sells tiers, not a single price — which is exactly
 * what the old metadata got wrong. /seo-pricing advertised "Plans from $499/mo"
 * in its title while the page renders four plans, $499 through $1,799. The same
 * mistake in structured data would be worse: an assistant quoting a single
 * number is quoting the cheapest plan as if it were the price.
 *
 * AggregateOffer is the node that says "a range, this many offers, here is where
 * they are", so a search engine or an AI answer engine reads the real shape of
 * the pricing rather than inferring it from prose.
 */
export function pricingServiceSchema(opts: {
  /** Canonical path of the pricing page, e.g. "/seo-pricing". */
  path: string;
  /** Name of the service the plans belong to. */
  name: string;
  serviceType: string;
  lowPrice: number;
  highPrice: number;
  offerCount: number;
}) {
  const url = `${SITE_URL}${opts.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: opts.name,
        serviceType: opts.serviceType,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        offers: {
          "@type": "AggregateOffer",
          "@id": `${url}/#offers`,
          priceCurrency: "USD",
          lowPrice: String(opts.lowPrice),
          highPrice: String(opts.highPrice),
          offerCount: String(opts.offerCount),
          url,
        },
      },
    ],
  };
}
