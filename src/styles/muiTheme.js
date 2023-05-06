
import { createTheme } from "@material-ui/core";

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
      main: "#040f3d",
    },
    secondary: {
      main: "#757575",
    },
  },
  typography: {
    button: {
      // textTransform: "none",   //Using this will stop tranforming all button texts to UPPERCASE
    },
  }//,
  //common styles.
//   global
}))

export const light = ()=> (createTheme({
  palette: {
    type: 'light',
    primary: {
      main: "#4bffa5",
    },
    secondary: {
      main: "#040f3d",
    },
  }//,
  //common styles.
//   global
}))
