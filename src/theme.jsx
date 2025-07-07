import { createTheme } from "@mui/material/styles";

const sharedPalette = {
  primary: {
    main: "#1e3f66",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#d72638",
    contrastText: "#ffffff",
  },
  info: {
    main: "#f5f5f5",
  },
};

const sharedTypography = {
  fontFamily: "'Poppins', 'Roboto', 'sans-serif'",
  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
  },
  h2: {
    fontWeight: 600,
    fontSize: '2rem',
  },
  body1: {
    fontSize: '1rem',
    color: 'inherit',
  },
  button: {
    textTransform: 'none',
    fontWeight: 500,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...sharedPalette,
    background: {
      default: "#f5f5f5", // Fondo claro
      paper: "#ffffff",
    },
    text: {
      primary: "#1e1e1e",
      secondary: "#444",
    },
  },
  typography: sharedTypography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...sharedPalette,
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
  typography: sharedTypography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
