/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "iphone14-pro": "url('/src/assets/images/iphone14_pro.jpg')",
        iphone14: "url('/src/assets/images/iphone14.jpg')",
      },
      content: {
        "chevron-r": "url(/src/assets/icons/chevron_r-icon.svg)",
      },
    },
  },
  plugins: [],
};
