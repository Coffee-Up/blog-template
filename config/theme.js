const theme = {
  themeColors: {
    header: "#ffcb50",
    main: "#a5623b",
    footer: "#1e2023",
    background: "#ffcb50",
    textSelected: "#fff",
    bgTextSelected: "#5332ba",
    isolateurs: "#075D30",
    electrificateurs: "#ABD",
  },

  breakpoints: {
    smallest_pc: "600px",
  },

  shadow: {
    text: {
      small: "0 5px 10px rgba(0, 0, 0, 0.25)",
      big: "0 15px 20px rgba(0, 0, 0, 0.13)",
    },
  },

  button: {
    default: {
      background: `red`,
    },
    primary: {
      background: `linear-gradient(360deg, #ff7430   0%, #ffc004  100%)`,
      focus: `blue`,
    },
  },
  padding: {
    section: {
      none: `0`,
      small: `1rem`,
      medium: `2rem`,
    },
  },
  fontWeights: {
    bold: 700,
    black: 900,
    light: 300,
  },
};

module.exports = theme;
