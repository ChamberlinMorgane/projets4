module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "beige": "E2D5C5",
        "vert": "8F9179",
        "beigeclair": "F3ECE2"



      },
      "fontFamily": {
        "inria": "inria",
        "montserrat": "montserrat"
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
