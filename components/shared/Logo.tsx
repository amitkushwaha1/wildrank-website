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
    sm: { width: 130,  height: 48, className: "h-8 w-auto" },
    md: { width: 180,  height: 66, className: "h-11 w-auto" },
    lg: { width: 229,  height: 84, className: "h-11 lg:h-14 w-auto" },
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
        className="logo-3d-inner relative inline-block transition-transform duration-500 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={ASSETS[on]}
          alt="Wildrank Technologies"
          width={d.width}
          height={d.height}
          className={`${d.className} object-contain drop-shadow-[0_8px_16px_rgba(207,59,15,0.35)] transition-all duration-500 group-hover:drop-shadow-[0_18px_32px_rgba(207,59,15,0.55)]`}
          priority
        />
      </span>
    </span>
  );
}
