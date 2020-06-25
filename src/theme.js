import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography:{
    fontFamily:'Poppins'
  },
  palette: {
    primary: {
      main: '#1d89cc',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0d2a4d'
    },
    error: {
      main: '#b80915'
    },
    success: {
      main: '#e65e30'
    },
    divider: {
      main: '#e65e30'
    },
    spacing: 4
  },
  MuiInputAdornment: {
    main: {
      fontSize: 10
    }
  }
});

export default theme;
