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
 * Only declare a sameAs profile once it resolves. As of 2026-10-14 the
 * LinkedIn company page and GitHub org both returned HTTP 404, so neither
 * is listed — declaring a non-existent profile is structured-data spam.
 */
export const SOCIAL_PROFILES: string[] = [];