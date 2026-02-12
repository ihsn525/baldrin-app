/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        harbor: {
          void: "#0a0a1a",
          navy: "#1e293b",
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        data: ["Lexend", "sans-serif"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")], // This is the correct way
}