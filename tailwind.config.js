/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Océano y vegetación suaves, sin colores chillones
        brandNavy: "#02131B",       // mar profundo
        brandNavySoft: "#02313F",   // azul verdoso más suave
        brandOrange: "#FFB26B",     // sol suave
        brandGold: "#FFE3A3",       // reflejo de arena
        brandTurquoise: "#2DD4BF",  // agua turquesa
        brandSky: "#38BDF8",        // cielo Caribe
        brandSand: "#F4E0B8",       // playa
        brandLeaf: "#16A34A",       // vegetación
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 55px rgba(15,23,42,0.55)",
      },
    },
  },
  plugins: [],
};
