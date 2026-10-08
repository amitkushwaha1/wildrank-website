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

      // ── Misc legacy ──
      { source: "/case-studies", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
