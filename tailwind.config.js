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
        "montserrat": "montserrat",
        "caveat": "caveat"
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },

      backgroundImage: {
        'fond': "url('./public/fond-filtre.jpg')",
        'chateau': "url('./public/chateau-filtre.jpg')",
        'ciel': "url('./public/ciel-filtre.jpg')",
        'soleil': "url('./public/assets/soleil.jpg')",
        'corbeau': "url('./public/corbeau-filtre.jpg')",
        'rectangle': "url('./public/rectangle-.jpg')",
      }
    },

  },
  plugins: [],
}
