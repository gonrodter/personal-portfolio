/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Arial", "Helvetica", "sans-serif"],
        sketch: ["Caveat", "Comic Sans MS", "cursive"],
      },
      colors: {
        canvas: "#e8e8e8",
        ink: "#151c24",
        muted: "#686d73",
      },
    },
  },
  plugins: [],
};
