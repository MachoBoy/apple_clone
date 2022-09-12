/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        "chevron-r": "url(/src/assets/icons/chevron_r-icon.svg)",
      },
    },
  },
  plugins: [],
};
