import type { Config } from "tailwindcss";

/**
 * ── Colour system ──────────────────────────────────────────────────────────
 *
 * The brand colour comes from the logo mark: #FC4812, sampled directly out of
 * public/logo.png. The previous palette led with blue #2563EB and purple
 * #7C3AED, neither of which appears anywhere in the logo or the app icon.
 *
 * Every neutral is a *semantic* token backed by a CSS variable declared in
 * app/globals.css. Changing the theme means editing those variables, not the
 * components — so `text-ink` means "body text" rather than "white".
 *
 * `surface`, `text` and `dark` are kept so the existing usages of
 * `bg-dark-card` / `border-dark-border` (126 across 72 files, previously dead
 * classes that compiled to nothing) keep working — they now resolve to the
 * same variables as `band` and `hairline`.
 * ──────────────────────────────────────────────────────────────────────────
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand — sampled from the logo mark ──
        // #FC4812 is the logo's exact orange, but it only reaches 3.23:1 on
        // the section band, which fails WCAG AA for text and button labels.
        // #CF3B0F is the lightest shade of the same hue that clears 4.5:1 on
        // white (4.90), on the band (4.58) and on an orange tint (4.24 — so
        // text sitting on a tint uses the deeper accent-dark below).
        // `brand` keeps the literal logo value for display text and graphics,
        // where the 3:1 large-text bar applies.
        brand: "#FC4812",
        primary: { DEFAULT: "#CF3B0F", light: "#B93307", dark: "#B93307" },
        secondary: { DEFAULT: "#17171A", light: "#2A2A30", dark: "#0B0B0C" },
        accent: { DEFAULT: "#CF3B0F", light: "#B93307", dark: "#B93307" },

        // ── Semantic neutrals (variable-backed) ──
        canvas: v("canvas"),       // page background
        card: v("card"),           // card surface
        band: v("band"),           // alternating section band
        ink: v("ink"),             // primary text
        muted: v("muted"),         // secondary text
        subtle: v("subtle"),       // tertiary text / captions
        faint: v("faint"),         // legal, footnotes
        hairline: v("hairline"),   // borders (use with an opacity, e.g. /10)
        tint: v("tint"),           // subtle fills (use with an opacity, e.g. /5)

        // ── Legacy keys, kept so existing classes keep resolving ──
        // `border-dark-border` carries no opacity, so it needs a low alpha
        // baked in — otherwise the 102 usages would draw black borders.
        surface: { DEFAULT: v("band"), card: v("card"), dark: v("band") },
        text: { primary: v("ink"), secondary: v("muted") },
        dark: {
          DEFAULT: v("band"),
          card: v("band"),
          border: "rgb(var(--hairline) / 0.10)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(17,17,20,0.06)",
        "card-hover": "0 8px 40px rgba(17,17,20,0.10)",
        glow: "0 0 30px rgba(252,72,18,0.18)",
        "glow-accent": "0 0 30px rgba(252,72,18,0.22)",
      },
      borderColor: {
        subtle: "rgba(252,72,18,0.25)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #FC4812 0%, #D33A0A 100%)",
        "gradient-hero": "linear-gradient(135deg, #FC4812 0%, #FF6A3D 50%, #D33A0A 100%)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "tilt-bob": "tilt-bob 6s ease-in-out infinite",
        // The two marquees. Both shift by exactly one third of the track, and
        // every track is rendered as three identical copies, so the moment the
        // animation restarts it is pixel-identical to where it began and the
        // loop has no seam. Two slower variants drive the client wall, which
        // runs wider per cycle than the review row does.
        "marquee-left": "marquee-left 60s linear infinite",
        "marquee-right": "marquee-right 60s linear infinite",
        "marquee-slow-left": "marquee-left 95s linear infinite",
        "marquee-slow-right": "marquee-right 95s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.3333%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-33.3333%)" },
          to: { transform: "translateX(0)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(2deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "tilt-bob": {
          "0%, 100%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(3deg) rotateY(3deg)" },
          "75%": { transform: "rotateX(-3deg) rotateY(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
