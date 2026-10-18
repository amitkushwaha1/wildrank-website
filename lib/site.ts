/**
 * Single source of truth for brand-level contact + identity constants.
 *
 * The phone previously lived as two hardcoded copies in app/layout.tsx and
 * components/locations/LocationPage.tsx, which is how a mismatch like
 * +1-307-215-0728 vs 363-222-1815 reaches schema. Every page now imports
 * from here.
 */

export const SITE_URL = "https://wildranktechnologies.com";

/** Public contact number. Keep in E.164 so schema.org parses it cleanly. */
export const PHONE_E164 = "+1-775-471-5295";
export const PHONE_DISPLAY = "775-471-5295";

export const BRAND_NAME = "Wildrank Technologies";

/**
 * Only declare a sameAs profile once it resolves — declaring a non-existent
 * profile is structured-data spam, and sameAs is one of the signals an
 * assistant uses to decide whether two mentions are the same entity.
 *
 * Re-checked 2026-10-17 with a desktop user agent. The earlier note in this
 * file said the LinkedIn page returned 404; that was wrong, and it is the
 * clearest example of why this list was kept empty rather than guessed at. The
 * page serves its real name: "Wildrank Technologies Pvt Ltd | LinkedIn".
 *
 *   LinkedIn  200  real company title                          confirmed
 *   YouTube   200  real channel title + channel id UCK88wsOnGdC855FGuk-Nuug
 *                                                              confirmed
 *   Facebook  ---  Facebook answers every non-browser request with 400, so a
 *                  command-line check cannot confirm or deny it. Included
 *                  because the owner supplied the URL directly, which is
 *                  stronger evidence than a scrape.
 *   Instagram 200  no "page isn't available" marker. A missing profile serves
 *                  that string with a 200, so its absence is weak-positive.
 *   X         200  JavaScript shell, no negative marker either.
 *
 * All five are also linked in the footer, and a profile the site links but
 * withholds from sameAs is an inconsistency with no upside. If any of them is
 * ever found to be a squatted or dead handle, remove it from socialLinks.ts and
 * here together.
 */
export const SOCIAL_PROFILES: string[] = [
  "https://www.linkedin.com/company/wildrank-technologies-pvt-ltd",
  "https://www.youtube.com/@WildRankTechnologies",
  "https://www.instagram.com/wildranktechnologies/",
  "https://www.facebook.com/wildranktechnologies/",
  "https://x.com/wildranktech",
];