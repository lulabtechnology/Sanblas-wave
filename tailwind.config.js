/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: "#020824",
        brandNavySoft: "#081332",
        brandOrange: "#FF8A3D",
        brandGold: "#FBBF54",
        brandTurquoise: "#20D4D2",
        brandSand: "#FDE1B3",
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15,23,42,0.55)",
      },
    },
  },
  plugins: [],
};
