module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
      },
      width: {
        1440: "1440px",
        76: "76px",
        710: "710px",
        "89-vw": "89vw",
      },
      height: {
        "72-vh": "72vh",
      },
      fontSize: {
        39: "39px",
        13: "13px",
      },
      backgroundColor: {
        "green-mantis": "#00D293",
        "red-dragon": "#FF0000",
        "violet-purple": "#6C63FF",
        "soft-purple": "#B6B2FF",
        "neutral-dark": "#000000",
        "gray-culture": "#B5B5B5",
        "orange-pumkin": "#FF8A00",
      },
      borderColor: {
        "green-mantis": "#00D293",
        "red-dragon": "#FF0000",
        "violet-purple": "#6C63FF",
        "soft-purple": "#B6B2FF",
        "neutral-dark": "#000000",
        "gray-culture": "#B5B5B5",
        "orange-pumkin": "#FF8A00",
      },
      textColor: {
        "green-mantis": "#00D293",
        "red-dragon": "#FF0000",
        "violet-purple": "#6C63FF",
        "soft-purple": "#B6B2FF",
        "neutral-dark": "#000000",
        "gray-culture": "#B5B5B5",
        "orange-pumkin": "#FF8A00",
      },
      placeholderColor: {
        "green-mantis": "#00D293",
        "red-dragon": "#FF0000",
        "violet-purple": "#6C63FF",
        "soft-purple": "#B6B2FF",
        "neutral-dark": "#000000",
        "gray-culture": "#B5B5B5",
        "orange-pumkin": "#FF8A00",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        10: "10px",
      },
      boxShadow: {
        "1xl": "0px 0px 15px rgba(0, 0, 0, 0.07)",
        "2xl": "-4px 0px 15px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["focus-visible"],
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
