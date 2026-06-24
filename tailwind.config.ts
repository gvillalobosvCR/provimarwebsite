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
        // Maritime palette based on corporate blues
        maritime: {
          50: "#EFF8FF",
          100: "#DBEFFE",
          200: "#BAE0FD",
          300: "#7CCCFB",
          400: "#36B3F7",
          500: "#0C97E3",
          600: "#0077C2",
          700: "#005FA0",
          800: "#054F84",
          900: "#0A3D62",
          950: "#072A45",
        },
        // Corporate corporate blues
        navy: "#0A3D62",
        blue: {
          brand: "#1B6CA8",
          light: "#00AEEF",
          50: "#EFF8FF",
          100: "#DBEFFE",
          200: "#BAE0FD",
          300: "#7CCCFB",
          400: "#36B3F7",
          500: "#0C97E3",
          600: "#0077C2",
          700: "#005FA0",
          800: "#054F84",
          900: "#0A3D62",
        },
        // Accent red for CTA
        red: {
          cta: "#E63946",
          hover: "#C72D3A",
          50: "#FEF2F2",
          100: "#FEE2E2",
        },
        // Slaty backgrounds
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(10, 61, 98, 0.07)",
        "card-md": "0 4px 24px rgba(10, 61, 98, 0.10)",
        "card-lg": "0 8px 40px rgba(10, 61, 98, 0.14)",
        "card-xl": "0 16px 60px rgba(10, 61, 98, 0.18)",
        "red-glow": "0 4px 24px rgba(230, 57, 70, 0.35)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(230, 57, 70, 0.3)" },
          "50%": { boxShadow: "0 4px 36px rgba(230, 57, 70, 0.55)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
