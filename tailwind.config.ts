import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9EBD9",
        "item-hover": "#2F3D44",
        "foreground-main": "#36241C",
        "foreground-secondary": "#453229",
        "foreground-tertiary": "#4e3a32",
        accent: "#F9A828",
        "accent-secondary": "#F9A828",
      },
    },
  },
  plugins: [],
} satisfies Config;
