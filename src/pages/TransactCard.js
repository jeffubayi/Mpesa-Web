import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Checkout from "../components/MpesaCheckout/SendMoneyDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "60%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    color: "#FFFF",
  },
  controls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0.5rem",
  },
  playIcon: {
    color: "#00AB55",
  },
  icon: {
    backgroundColor: "#FFFF",
  },
}));

export default function TransactCard({ send, pay, withdraw, title,icon }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {open && (
      <Checkout
        openDialog={handleClickOpen}
        closeDialog={handleClose}
        buttonHelperText="Close"
        title="Warning"
        description="You lack permissions to view the requested resources"
      />
    )}
    <Card
      style={{
        display: "grid",
        width: "auto",
        backgroundImage: `${
          send ?  "linear-gradient( 136deg, #00AB55 0%, #00AB55 60%, #FAFAFA 100%)"
           : pay ?  "linear-gradient( 136deg, #036ECC 0%, #036ECC 60%, #FAFAFA 100%)"
           : withdraw ? "linear-gradient( 136deg, #f7005b 0%, #f7005b 60%, #FAFAFA 100%)" 
           : "linear-gradient( 136deg, #11E2F6 0%, #11E2F6 60%, #FAFAFA 100%)"
        }`,
      }}
      onClick={handleClickOpen}
    >
      <div>
        <CardContent>
          <Typography variant="subtitle2" className={classes.cover}>
            {title}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton className={classes.icon}>
            {icon}  
          </IconButton>
        </div>
      </div>
    </Card>
    </>
  );
}
