import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: {
          "50%": { opacity: ".5" },
        },
      },
      colors: {
        primary: {
          light: "#606c38",
          DEFAULT: "#283618",
          dark: "#141b0c",
        },
        secondary: {
          light: "#dda15e",
          DEFAULT: "#bc6c25",
          dark: "#8c4c15",
        },
        background: {
          light: "#fefae0",
          DEFAULT: "#e9edc9",
          dark: "#ccd5ae",
        },
      },
    },
  },
  plugins: [],
};
export default config;
