// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { ProductCartWidget } from "../components/_dashboard/products";
import Checkout from "../components/MpesaCheckout/SendMoneyDialog";

import { makeStyles } from "@material-ui/styles";
import React from "react";
import TransactCard from "./TransactCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  transactCard: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#000",
    fontSize: "0.8rem",
    fontWeight: 600,
    backgroundColor: "#F4F6F8",
  },
}));

export default function EcommerceShop({ products, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

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
      <Page title="Transact | Mpesa">
        <Container>
          <Typography variant="h4" gutterBottom>
            Transact
          </Typography>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={6} spacing={3}>
                <Paper className={classes.paper}>SEND AND REQUEST</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>PAYMENT</Paper>
              </Grid>
              <Grid item xs={3} onClick={handleClickOpen}>
                <TransactCard
                  send
                  title="SEND MONEY"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  send
                  title="REQUEST MONEY"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  pay
                  title="PAY BILL"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  pay
                  title="BUY GOODS"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  send
                  title="GLOBAL"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  send
                  title="REQUEST ANOTHER"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  pay
                  title="POCHI LA BIASHARA"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  pay
                  title="FULIZA"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>WITHDRAW</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>BUY AIRTIME</Paper>
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  withdraw
                  title="AT AGENT"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  withdraw
                  title="AT ATM"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  title="FOR MY NUMBER"
                  className={classes.transactCard}
                />
              </Grid>
              <Grid item xs={3}>
                <TransactCard
                  title="FOR ANOTHER NUMBER"
                  className={classes.transactCard}
                />
              </Grid>
            </Grid>
          </div>
          <ProductCartWidget />
        </Container>
      </Page>
    </>
  );
}
