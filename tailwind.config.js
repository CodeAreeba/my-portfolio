/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#000000',
        'text-main': '#ffffff',
        'neon-gray': '#d1d5db',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
