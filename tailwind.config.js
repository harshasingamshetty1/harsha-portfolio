/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  //additinal dev plugin for scrollbar by tailwind
  plugins: [require("tailwind-scrollbar")],
};
