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
    extend: {},
  },
  plugins: [FormKitVariants],
};
