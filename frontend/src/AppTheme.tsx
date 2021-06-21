import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#0E1E40',
    },
    secondary: {
      main: '#68C2E8',
      light: '#9EE3FF',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
  },
});
