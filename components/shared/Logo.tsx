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
    sm: { width: 70,  height: 26,  className: "h-4 w-auto" },
    md: { width: 100, height: 37,  className: "h-6 w-auto" },
    lg: { width: 140, height: 52,  className: "h-8 lg:h-9 w-auto" },
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
      className={`logo-3d group relative inline-block ${className}`}
      style={{ perspective: "600px" }}
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
          className={`${d.className} object-contain`}
          priority
        />
      </span>
      {/* Spherical shadow beneath the logo — radial ellipse, like a ball on a surface */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[90%] h-3 rounded-[50%] blur-md opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, transparent 70%)" }}
      />
    </span>
  );
}
