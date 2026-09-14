/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#151515",
        text: "#e0e0e0",
        muted: "#777777",
        accent: "#d97706", // warm amber accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            a: { color: theme("colors.accent") },
            h1: { color: theme("colors.text"), fontFamily: theme("fontFamily.display"), fontWeight: "700" },
            h2: { color: theme("colors.text"), fontFamily: theme("fontFamily.display"), fontWeight: "700" },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

