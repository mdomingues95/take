import { createTheme } from '@mui/material/styles';
import { PRIMARY_COLOR, SECONDARY_COLOR } from 'config/CONSTANTS';

const global = {
  textRight: {
    textAlign: "right",
  },
  mygrey: "rgba(0, 0, 0, 0.5)",
};

export const dark = () => (createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  typography: {
    button: {
    },
  }
}))

export const light = () => (createTheme({
  palette: {
    type: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  }
}))
