import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#6D28D9",
        },
        accent: {
          DEFAULT: "#FF6B35",
          light: "#FF8A5C",
          dark: "#E85A28",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
          dark: "#F1F5F9",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(37,99,235,0.08)",
        "card-hover": "0 8px 40px rgba(37,99,235,0.14)",
        glow: "0 0 30px rgba(37,99,235,0.2)",
        "glow-accent": "0 0 30px rgba(255,107,53,0.25)",
      },
      borderColor: {
        subtle: "rgba(37,99,235,0.15)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "gradient-hero": "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #FF6B35 100%)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "tilt-bob": "tilt-bob 6s ease-in-out infinite",
      },
      keyframes: {
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
