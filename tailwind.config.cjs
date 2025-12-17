import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    // daisyui,
    // require('daisyui'),
    require("@tailwindcss/typography"), require("daisyui")
  ],
  daisyui: {
    themes: ["winter", "dracula"],
  },
};

