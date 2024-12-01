/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9EBD9",
        "item-hover": "#f7e4cc",
        "foreground-main": "#36241C",
        "foreground-secondary": "#453229",
        "foreground-tertiary": "#4e3a32",
        accent: "#d95402",
        "accent-secondary": "#bb3e09",
      },
      fontFamily: {
        serif: ["var(--font-gloock)"],
        sans: ["var(--font-open-sauce-two)"],
      },
    },
  },
  plugins: [],
};
