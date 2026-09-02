/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        network: {
          blue: "#071689",
          "blue-dark": "#040e5b",
          "blue-light": "#1528b8",
          green: "#99c23b",
          "green-hover": "#86ab32",
          "green-light": "#b9de64",
          red: "#bd2923",
          orange: "#cf7927",
          charcoal: "#181b16",
          sky: "#92c4ee",
          slate: "#777293",
          magenta: "#bd1979",
          pink: "#da9aba"
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(7, 22, 137, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(7, 22, 137, 0.16), 0 8px 12px -3px rgba(0, 0, 0, 0.06)',
        'btn': '0 4px 14px 0 rgba(153, 194, 59, 0.39)',
        'btn-hover': '0 6px 20px rgba(153, 194, 59, 0.5)'
      }
    },
  },
  plugins: [],
}
