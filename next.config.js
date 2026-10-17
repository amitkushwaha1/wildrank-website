/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
    unoptimized: true,
  },
  async redirects() {
    return [
      // ── Services: old /services/* → new root URLs ──
      { source: "/services/digital-marketing", destination: "/digital-marketing-services", permanent: true },
      { source: "/services/digital-marketing-services", destination: "/digital-marketing-services", permanent: true },
      { source: "/services/social-media-marketing", destination: "/social-media-marketing-services", permanent: true },
      { source: "/services/mobile-marketing", destination: "/mobile-marketing-services", permanent: true },
      { source: "/services/local-seo", destination: "/local-seo-services", permanent: true },
      { source: "/services/email-marketing", destination: "/email-marketing-services", permanent: true },
      { source: "/services/content-marketing", destination: "/content-marketing-services", permanent: true },
      { source: "/seo-services", destination: "/search-engine-optimization-services", permanent: true },
      { source: "/search-engine-optimization", destination: "/search-engine-optimization-services", permanent: true },

      // ── Solutions: old /solutions/* → new URLs ──
      { source: "/solutions/seo", destination: "/search-engine-optimization-services", permanent: true },
      { source: "/solutions/ppc", destination: "/ppc-services", permanent: true },
      { source: "/solutions/social-media", destination: "/social-media-marketing-services", permanent: true },
      { source: "/solutions/web-development", destination: "/web-development-pricing", permanent: true },
      { source: "/solutions/mobile-app", destination: "/mobile-app-pricing", permanent: true },
      { source: "/solutions/white-label", destination: "/white-label-seo-services", permanent: true },

      // ── Company: old /company/* → flat URLs ──
      { source: "/company/about", destination: "/about", permanent: true },
      { source: "/company/team", destination: "/our-team", permanent: true },
      { source: "/company/careers", destination: "/about", permanent: true },
      // /careers removed — keep old links + Google index alive
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/company/contact", destination: "/contact", permanent: true },

      // ── Pricing: old /pricing/* → flat URLs ──
      { source: "/pricing/seo", destination: "/seo-pricing", permanent: true },
      { source: "/pricing/ppc", destination: "/ppc-pricing", permanent: true },
      { source: "/pricing/social-media", destination: "/social-media-pricing", permanent: true },
      { source: "/pricing/web-development", destination: "/web-development-pricing", permanent: true },
      { source: "/pricing/mobile-app", destination: "/mobile-app-pricing", permanent: true },
      { source: "/pricing/white-label", destination: "/white-label-pricing", permanent: true },

      // ── White Label: old /white-label/* → flat URLs ──
      { source: "/white-label/social-media", destination: "/white-label-social-media", permanent: true },
      { source: "/white-label/digital-marketing", destination: "/white-label-digital-marketing", permanent: true },
      { source: "/white-label/ai-services", destination: "/white-label-ai-services", permanent: true },
      { source: "/white-label/seo", destination: "/white-label-seo-services", permanent: true },
      { source: "/white-label/seo-services", destination: "/white-label-seo-services", permanent: true },
      { source: "/white-label/ppc", destination: "/white-label-ppc-services", permanent: true },
      { source: "/white-label/ppc-services", destination: "/white-label-ppc-services", permanent: true },
      { source: "/white-label/website-development", destination: "/white-label-website-development", permanent: true },
      { source: "/white-label/virtual-assistant", destination: "/white-label-virtual-assistant", permanent: true },
      { source: "/white-label/link-building", destination: "/white-label-link-building", permanent: true },
      { source: "/white-label/guest-post", destination: "/white-label-guest-post-services", permanent: true },
      { source: "/white-label/guest-post-services", destination: "/white-label-guest-post-services", permanent: true },
      { source: "/white-label/hire-seo-expert", destination: "/hire-seo-expert", permanent: true },
      { source: "/white-label/hire-ppc-expert", destination: "/hire-ppc-expert", permanent: true },

      // ── Legacy WordPress URLs that STILL earn impressions ──
      // Source: Search Console, 2026-01-01 → 2026-10-15. Each of these was
      // returning 404 while Google kept showing it — impressions and position
      // recorded beside each. A 404 sitting at position 2-5 is the cheapest win
      // on the site: Google already wants to rank the URL, it just has nowhere
      // to send the visitor. Found 2026-10-17; see
      // ~/.hermes/profiles/wildrank/workspace/seo/audit-baseline-2026-10-17.md
      // (run `wrgsc dead` to re-derive this list live from Search Console)
      //
      // Blog — the old WP blog was the best-ranking asset on the domain.
      { source: "/our-blog", destination: "/blog", permanent: true },              // 167 impr · pos 2.7 · 3 clicks
      { source: "/tag/app", destination: "/blog", permanent: true },               //   9 impr · pos 2.9
      { source: "/tag/design", destination: "/blog", permanent: true },            //   8 impr · pos 4.5
      { source: "/category/latest-news", destination: "/blog", permanent: true },  //   4 impr · pos 8.0
      // Old blog posts → hub. Real fix is to recreate the content (see baseline).
      { source: "/do-you-really-need-this-will-help-you-decide", destination: "/blog", permanent: true },      // 20 impr · pos 9.2
      { source: "/facebook-design-is-dedicated-to-whats-new-in-design", destination: "/blog", permanent: true }, // 15 impr · 1 click
      { source: "/app-promotes-sales-and-profits-in-it-solutions", destination: "/blog", permanent: true },      // 14 impr · pos 9.7
      { source: "/define-world-it-solution-technology", destination: "/blog", permanent: true },                 //  7 impr
      { source: "/including-animation-in-your-design-system", destination: "/blog", permanent: true },           //  1 impr

      // Services + pricing that changed family
      { source: "/service/seo-services", destination: "/search-engine-optimization-services", permanent: true }, // 45 impr · pos 2.6 · 2 clicks
      { source: "/speed-optimization", destination: "/search-engine-optimization-services", permanent: true },    // 23 impr · pos 1.4
      { source: "/email-marketing", destination: "/email-marketing-services", permanent: true },                 //  1 impr
      { source: "/smo-pricing", destination: "/social-media-pricing", permanent: true },                         // 90 impr · pos 13.8
      { source: "/gmb-pricing", destination: "/local-seo-services", permanent: true },                           // 141 impr
      { source: "/media-marketing", destination: "/social-media-marketing-services", permanent: true },          // 100 impr · pos 3.7
      { source: "/marketing-analysis", destination: "/digital-marketing-services", permanent: true },            // 122 impr · pos 3.1
      { source: "/project-detail", destination: "/resources", permanent: true },                                 // 107 impr · pos 4.5 · 2 clicks
      { source: "/our-projects", destination: "/resources", permanent: true },                                   // 52 impr · pos 2.6

      // Company
      { source: "/about-us", destination: "/about", permanent: true },                 // 23 impr · pos 1.4
      { source: "/team", destination: "/our-team", permanent: true },
      { source: "/team/savannah-nguyen", destination: "/our-team", permanent: true },  // 34 impr · pos 9.7
      { source: "/team/brooklyn-simmons", destination: "/our-team", permanent: true }, // 14 impr · pos 10.3

      // DELIBERATELY NOT REDIRECTED: /privacy-policy (73 impr · pos 3.6).
      // The site serves no privacy or terms page at ANY path (/,/privacy,/terms
      // all 404). There is nothing honest to point it at, and funneling a legal
      // page into a marketing page is worse than the 404. Create the real pages.

      // ── Misc legacy ──
      { source: "/case-studies", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
