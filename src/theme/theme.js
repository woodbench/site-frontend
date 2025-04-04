import { createTheme } from '@mui/material/styles';

// Importar las fuentes desde @fontsource
import '@fontsource/playfair-display';
import '@fontsource/raleway';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul claro / Light blue
    },
    secondary: {
      main: '#f48fb1', // Rosa claro / Light Pink
    },
    background: {
      default: '#333', // Oscuro / Dark
      paper: '#424242',
    },
    text: {
      primary: '#ffffff', // Blanco / White
      secondary: '#bdbdbd', // Gris claro / Light grey
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '1.3rem',
    },
    h5: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '1.2rem',
      letterSpacing: '.2rem',
    },
    h6: {
      fontFamily: 'Playfair Display, Arial, sans-serif',
      fontSize: '1.1rem',
      letterSpacing: '.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // No mayus auto.
          color: 'white',
        },
      },
    },
  },
});

export default theme;
