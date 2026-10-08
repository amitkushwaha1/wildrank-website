import { Linkedin, Instagram, Facebook, type LucideIcon } from "lucide-react";
import XLogo from "@/components/shared/XLogo";

/** Anything that renders an icon from a className — lucide icons or our X logo. */
type IconComponent = LucideIcon | (({ className }: { className?: string }) => JSX.Element);

/**
 * Single source of truth for the company's social profiles.
 *
 * Used by the Footer and the Contact sidebar so the URLs can never drift
 * apart between pages. Update the links here and everywhere updates.
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
    icon: Instagram,
    href: "https://www.instagram.com/wildranktechnologies/",
    label: "Instagram",
    external: true,
  },
  {
    icon: XLogo,
    href: "https://x.com/wildranktech",
    label: "X (Twitter)",
    external: true,
  },
  {
    // No Facebook URL supplied yet — placeholder, safe to leave as-is.
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
];
