export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf8f4",
        text: "#222222",
        muted: "#605b55",
        frame: "#e3d7c8",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};



