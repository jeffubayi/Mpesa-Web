import React from "react";
import {
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Checkout from "./Checkout";


const TwDialog = ({
  openDialog,
  closeDialog,
  avatar,
  buttonHelperText,
  title,
  description,
  helperText,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.up("bg"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ position: "absolute" }}
    >
      <DialogContent style={{ margin: 0, padding: 0 }}>
        <Checkout/>
      </DialogContent>
      
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
