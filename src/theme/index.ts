// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const theme = responsiveFontSizes(
  createTheme({
    breakpoints,
    palette: {
      primary: {
        main: "#009688",
      },
      secondary: {
        main: "#36b0a4",
        contrastText: "#ffffff",
      },
      gray: {
        light: "#ced0d1",
        dark: "#666666",
      },
    },
    typography: {
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up("md")]: {
          fontSize: pxToRem(16),
        },
      },
      subtitle1: {
        fontSize: pxToRem(14),
        fontWeight: "bold",

        [breakpoints.up("md")]: {
          fontSize: pxToRem(16),
        },
      },
      body2: {
        fontSize: pxToRem(16),

        [breakpoints.up("md")]: {
          fontSize: pxToRem(18),
        },
      },
      subtitle2: {
        fontSize: pxToRem(16),
        fontWeight: "bold",

        [breakpoints.up("md")]: {
          fontSize: pxToRem(18),
        },
      },
    },
  }),
);

declare module "@mui/material/styles" {
  interface CustomPalette {
    gray: {
      light: string;
      dark: string;
    };
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export default theme;
