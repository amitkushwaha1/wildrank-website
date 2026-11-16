"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SITE = "https://wildranktechnologies.com";

// Maps path segments to human-readable names
const SEGMENT_NAMES: Record<string, string> = {
  "search-engine-optimization-services": "SEO Services",
  "digital-marketing-services": "Digital Marketing Services",
  "social-media-marketing-services": "Social Media Marketing",
  "mobile-marketing-services": "Mobile Marketing",
  "local-seo-services": "Local SEO Services",
  "email-marketing-services": "Email Marketing",
  "content-marketing-services": "Content Marketing",
  "ppc-services": "PPC Services",
  "seo-pricing": "SEO Pricing",
  "ppc-pricing": "PPC Pricing",
  "social-media-pricing": "Social Media Pricing",
  "web-development-pricing": "Web Development Pricing",
  "mobile-app-pricing": "Mobile App Pricing",
  "about": "About",
  "contact": "Contact",
  "ai-marketing": "AI Marketing",
  "geo-aeo-services": "GEO & AEO Services",
  "hermes-ai-system": "Hermes AI System",
  "ai-receptionist": "AI Receptionist",
  "blog": "Blog",
  "faq": "FAQ",
  "tools": "Tools",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "industries": "Industries",
  "white-label-seo-services": "White Label SEO",
  "white-label-ppc-services": "White Label PPC",
  "white-label-social-media": "White Label Social Media",
  "white-label-digital-marketing": "White Label Digital Marketing",
  "white-label-ai-services": "White Label AI Services",
  "white-label-website-development": "White Label Web Development",
  "white-label-virtual-assistant": "White Label Virtual Assistant",
  "white-label-link-building": "White Label Link Building",
  "white-label-guest-post-services": "White Label Guest Posts",
  "hire-seo-expert": "Hire SEO Expert",
  "hire-ppc-expert": "Hire PPC Expert",
  "new-york-seo-company": "New York SEO",
  "los-angeles-seo-company": "Los Angeles SEO",
  "chicago-seo-company": "Chicago SEO",
  "houston-seo-company": "Houston SEO",
  "phoenix-seo-company": "Phoenix SEO",
  "philadelphia-seo-company": "Philadelphia SEO",
  "san-antonio-seo-company": "San Antonio SEO",
  "san-diego-seo-company": "San Diego SEO",
  "dallas-seo-company": "Dallas SEO",
  "austin-seo-company": "Austin SEO",
};

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname === "/") return;

    const segments = pathname.split("/").filter(Boolean);
    const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` }];

    let currentPath = "";
    segments.forEach((seg, i) => {
      currentPath += `/${seg}`;
      const name = SEGMENT_NAMES[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      items.push({
        "@type": "ListItem",
        position: i + 2,
        name,
        item: `${SITE}${currentPath}`,
      });
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "breadcrumb-jsonld";
    // Remove existing
    const existing = document.getElementById("breadcrumb-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [pathname]);

  return null;
}
