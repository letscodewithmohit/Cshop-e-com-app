/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
