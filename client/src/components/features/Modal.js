import React,{useState} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
} from "@material-ui/core";
import Logo from "../Layouts/Logo.png"
import PropTypes from "prop-types";

const Modal = ({
  openDialog,
  closeDialog
}) => {

  return (
    <Dialog
      style={{display:"grid",justifyContent:"center"}}
      open={openDialog}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" >
        <img src={Logo} style={{width:"15vw",marginLeft:"4.5rem"}}/>  
      </DialogTitle>
      <DialogContent 
        style={{
          justifyContent:"center",
          fontWeight:"bold",
          fontSize:"1.2rem"}}
      >
        Ooops!! seems like you haven't logged in yet
      </DialogContent>
      <DialogActions style={{justifyContent:"center",margin:"2rem"}}>
        <Button variant="contained" color="secondary" onClick={() => window.location.assign("/posts")}>
         Log In
        </Button>
       <Button variant="contained" color="secondary" onClick={() => window.location.assign("/users")}>
        Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};
Modal.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default Modal;