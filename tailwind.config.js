module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
      },

      width: {
        325: "325px",
        500: "500px",
        600: "600px",
        800: "800px",
      },

      maxWidth: {
        230: "230px",
      },
    },
  },
  plugins: [],
};
