/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        dorange: "#BF6742",
        lorange: "#ECE7E1",
        morange: "#BFAE99",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
