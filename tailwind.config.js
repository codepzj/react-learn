/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import {
  createVariableColors,
  variableColorsPlugin,
} from "tailwindcss-variable-colors";
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: createVariableColors(colors),
    extend: {},
  },
  plugins: [variableColorsPlugin(colors)],
};
