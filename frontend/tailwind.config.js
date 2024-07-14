/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'hero-pattern': "./src/assets/pexels-suzyhazelwood-1629236.jpg",
    },
  },
  plugins: [],
}

