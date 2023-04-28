import "styled-components";

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
        s: string;
        d: string;
        l: string;
        xl: string;
      };
      family: string;
    };

    radius: string;
  }
}
