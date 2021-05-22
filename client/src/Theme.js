
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey, pink, red, deepOrange, orange, teal, green, amber, lime, purple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
  },
overrides: {
  // hide the refresh button
  RaAppBar: {
    toolbar: {
        '& button': {
            '&:not(:nth-child(1))': {
                display: 'none'
            }
        }
    }
},
  RaMenuItemLink: {
    root: {
      color: "#000000",
    },
    active: {
      color: "#e600ac",
      borderBottom: "2px solid #e600ac",
      fontWeight:"bold",
    },
    icon: {
      color: "inherit",
    },
  },
},
});



export const availableThemes = [
  {
    title: "Default",
    primary: blue,
    secondary: pink
  },
  {
    title: "Sunset",
    primary: deepOrange,
    secondary: orange
  },
  {
    title: "Greeny",
    primary: teal,
    secondary: green
  },
  {
    title: "Beach",
    primary: grey,
    secondary: amber
  },
  {
    title: "Tech",
    primary: blue,
    secondary: lime
  },
  {
    title: "Deep Ocean",
    primary: purple,
    secondary: pink
  }
];
