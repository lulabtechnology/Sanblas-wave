/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOcean: "#0EA5E9",     // azul Caribe
        brandDeepBlue: "#0F172A",  // azul profundo
        brandTeal: "#14B8A6",      // verde agua
        brandSand: "#FEF9C3",      // arena
        brandSoftBlue: "#E0F2FE",  // cielo suave
        brandOrange: "#FB923C",    // naranja del logo
        brandGold: "#FACC15",      // amarillo del logo
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.18)",
      },
    },
  },
  plugins: [],
};
