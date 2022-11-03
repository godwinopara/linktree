/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-750": "#1570EF",
      },

      spacing: {
        90: "21.44rem", // 343px
        100: "37.5rem", //600px
      },
      maxWidth: {
        "2xxl": "720px",
      },
    },
  },
  plugins: [],
};
