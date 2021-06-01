import React ,{Fragment} from 'react';
import { AppBar,UserMenu,MenuItemLink  } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from "@material-ui/icons/Settings";

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


const AstroUserMenu = (props) => (
  <UserMenu {...props}>
    <MenuItemLink
        to="/profile"
        primaryText="My Profile"
        leftIcon={<SettingsIcon />}
      />
  </UserMenu>
);

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}  
           className={classes.bar} 
           container={Fragment}
           userMenu={<AstroUserMenu />}
        >
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

