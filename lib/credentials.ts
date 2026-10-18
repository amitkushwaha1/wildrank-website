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
 *  2. The note describes the programme, not our result in it. "Google's partner
 *     programme for agencies that manage Google Ads and Analytics accounts" can
 *     be checked against Google's own page; "industry-leading Google expertise"
 *     cannot be checked against anything.
 *  3. The *issuer's* logo may appear; the *programme's badge artwork* may not.
 *     The distinction matters: putting Google's mark beside the words "Google
 *     Partner" identifies who issues the credential, which is ordinary
 *     nominative use, while the official "Google Partner" badge is licensed
 *     artwork with its own usage terms. So the tiles carry company marks, and
 *     the day a partner badge arrives it replaces one — it does not sit beside
 *     it. Where no issuer mark could be sourced the tile keeps our own icon
 *     rather than a hand-drawn imitation of somebody else's logo.
 *
 * The file is split deliberately. `confirmedCredentials` is what has been
 * supplied by the owner. `provisionalCredentials` is a layout set borrowed from
 * the pattern comparable agencies publish — it exists so the section can be
 * reviewed at its real size (nine tiles, not three) while the actual list is
 * being gathered, and it renders with a dotted border and a "provisional" tag
 * so the section cannot be mistaken for finished while it holds claims nobody
 * has confirmed.
 *
 * TO FINISH THIS SECTION: delete `provisionalCredentials` and its spread, then
 * add the real entries to `confirmedCredentials`. Nothing else needs touching.
 *
 * Also outstanding on the confirmed three: "ISO 9001:2008" as it previously
 * read on the homepage is a withdrawn edition (replaced by ISO 9001:2015), so
 * the year was dropped rather than guessed. Confirm the standard and the
 * certificate number and it can go back in.
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
  /** True while the entry is a layout placeholder rather than a held credential. */
  provisional?: boolean;
}

export const confirmedCredentials: Credential[] = [
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
  },
  {
    name: "ISO 9001",
    note: "The international standard for quality management systems.",
    icon: ShieldCheck,
    logo: "/awards/iso.png",
  },
];

/**
 * Layout placeholders. Not held, not verified, not to be published. They are
 * the set the agencies this site is benchmarked against display — Google and
 * Meta partner status, the three agency directories, and the tool
 * certifications — so the grid can be judged at nine tiles.
 */
const provisionalCredentials: Credential[] = [
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
    name: "Google Analytics Certified",
    note: "Certification in GA4 setup, measurement and reporting.",
    icon: LineChart,
    logo: "/awards/badge-Facebook.png",
  },
];

export const credentials: Credential[] = [
  ...confirmedCredentials,
  ...provisionalCredentials.map((c) => ({ ...c, provisional: true })),
];
