/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#113FE2",
        dark: "#0A1B59",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
