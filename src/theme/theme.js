// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Importar las fuentes desde @fontsource
import '@fontsource/playfair-display';
import '@fontsource/raleway';

const theme = createTheme({
  palette: {
    mode: 'dark', // Modo oscuro
    primary: {
      main: '#90caf9', // Azul claro para botones primarios y otros elementos importantes
    },
    secondary: {
      main: '#f48fb1', // Rosa claro para botones secundarios y acentos
    },
    background: {
      default: '#333', // Fondo principal oscuro
      paper: '#424242', // Fondo para cajas o elementos tipo Paper
    },
    text: {
      primary: '#ffffff', // Texto principal blanco
      secondary: '#bdbdbd', // Texto secundario gris claro
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Arial', 'sans-serif'].join(','), // Fuente principal para el cuerpo del texto
    h1: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h1
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h2
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h3
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h4
      fontSize: '1.3rem',
    },
    h5: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h5
      fontSize: '1.2rem',
      letterSpacing: '.2rem',
    },
    h6: {
      fontFamily: 'Playfair Display, Arial, sans-serif', // Fuente para títulos h6
      fontSize: '1.1rem',
      letterSpacing: '.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333', // Fondo oscuro para el AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // No poner el texto en mayúsculas automáticamente
          color: 'white',
          // backgroundColor: '#333'
        },
      },
    },
  },
});

export default theme;
