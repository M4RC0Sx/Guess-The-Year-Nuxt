/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const FormKitVariants = require("@formkit/themes/tailwindcss");

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./themes/tailwind-formkit-theme.js",
  ],
  theme: {
    extend: {
      colors: {
        theme1: "#F8F6F4",
        theme2: "#E3F4F4",
        theme3: "#D2E9E9",
        theme4: "#C4DFDF",
        "dark-theme1": "#93B1A6",
        "dark-theme2": "#5C8374",
        "dark-theme3": "#183D3D",
        "dark-theme4": "#040D12",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [FormKitVariants],
};
