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
      s: {
        xs: "10px",
        md: "12px",
        lg: "14px",
      },
      d: {
        xs: "14px",
        md: "16px",
        lg: "18px",
      },
      l: {
        xs: "22px",
        md: "24px",
        lg: "26px",
      },
      xl: {
        xs: "30px",
        md: "32px",
        lg: "34px",
      },
    },
  },
  radius: "30px",
};

export default theme;
