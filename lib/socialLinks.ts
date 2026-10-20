import { Linkedin, Instagram, Facebook, Youtube, type LucideIcon } from "lucide-react";
import XLogo from "@/components/shared/XLogo";

/** Anything that renders an icon from a className — lucide icons or our X logo. */
type IconComponent = LucideIcon | (({ className }: { className?: string }) => JSX.Element);

/**
 * Single source of truth for the company's social profiles.
 *
 * Used by the Footer and the Contact sidebar so the URLs can never drift apart
 * between pages, and by lib/site.ts so the same profiles reach the
 * Organization schema as `sameAs`. Update the links here and everywhere updates.
 *
 * Every entry must have a real URL. A profile with a placeholder href is worse
 * than no profile — a dead icon in the footer reads as an abandoned account,
 * and a `sameAs` that resolves nowhere is structured-data spam. The Footer
 * filters placeholders out as a backstop, which is why the entry that used to
 * sit here as href="#" never rendered; the URL has since been supplied.
 *
 * YouTube's official channel is @wildranktechnologiesofficial, created under
 * the company Workspace account on 2026-10-20. Keep this link synchronized with
 * lib/site.ts so the footer and Organization.sameAs identify the same channel.
 */
export interface SocialLink {
  icon: IconComponent;
  href: string;
  label: string;
  /** When true the link opens in a new tab. */
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/wildrank-technologies-pvt-ltd",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@wildranktechnologiesofficial",
    label: "YouTube",
    external: true,
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/wildranktechnologies/",
    label: "Instagram",
    external: true,
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/wildranktechnologies/",
    label: "Facebook",
    external: true,
  },
  {
    icon: XLogo,
    href: "https://x.com/wildranktech",
    label: "X (Twitter)",
    external: true,
  },
];
