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
import CallMadeIcon from "@material-ui/icons/CallMade";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import LanguageIcon from '@material-ui/icons/Language';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import StoreIcon from '@material-ui/icons/Store';
import PaymentIcon from '@material-ui/icons/Payment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import LaunchIcon from '@material-ui/icons/Launch';

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
                icon={<CallMadeIcon style={{fill:"#00AB55"}}/>}
              />
              <TransactCard
                send
                title="REQUEST MONEY"
                className={classes.transactCard}
                icon={<TrendingDownIcon style={{fill: "#00AB55"}}/>}
              />
              <TransactCard
                send
                title="GLOBAL"
                className={classes.transactCard}
                icon={<LanguageIcon style={{fill: "#00AB55"}}/>}
              />
              <TransactCard
                send
                title="ANOTHER NETWORK "
                className={classes.transactCard}
                icon={<ImportExportIcon  style={{fill: "#00AB55"}}/>}
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
                icon={<ReceiptIcon style={{fill:"#036ECC"}} />}
              />
              <TransactCard
                pay
                title="BUY GOODS"
                className={classes.transactCard}
                icon={<ShoppingBasketIcon style={{fill: "#036ECC"}}/>}
              />
              <TransactCard
                pay
                title="POCHI LA BIASHARA"
                className={classes.transactCard}
                icon={<PhoneAndroidIcon style={{fill: "#036ECC"}}/>}
              />
              <TransactCard
                pay
                title="FULIZA"
                className={classes.transactCard}
                icon={<LaunchIcon style={{fill: "#036ECC"}}/>}
              />
            </CardWrapper>
            </div>
            <div>
            <Paper className={classes.paper}>WITHDRAW</Paper>
            <CardWrapper>
              <TransactCard
                withdraw
                title="AT AGENT"
                className={classes.transactCard}
                icon={<StoreIcon style={{fill: "#f7005b"}}/>}
              />
              <TransactCard
                withdraw
                title="AT ATM"
                className={classes.transactCard}
                icon={<PaymentIcon style={{fill:"#f7005b"}}/>}
              />
            </CardWrapper>
            </div>
            <div>
            <Paper className={classes.paper}>BUY AIRTIME</Paper>
            <CardWrapper>
              <TransactCard
                title="FOR MY NUMBER"
                className={classes.transactCard}
                icon={<MobileScreenShareIcon  style={{fill: "#11E2F6"}}/>}
              />
              <TransactCard
                title="FOR ANOTHER NUMBER"
                className={classes.transactCard}
                icon={<PermContactCalendarIcon style={{fill: "#11E2F6"}}/>}
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
