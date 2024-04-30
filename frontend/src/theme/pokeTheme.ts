import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const pokeTheme = createTheme({
  palette: {
    primary: {
      main: '#377538'
    },
    secondary: {
      main: '#75fc4d'
    },
    info: {
      main: '#e4f9fe'
    },
    error: {
      main: red.A400
    }
  }
});