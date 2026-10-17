"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  /**
   * Which asset to use, named after the surface it sits on.
   *
   * The brand ships two lockups and they are not interchangeable:
   *   light surface → black wordmark  (public/logo-on-light.png)
   *   dark  surface → white wordmark  (public/logo-on-dark.png)
   *
   * The white-wordmark version is invisible on a light background, which is
   * why this used to look blank once the site moved to a light theme.
   */
  on?: "light" | "dark";
  className?: string;
}

const ASSETS = {
  light: "/logo-on-light.png",
  dark: "/logo-on-dark.png",
} as const;

export default function Logo({ size = "md", on = "light", className = "" }: LogoProps) {
  const dimensions = {
    sm: { width: 130, height: 48, className: "h-8 w-auto" },
    md: { width: 163, height: 60, className: "h-10 w-auto" },
    lg: { width: 220, height: 80, className: "h-14 w-auto" },
  };

  const d = dimensions[size];

  return (
    <Image
      src={ASSETS[on]}
      alt="Wildrank Technologies"
      width={d.width}
      height={d.height}
      className={`${d.className} object-contain ${className}`}
      priority
    />
  );
}
