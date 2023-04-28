import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: {
      default: "#204796",
      dark: "#1B2B67",
    },
    secondary: {
      dark: "#DB9203",
      default: "#F5B403",
    },
    neutral: {
      dark: "#0D0D0D",
      light: "#F1F1F1",
    },
  },
  font: {
    family: "'Open Sans', sans-serif",
    size: {
      s: "12px",
      d: "16px",
      l: "24px",
      xl: "32px",
    },
  },
  radius: "30px",
};

export default theme;
