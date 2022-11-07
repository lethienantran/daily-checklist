/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswalds: ["Oswald"],
        permanent: ["Permanent Marker", "cursive"],
        kalam: ["Kalam"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide", "tailwindcss/forms")],
};
