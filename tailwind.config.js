/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': ['#ff9966', '#ff5e62'],
      },
    },
  },
  variants: {},
  plugins: [],
}