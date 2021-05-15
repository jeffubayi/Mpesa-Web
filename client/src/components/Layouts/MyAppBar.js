import React ,{Fragment} from 'react';
import { AppBar,ImageField } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import logo from './Logo.png';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    logo: {
      maxWidth: "60px",
      marginLeft: -10
    },
    bar: {
      backgroundColor:"inherit",
      color:"inherit",
  },
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}  className={classes.bar}  container={Fragment}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
        </AppBar>
    );
};

export default MyAppBar;

