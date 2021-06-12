
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const styles = createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
},
typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
},
overrides: {
  // hide the refresh button
  RaAppBar: {
    toolbar: {
        '& button': {
            '&:not(:nth-child(1))': {
                display: 'none'
            }
        },
        backgroundColor: "#f50057"
    }
},
  RaMenuItemLink: {
    root: {
      color: "#000000",
    },
    active: {
      color: "#f50057",
      fontWeight:"bold",
    },
    icon: {
      color: "inherit",
    },
  },
  type:"dark",
},
RaLayout: {
  root: {
    color: "#000000",
  },
}
});
export default styles;
