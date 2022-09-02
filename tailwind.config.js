/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screen: {
      sm: "600px",
      md: "720px",
      lg: "1000px",
      xl: "1400px",
      "2xl": "1700px",
    },
    colors: {
      "green-light": "#008A27",
      "green-dark": "#183B29",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
