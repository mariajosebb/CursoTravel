/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        bali: "url('https://source.unsplash.com/random/1600x600?bali')",
        chicago: "url('https://source.unsplash.com/random/2000x600?chicago')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        LA: "url('https://source.unsplash.com/random/800x600?los+angeles')",
        miami: "url('https://source.unsplash.com/random/1600x600?miami')",
        newYork: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        seattle: "url('../img/seattle.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        sydney: "url('../img/sydney.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
