/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        harbor: {
          void: "#0a0a1a",   // Deep Background
          navy: "#1e293b",   // Secondary Surfaces
          accent: "#38bdf8", // Primary Action Color
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"], // UI/Labels
        data: ["Lexend", "sans-serif"],              // Numbers/Charts
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}