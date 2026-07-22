import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1F2A37",
          soft: "#4B5563",
          muted: "#6B7280",
        },
        cream: {
          DEFAULT: "#FBFAF7",
          deep: "#F4F1EA",
        },
        brand: {
          50: "#F1F6FA",
          100: "#DFEAF3",
          200: "#C2D8E8",
          300: "#94BAD3",
          400: "#6398BA",
          500: "#3F7BA1",
          600: "#2F6187",
          700: "#284E6C",
          800: "#24435A",
          900: "#21394C",
        },
        clay: {
          100: "#F6EFE8",
          300: "#E2C9B0",
          500: "#C08B5C",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,42,55,0.04), 0 8px 24px -12px rgba(31,42,55,0.12)",
        lift: "0 4px 12px rgba(31,42,55,0.06), 0 24px 48px -20px rgba(47,97,135,0.28)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
