/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: "#1b1b1b",
      dark2: "#4B0082",
      light: "#ffffff",
      primary: "#B63E96",
      primaryDark: "#58E609",
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #ffffff 100px);",
    },
  },
  plugins: [],
};
