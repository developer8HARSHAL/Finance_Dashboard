/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: "class",  // ← add this
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}