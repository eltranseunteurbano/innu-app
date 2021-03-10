import { createMuiTheme } from "@material-ui/core";

const themeOptions = {
  palette: {
    //Primary colors
    red: {
      main: "#FF5F21",
    },
    yellow: {
      main: "#F5B840",
    },
    blue: {
      main: "#2D75E1",
    },
    //Secondary colors
    rose: {
      main: "#FFE5DA",
    },
    esmerald: {
      main: "#DAFFEC",
    },
    lavander: {
      main: "#F0EBFD",
    },
    sky: {
      main: "#E7F0FC",
    },
    //Gray
    black: {
      main: "#181A1D",
    },
    deepGrey: {
      main: "#4D5661",
    },
    MidGrey: {
      main: "#8A95A1",
    },
    MistGrey: {
      main: "#9AA2AC",
    },
    clearGrey: {
      main: "#F3F4FB",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightBold: 600,
    fontWeightRegular: 400,
    fontFamily: '"Manrope", sans-serif',
    allVariants: {
      color: "#4D5661",
    },
    xxlarge: {
      fontSize: "6em",
      fontWeight: 700,
      lineHeight: "8rem",
      fontFamily: "'Shippori Mincho', serif",
    },
    xlarge: {
      fontSize: "4.5rem",
      fontWeight: 700,
      lineHeight: "5.5rem",
      fontFamily: "'Shippori Mincho', serif",
    },
    large: {
      fontSize: "3.75rem",
      fontWeight: 700,
      lineHeight: "4.5rem",
      fontFamily: "'Shippori Mincho', serif",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: "4rem",
    },
    h2: {
      fontSize: "2.125rem",
      fontWeight: 700,
      lineHeight: "3rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: "2rem",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "2rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "1.5rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: "1rem",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: "1rem",
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 700,
      lineHeight: "1rem",
    },
  },
};

const customTheme = createMuiTheme(themeOptions);

export default customTheme;
