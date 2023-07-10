/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html, js, ts, vue}"],
  theme: {
    extend: {
      fontFamily: {
        "DM-Serif": ["'DM Serif Display', serif;"],
        karla: [" 'Karla', sans-serif;"],
      },
      colors: {
        primary: {
          "Dark-Violet": "hsl(256, 26%, 20%)",
          "Grayish-Blue": "hsl(216, 30%, 68%)",
        },
        "Very-Dark-Violet": "hsl(270, 9%, 17%)",
        "Dark-Grayish-Violet": "hsl(273, 4%, 51%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
