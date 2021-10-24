import React from "react";
import {
  Dialog,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Checkout from "./Checkout";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TwDialog = ({
  openDialog,
  closeDialog,
  avatar,
  buttonHelperText,
  title,
  description,
  helperText,
}) => {
  const classes = useStyles();

  return (
    <Dialog fullScreen open={openDialog}
      onClose={closeDialog}
      TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={closeDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Send Money
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: "grid", justifyContent: "center" }}>
        <Checkout />
        </div>
      </Dialog>
  );
};
TwDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  buttonHelperText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  helperText: PropTypes.string,
};
export default TwDialog;
