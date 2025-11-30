/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul-verde profundo (texto principal, títulos)
        brandDeepBlue: "#083046",
        // Celeste mar Caribe
        brandOcean: "#00A8E8",
        // Verde agua / coral reef
        brandTeal: "#00C9A7",
        // Arena suave / atardecer claro
        brandSand: "#FFD9A0",
        // Fondo azul muy suave
        brandSoftBlue: "#E6F5FF",
        // Naranja atardecer
        brandOrange: "#FF8C42",
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.16)",
      },
    },
  },
  plugins: [],
};
