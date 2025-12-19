/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F39EB6",
        "primary-dark": "#d67c96",
        "secondary": "#B8DB80",
        "accent-cream": "#F7F6D3",
        "accent-pink": "#FFE4EF",
        "background-light": "#F7F6D3",
        "background-white": "#ffffff",
        "text-dark": "#4a403a",
        "text-light": "#fcf8f8",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
}
