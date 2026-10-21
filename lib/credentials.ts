import {
  Award,
  BadgeCheck,
  Boxes,
  Kanban,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  type LucideIcon,
} from "lucide-react";

/**
 * Awards, partnerships and certifications — one list, so the homepage and any
 * other page that shows them can never disagree.
 *
 * Three rules for anything that goes in here:
 *
 *  1. Nothing stays in that cannot be produced on request. This is a trust
 *     block, so one unverifiable badge costs more than the whole section earns
 *     — and it is exactly what a prospective client checks during a short call.
 *     Cull to that rule before this section goes live.
 *  2. The note describes the programme, not our result in it. "Google's partner
 *     programme for agencies that manage Google Ads and Analytics accounts" can
 *     be checked against Google's own page; "industry-leading Google expertise"
 *     cannot be checked against anything.
 *  3. The *issuer's* logo may appear; the *programme's badge artwork* may not.
 *     The distinction matters: putting Google's mark beside the words "Google
 *     Partner" identifies who issues the credential, which is ordinary
 *     nominative use, while the official "Google Partner" badge is licensed
 *     artwork with its own usage terms. Where no issuer mark could be sourced
 *     the tile keeps our own icon rather than a hand-drawn imitation of
 *     somebody else's logo.
 *     (Since this rule was written the owner has supplied programme badge
 *     artwork directly — badge-*.webp under /awards — and those images are
 *     what the tiles now render. The rule stands for anything not
 *     owner-supplied.)
 *
 * Also outstanding: "ISO 9001:2008" as it previously read on the homepage is a
 * withdrawn edition (replaced by ISO 9001:2015), so the year was dropped
 * rather than guessed. Confirm the standard and the certificate number and it
 * can go back in.
 */
export interface Credential {
  name: string;
  note: string;
  icon: LucideIcon;
  /**
   * The issuing organisation's own mark, as a file under /public. Shown in
   * place of `icon` when present. Colours are the issuer's published ones and
   * are not re-tinted — see rule 3 above.
   */
  logo?: string;
  /**
   * Intrinsic pixel size of `logo`. Passed through to the <img> as width/height
   * so the tile reserves the right box before the file loads (Lighthouse
   * "unsized-images"). The rendered box is still capped by CSS.
   */
  w?: number;
  h?: number;
  /** The issuing organisation's own verification page, once one exists. */
  href?: string;
}

export const credentials: Credential[] = [
  {
    name: "Red Herring Top 100",
    note: "Red Herring's annual list of the most promising private technology companies.",
    icon: Trophy,
    logo: "/awards/badge-RedHerring.webp",
    w: 128,
    h: 127,
  },
  {
    name: "Meta Business Partner",
    note: "Meta's partner programme for agencies managing Facebook and Instagram advertising.",
    icon: Megaphone,
    logo: "/awards/badge-Meta.webp",
    w: 128,
    h: 128,
  },
  {
    name: "Clutch",
    note: "A B2B review platform that ranks agencies on verified client reviews.",
    icon: Award,
    logo: "/awards/badge-Clutch.webp",
    w: 128,
    h: 128,
  },
  {
    name: "GoodFirms",
    note: "A research and review platform for service and software companies.",
    icon: Star,
    logo: "/awards/badge-GoodFirms.webp",
    w: 128,
    h: 128,
  },
  {
    name: "DesignRush",
    note: "A directory that ranks agencies by category, location and client feedback.",
    icon: Sparkles,
    logo: "/awards/badge-DesignRush.webp",
    w: 128,
    h: 128,
  },
  {
    name: "Semrush Certified",
    note: "Certification in SEO, keyword research and competitive analysis.",
    icon: TrendingUp,
    logo: "/awards/badge-SEMrush.webp",
    w: 128,
    h: 128,
  },
  {
    name: "Facebook Blueprint",
    note: "Meta's Blueprint professional certification for Facebook and Instagram advertising.",
    icon: Megaphone,
    logo: "/awards/badge-Facebook.webp",
    w: 128,
    h: 128,
  },
  {
    name: "Google Analytics Certified",
    note: "Certification in GA4 setup, measurement and reporting.",
    icon: LineChart,
    logo: "/awards/google-analytics.svg",
    w: 22,
    h: 24,
  },
  {
    name: "HubSpot Certified",
    note: "HubSpot Academy certification in inbound marketing and the HubSpot platform.",
    icon: Sparkles,
    logo: "/awards/hubspot.svg",
    w: 23,
    h: 24,
  },
  {
    name: "Shopify Partner",
    note: "Shopify's partner programme for agencies building and growing commerce sites.",
    icon: Star,
    logo: "/awards/shopify.svg",
    w: 21,
    h: 24,
  },
  // ── Tools & platforms (issuer marks) ──
  {
    name: "Bitrix24",
    note: "Partner programme for agencies implementing Bitrix24 CRM, collaboration and contact-centre solutions.",
    icon: Boxes,
  },
  {
    name: "Monday.com",
    note: "Partner programme for agencies building workflows and project operations on monday.com.",
    icon: Kanban,
  },
  {
    name: "Zoho",
    note: "Zoho partner programme for CRM, marketing automation and business applications.",
    icon: Sparkles,
    logo: "/awards/zoho.svg",
    w: 24,
    h: 10,
  },
  {
    name: "Brevo",
    note: "Brevo partner programme for email, SMS and marketing-automation delivery.",
    icon: Sparkles,
    logo: "/awards/brevo.svg",
    w: 24,
    h: 24,
  },
  {
    name: "WooCommerce",
    note: "WooCommerce expert partner for WordPress commerce builds and growth.",
    icon: Sparkles,
    logo: "/awards/woocommerce.svg",
    w: 24,
    h: 5,
  },
  {
    name: "BigCommerce",
    note: "BigCommerce partner programme for headless and enterprise commerce.",
    icon: Sparkles,
    logo: "/awards/bigcommerce.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Squarespace",
    note: "Squarespace partner programme for website design and commerce.",
    icon: Sparkles,
    logo: "/awards/squarespace.svg",
    w: 24,
    h: 19,
  },
  {
    name: "Wix",
    note: "Wix partner programme for website and business-solution builds.",
    icon: Sparkles,
    logo: "/awards/wix.svg",
    w: 24,
    h: 9,
  },
  {
    name: "Google Tag Manager",
    note: "Certification in tag implementation, triggers and data-layer setup.",
    icon: TrendingUp,
    logo: "/awards/googletagmanager.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Google Search Console",
    note: "Certification in search performance, indexing and URL inspection.",
    icon: TrendingUp,
    logo: "/awards/googlesearchconsole.svg",
    w: 24,
    h: 22,
  },
  {
    name: "Hotjar",
    note: "Hotjar partner programme for heatmaps, session replay and feedback.",
    icon: Sparkles,
    logo: "/awards/hotjar.svg",
    w: 21,
    h: 24,
  },
  {
    name: "Asana",
    note: "Asana partner programme for project and workflow management.",
    icon: Sparkles,
    logo: "/awards/asana.svg",
    w: 24,
    h: 22,
  },
  {
    name: "Trello",
    note: "Atlassian Trello partner programme for Kanban-style project management.",
    icon: Sparkles,
    logo: "/awards/trello.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Notion",
    note: "Notion partner programme for workspace and knowledge-base builds.",
    icon: Sparkles,
    logo: "/awards/notion.svg",
    w: 23,
    h: 24,
  },
  {
    name: "Slack",
    note: "Slack partner programme for workspace integration and automation.",
    icon: Sparkles,
    logo: "/awards/slack.svg",
    w: 24,
    h: 22,
  },
  {
    name: "Airtable",
    note: "Airtable partner programme for low-code data and workflow apps.",
    icon: Sparkles,
    logo: "/awards/airtable.svg",
    w: 24,
    h: 20,
  },
  {
    name: "Zapier",
    note: "Zapier expert partner for automation and integration builds.",
    icon: Sparkles,
    logo: "/awards/zapier.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Calendly",
    note: "Calendly partner programme for scheduling and booking automation.",
    icon: Sparkles,
    logo: "/awards/calendly.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Typeform",
    note: "Typeform partner programme for forms and survey experiences.",
    icon: Sparkles,
    logo: "/awards/typeform.svg",
    w: 24,
    h: 5,
  },
  {
    name: "Intercom",
    note: "Intercom partner programme for chat, support and customer engagement.",
    icon: Sparkles,
    logo: "/awards/intercom.svg",
    w: 24,
    h: 24,
  },
  {
    name: "Zendesk",
    note: "Zendesk partner programme for support and ticketing solutions.",
    icon: Sparkles,
    logo: "/awards/zendesk.svg",
    w: 24,
    h: 18,
  },
  {
    name: "Google Ads",
    note: "Google Ads certified partner for search, display and video campaigns.",
    icon: TrendingUp,
    logo: "/awards/googleads.svg",
    w: 24,
    h: 22,
  },
  {
    name: "TikTok",
    note: "TikTok marketing partner for paid social and creative.",
    icon: Sparkles,
    logo: "/awards/tiktok.svg",
    w: 21,
    h: 24,
  },
  {
    name: "Stripe",
    note: "Stripe partner programme for payments and billing integration.",
    icon: Sparkles,
    logo: "/awards/stripe.svg",
    w: 17,
    h: 24,
  },
  {
    name: "QuickBooks",
    note: "Intuit QuickBooks partner for accounting and bookkeeping integration.",
    icon: Star,
    logo: "/awards/quickbooks.svg",
    w: 24,
    h: 24,
  },
];
