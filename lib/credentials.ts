import {
  Award,
  BadgeCheck,
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
 *     artwork directly — badge-*.png under /awards — and those images are
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
  /** The issuing organisation's own verification page, once one exists. */
  href?: string;
}

export const credentials: Credential[] = [
  {
    name: "Google Partner",
    note: "Google's partner programme for agencies that manage Google Ads and Analytics accounts on behalf of clients.",
    icon: BadgeCheck,
    logo: "/awards/badge-Google.png",
  },
  {
    name: "Red Herring Top 100",
    note: "Red Herring's annual list of the most promising private technology companies.",
    icon: Trophy,
    logo: "/awards/badge-RedHerring.png",
  },
  {
    name: "ISO 9001",
    note: "The international standard for quality management systems.",
    icon: ShieldCheck,
    logo: "/awards/iso.png",
  },
  {
    name: "Meta Business Partner",
    note: "Meta's partner programme for agencies managing Facebook and Instagram advertising.",
    icon: Megaphone,
    logo: "/awards/badge-Meta.png",
  },
  {
    name: "Clutch",
    note: "A B2B review platform that ranks agencies on verified client reviews.",
    icon: Award,
    logo: "/awards/badge-Clutch.png",
  },
  {
    name: "GoodFirms",
    note: "A research and review platform for service and software companies.",
    icon: Star,
    logo: "/awards/badge-GoodFirms.png",
  },
  {
    name: "DesignRush",
    note: "A directory that ranks agencies by category, location and client feedback.",
    icon: Sparkles,
    logo: "/awards/badge-DesignRush.png",
  },
  {
    name: "Semrush Certified",
    note: "Certification in SEO, keyword research and competitive analysis.",
    icon: TrendingUp,
    logo: "/awards/badge-SEMrush.png",
  },
  {
    name: "Facebook Blueprint",
    note: "Meta's Blueprint professional certification for Facebook and Instagram advertising.",
    icon: Megaphone,
    logo: "/awards/badge-Facebook.png",
  },
  {
    name: "Google Analytics Certified",
    note: "Certification in GA4 setup, measurement and reporting.",
    icon: LineChart,
    logo: "/awards/google-analytics.svg",
  },
  {
    name: "HubSpot Certified",
    note: "HubSpot Academy certification in inbound marketing and the HubSpot platform.",
    icon: Sparkles,
    logo: "/awards/hubspot.svg",
  },
  {
    name: "Shopify Partner",
    note: "Shopify's partner programme for agencies building and growing commerce sites.",
    icon: Star,
    logo: "/awards/shopify.svg",
  },
];
