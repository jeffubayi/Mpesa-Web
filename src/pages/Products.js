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
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  transactCard: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#000",
    fontSize: "0.8rem",
    fontWeight: 600,
    backgroundColor: "#F4F6F8",
    margin: "1rem",
  },
}));

const CardWrapper = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, auto);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 3rem;
  }
`;

const Main = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(1, auto);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5rem;
  }
`;

export default function Transaction({ products, ...rest }) {
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
          <Main>
            <div>
            <Paper className={classes.paper}>SEND AND REQUEST</Paper>
            <CardWrapper>
              <TransactCard
                send
                title="SEND MONEY"
                className={classes.transactCard}
              />
              <TransactCard
                send
                title="REQUEST MONEY"
                className={classes.transactCard}
              />
              <TransactCard
                send
                title="GLOBAL"
                className={classes.transactCard}
              />
              <TransactCard
                send
                title="REQUEST ANOTHER"
                className={classes.transactCard}
              />
            </CardWrapper>
            </div>
             <div>
            <Paper className={classes.paper}>PAYMENT</Paper>
            <CardWrapper>
              <TransactCard
                pay
                title="PAY BILL"
                className={classes.transactCard}
              />
              <TransactCard
                pay
                title="BUY GOODS"
                className={classes.transactCard}
              />
              <TransactCard
                pay
                title="POCHI LA BIASHARA"
                className={classes.transactCard}
              />
              <TransactCard
                pay
                title="FULIZA"
                className={classes.transactCard}
              />
            </CardWrapper>
            </div>
            <div>
            <Paper className={classes.paper}>WITHDRAW</Paper>
            <CardWrapper>
              <TransactCard
                withdraw
                title="AT ATM"
                className={classes.transactCard}
              />
              <TransactCard
                withdraw
                title="AT AGENT"
                className={classes.transactCard}
              />
            </CardWrapper>
            </div>
            <div>
            <Paper className={classes.paper}>BUY AIRTIME</Paper>
            <CardWrapper>
              <TransactCard
                title="FOR MY NUMBER"
                className={classes.transactCard}
              />
              <TransactCard
                title="FOR ANOTHER NUMBER"
                className={classes.transactCard}
              />
            </CardWrapper>
            </div>
          </Main>
          <ProductCartWidget />
        </Container>
      </Page>
    </>
  );
}
