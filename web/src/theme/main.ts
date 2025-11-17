import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0180C8',      // lighter blue
      main: '#01579B',       // base blue from your link
      dark: '#013E6E',       // darker blue
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF8566',
      main: '#FF5733',       // orange-red
      dark: '#CC3D1F',
      contrastText: '#fff',
    },
    error: {
      main: '#94334f'
    },
    warning: {
      main: '#ff9800'
    },
    info: {
      main: '#2196f3'
    },
    success: {
      main: '#4caf50'
    },
    background: {
      default: '#d9f3ff',
      paper: '#e6f4f1',
    },
  },
});

export default theme;