"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const dimensions = {
    sm: { width: 130, height: 48, className: "h-8 w-auto" },
    md: { width: 163, height: 60, className: "h-10 w-auto" },
    lg: { width: 220, height: 80, className: "h-14 w-auto" },
  };

  const d = dimensions[size];

  return (
    <Image
      src="/logo.png"
      alt="Wildrank Technologies"
      width={d.width}
      height={d.height}
      className={`${d.className} object-contain ${className}`}
      priority
    />
  );
}
