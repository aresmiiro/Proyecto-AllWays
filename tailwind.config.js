/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#9C2C77",
      'tertiary':"#ED8936",
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'medium-gray': '#3C526D',
      'medium-gray-2': '#2F4259',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },

    extend: {

      boxShadow:{
        shadowButton:"0px 2px 7px rgba(0 0 0 / 0.25)",
      },
      textColor: {
        'primary': "#CC2D4A",
        'secondary': "#9c2c77",
        'terciary': "#84cc16",
      },
      ringColor:{
        'primary': '#CC2D4A',
        'secondary': "#9c2c77",
        'terciary': "#84cc16",
      },
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
