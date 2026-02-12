/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Midnight Harbor Palette
        harbor: {
          void: "#0a0a1a",   // Deep Background
          navy: "#1e293b",   // Card Surfaces
          accent: "#38bdf8", // Primary Action
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"], // General UI
        data: ["Lexend", "sans-serif"],           // Numbers & Charts
      }
    },
  },
  plugins: [],
}