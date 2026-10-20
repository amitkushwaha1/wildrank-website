import type { MetadataRoute } from "next";
import { INDUSTRIES, SERVICES } from "@/data/industries";
import { POSTS } from "@/data/blog";

const BASE_URL = "https://wildranktechnologies.com";

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
    // AI Call Automation (Hermes AI System)
    "/hermes-ai-system",
    "/geo-aeo-services",
    "/ai-receptionist",
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
    // Company
    "/about",
    "/contact",
    // Other
    "/ai-marketing",
    "/blog",
    // Legal — required for E-E-A-T and for advertising platform reviews. Both
    // were missing entirely, while the footer linked to them with href="#".
    "/privacy-policy",
    "/terms-of-service",
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

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("pricing") ? 0.8 : 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = [];
  for (const ind of INDUSTRIES) {
    for (const srv of SERVICES) {
      industryRoutes.push({
        url: `${BASE_URL}/industries/${ind.slug}/${srv.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Published articles. These carry their own lastModified rather than "now",
  // so a rebuild does not tell Google every post changed when none did.
  const articleRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...industryRoutes, ...articleRoutes];
}
