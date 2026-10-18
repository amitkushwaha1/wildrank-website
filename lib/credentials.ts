import { BadgeCheck, ShieldCheck, Trophy, type LucideIcon } from "lucide-react";

/**
 * Awards, partnerships and certifications — one list, so the homepage and any
 * other page that shows them can never disagree.
 *
 * Before this, the claims lived as a strip of plain text pills inside the proof
 * band. They are the same claims; they now say what each one actually is.
 *
 * Three rules for this list:
 *
 *  1. Nothing goes in that cannot be produced on request. This is a trust
 *     block, so one unverifiable badge costs more than the whole section earns
 *     — and it is exactly what a prospective client checks during a short call.
 *  2. The note describes the programme, not our result in it. "Google's partner
 *     programme for agencies that manage Google Ads and Analytics accounts" can
 *     be checked against Google's own page; "industry-leading Google expertise"
 *     cannot be checked against anything.
 *  3. No third-party badge artwork. Google, Red Herring and ISO all license
 *     their marks, and shipping the artwork without the licence is a trademark
 *     problem rather than a design decision. The icon here is ours.
 *
 * OPEN ITEM — owner confirmation needed. This list is deliberately short
 * because only these three have ever been supplied:
 *
 *   - "ISO 9001:2008" as it previously read on the homepage is a withdrawn
 *     edition (it was replaced by ISO 9001:2015), so the year has been dropped
 *     rather than guessed. Confirm the standard and the certificate number and
 *     it goes back in.
 *   - Anything else: current tool certifications (Semrush, Ahrefs, GA4, Meta,
 *     HubSpot), awards, or directory placements. Every entry added here is one
 *     more line a buyer or a model can verify, which is the cheapest E-E-A-T
 *     this site can buy — and the only reason this section is three tiles
 *     instead of nine.
 */
export interface Credential {
  name: string;
  note: string;
  icon: LucideIcon;
  /** The issuing organisation's own verification page, once one exists. */
  href?: string;
}

export const credentials: Credential[] = [
  {
    name: "Google Partner",
    note: "Google's partner programme for agencies that manage Google Ads and Analytics accounts on behalf of clients.",
    icon: BadgeCheck,
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
  },
];
