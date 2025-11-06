/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b2c5e",   // deep navy blue (academic)
        secondary: "#d4af37", // light golden (prestige)
        accent: "#f5f5f5",    // soft background tone
        dark: "#0a1a33",
        light: "#ffffff"
      },
      fontFamily: {
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Inter"', "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.3)",
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
