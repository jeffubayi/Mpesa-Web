// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { ProductCartWidget } from "../components/_dashboard/products";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import TransactCard from "../components/TransactCard";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import LanguageIcon from "@material-ui/icons/Language";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import StoreIcon from "@material-ui/icons/Store";
import PaymentIcon from "@material-ui/icons/Payment";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import LaunchIcon from "@material-ui/icons/Launch";
import SendIcon from "@material-ui/icons/Send";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import { Grid, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const SOCIALS = [
  {
    name: "SEND & REQUEST",
    icon: <SendIcon width={24} height={24} />,
    mainTheme: "#00AB55",
    type1: {
      name: "Send money",
      color: "send",
      icon: <ImportExportIcon style={{ fill: "#00AB55" }} />,
    },
    type2: {
      name: "Request money",
      color: "send",
      icon: <TrendingDownIcon style={{ fill: "#00AB55" }} />,
    },
    type3: {
      name: "Global",
      color: "send",
      icon: <LanguageIcon style={{ fill: "#00AB55" }} />,
    },
    type4: {
      name: "Another network",
      color: "send",
      icon: <CallMadeIcon style={{ fill: "#00AB55" }} />,
    },
  },
  {
    name: "PAY",
    icon: <PaymentIcon width={24} height={24} />,
    mainTheme: "#036ECC",
    type1: {
      name: "Pay Bill",
      color: "pay",
      icon: <ReceiptIcon style={{ fill: "#036ECC" }} />,
    },
    type2: {
      name: "Buy Goods",
      color: "pay",
      icon: <ShoppingBasketIcon style={{ fill: "#036ECC" }} />,
    },
    type3: {
      name: "Pochi La Biashara",
      color: "pay",
      icon: <PhoneAndroidIcon style={{ fill: "#036ECC" }} />,
    },
    type4: {
      name: "Fuliza",
      color: "pay",
      icon: <LaunchIcon style={{ fill: "#036ECC" }} />,
    },
  },
  {
    name: "WITHDRAW",
    icon: <RemoveCircleOutlineIcon width={24} height={24} />,
    mainTheme: "#f7005b",
    type1: {
      name: "At Agent",
      color: "withdraw",
      icon: <StoreIcon style={{ fill: "#f7005b" }} />,
    },
    type2: {
      name: "ATM",
      color: "withdraw",
      icon: <PaymentIcon style={{ fill: "#f7005b" }} />,
    },
  },
  {
    name: "AIRTIME",
    icon: <PhonelinkRingIcon width={24} height={24} />,
    mainTheme: "#08ccdd",
    type1: {
      name: "For my number",
      color: "credo",
      icon: <MobileScreenShareIcon style={{ fill: "#11E2F6" }} />,
    },
    type2: {
      name: "For another number",
      color: "credo",
      icon: <PermContactCalendarIcon style={{ fill: "#11E2F6" }} />,
    },
  },
];

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

export default function Transaction({ products, ...rest }) {
  const classes = useStyles();
  const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Page title="Transact | Mpesa">
        <Container>
          <Typography variant="h4" gutterBottom>
            Transact
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Grid
              container
              direction={fullScreen ? "column":"row"}
              spacing={2}
            >
              {SOCIALS.map(
                ({ type1, type2, type3, type4, name, mainTheme }) => (
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>{name}</Paper>
                    <CardWrapper>
                      <TransactCard
                        mainTheme={mainTheme}
                        type={type1.color}
                        title={type1.name}
                        className={classes.transactCard}
                        icon={type1.icon}
                      />

                      <TransactCard
                        mainTheme={mainTheme}
                        type={type2.color}
                        title={type2.name}
                        className={classes.transactCard}
                        icon={type2.icon}
                      />
                      {type3 !== undefined && (
                        <>
                          <TransactCard
                            mainTheme={mainTheme}
                            type={type3.color}
                            title={type3.name}
                            className={classes.transactCard}
                            icon={type3.icon}
                          />
                          <TransactCard
                            mainTheme={mainTheme}
                            type={type4.color}
                            title={type4.name}
                            className={classes.transactCard}
                            icon={type4.icon}
                          />
                        </>
                      )}
                    </CardWrapper>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
          <ProductCartWidget />
        </Container>
      </Page>
    </>
  );
}
