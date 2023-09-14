import "styled-components";

type breakpoints = {
  xs: string;
  md: string;
  lg: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral: {
        light: string;
        dark: string;
      };
      primary: {
        default: string;
        dark: string;
      };
      secondary: {
        default: string;
        dark: string;
      };
    };

    font: {
      size: {
        s: breakpoints;
        d: breakpoints;
        l: breakpoints;
        xl: breakpoints;
      };
      family: string;
    };

    radius: string;
  }
}
