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
        main: "#ffffff",
      },
    },
    typography: {
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up("md")]: {
          fontSize: pxToRem(16),
        },
      },
    },
  }),
);

export default theme;
