/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "light-grayish-blue": " hsl(223, 64%, 98%)",
        "black-opacity": "hsl(0, 0%, 0%)",
      },

      fontFamily: {
        primary: "Kumbh Sans",
      },
    },

    screens: {
      sm: "375px",

      md: "960px",

      tab: "768px",

      nm: "1160px",

      lg: "1440px",
    },
  },
  plugins: [],
};
