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
  /** Enable the 3D pop-out effect (perspective + hover lift). Defaults on. */
  threeD?: boolean;
}

const ASSETS = {
  light: "/logo-on-light.png",
  dark: "/logo-on-dark.png",
} as const;

export default function Logo({ size = "md", on = "light", className = "", threeD = true }: LogoProps) {
  // Sized against the surfaces that actually use them: the navbar bar is 64px
  // on mobile and 80px on desktop, so `lg` steps up rather than sitting at one
  // fixed height that is cramped on a phone and lost on a desktop.
  const dimensions = {
    sm: { width: 160,  height: 60,  className: "h-10 w-auto" },
    md: { width: 240,  height: 88,  className: "h-14 w-auto" },
    lg: { width: 320,  height: 118, className: "h-16 lg:h-20 w-auto" },
  };

  const d = dimensions[size];

  if (!threeD) {
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

  return (
    <span
      className={`logo-3d group inline-block ${className}`}
      style={{ perspective: "900px" }}
    >
      <span
        className="logo-3d-inner relative inline-block transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      >
        <Image
          src={ASSETS[on]}
          alt="Wildrank Technologies"
          width={d.width}
          height={d.height}
          className={`${d.className} object-contain drop-shadow-[0_12px_24px_rgba(207,59,15,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_28px_48px_rgba(207,59,15,0.65)]`}
          priority
        />
      </span>
    </span>
  );
}
