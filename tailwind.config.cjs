/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "2.75rem",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
