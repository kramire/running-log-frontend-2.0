import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgPrimary: string;
    };
    screenSize: {
      mobile: string;
      tablet: string;
      laptop: string;
      dekstop: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#e0fbfc", // light blue
    secondary: "#ece68d", // light yellow
    bgPrimary: "#12171f", // dark
  },
  screenSize: {
    mobile: "640px",
    tablet: "768px",
    laptop: "1024px",
    dekstop: "1200px",
  },
};
