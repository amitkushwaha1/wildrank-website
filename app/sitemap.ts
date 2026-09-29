import type { MetadataRoute } from "next";

const BASE_URL = "https://www.wildrank.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    // Services
    "/search-engine-optimization-services",
    "/digital-marketing-services",
    "/social-media-marketing-services",
    "/mobile-marketing-services",
    "/local-seo-services",
    "/email-marketing-services",
    "/content-marketing-services",
    "/ppc-services",
    // White Label
    "/white-label-social-media",
    "/white-label-digital-marketing",
    "/white-label-ai-services",
    "/white-label-seo-services",
    "/white-label-ppc-services",
    "/white-label-website-development",
    "/white-label-virtual-assistant",
    "/white-label-link-building",
    "/white-label-guest-post-services",
    "/hire-seo-expert",
    "/hire-ppc-expert",
    // Pricing
    "/seo-pricing",
    "/ppc-pricing",
    "/social-media-pricing",
    "/web-development-pricing",
    "/mobile-app-pricing",
    "/white-label-pricing",
    // Company
    "/about",
    "/our-team",
    "/careers",
    "/contact",
    // Other
    "/ai-marketing",
    "/blog",
    "/resources",
    // Location Pages
    "/austin-seo-company",
    "/boston-seo-company",
    "/charlotte-seo-company",
    "/chicago-seo-company",
    "/columbus-seo-company",
    "/dallas-seo-company",
    "/denver-seo-company",
    "/houston-seo-company",
    "/indianapolis-seo-company",
    "/jacksonville-seo-company",
    "/los-angeles-seo-company",
    "/miami-seo-company",
    "/new-york-seo-company",
    "/philadelphia-seo-company",
    "/phoenix-seo-company",
    "/san-antonio-seo-company",
    "/san-diego-seo-company",
    "/san-francisco-seo-company",
    "/seattle-seo-company",
    "/toronto-seo-company",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("pricing") ? 0.8 : 0.7,
  }));
}
