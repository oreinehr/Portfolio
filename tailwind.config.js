module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Habilita o modo escuro com classes
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Exemplo de cor personalizada
        secondary: "#2d3748",
        accent: "#4a5568",
      },
    },
  },
  plugins: [],
};
