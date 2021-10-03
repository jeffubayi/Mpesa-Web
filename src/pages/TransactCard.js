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
        backgroundColor: `${
          send ? "#00AB55" : pay ? "#036ECC" : withdraw ? "#f7005b" : "#11E2F6"
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
