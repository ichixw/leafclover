/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#C0E84E",
        darkGreen: "#056C05",
        secondaryBlue: "#3A8CD7",
        navGreen: "#6BA829"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    }
  },
  plugins: []
};
