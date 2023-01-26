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
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";

const SOCIALS = [
  {
    name: "SEND & REQUEST",
    icon: <SendIcon width={24} height={24} />,
    mainTheme: "#00AB55",
    type1: 
      {
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
    type1: 
      {
        name: "Pay Bill",
        color: "pay",
        icon: <ReceiptIcon style={{ fill: "#036ECC" }} />,
      },
      type2: {
        name: "Buy Goods",
        color: "pay",
        icon: <ShoppingBasketIcon style={{ fill: "#036ECC" }} />,
      },
      type3:{
        name: "Pochi La Biashara",
        color: "pay",
        icon: <PhoneAndroidIcon style={{ fill: "#036ECC" }} />,
      },
      type4:{
        name: "Fuliza",
        color: "pay",
        icon: <LaunchIcon style={{ fill: "#036ECC" }} />,
      },
  
  },
  {
    name: "WITHDRAW",
    icon: <RemoveCircleOutlineIcon width={24} height={24} />,
    mainTheme: "#f7005b",
    type1: 
      {
        name: "At Agent",
        color: "withdraw",
        icon: <StoreIcon style={{ fill: "#f7005b" }} />,
      },
      type2:{
        name: "ATM",
        color: "withdraw",
        icon: <PaymentIcon style={{ fill: "#f7005b" }} />,
      },
  
  },
  {
    name: "AIRTIME",
    icon: <PhonelinkRingIcon width={24} height={24} />,
    mainTheme: "#08ccdd",
    type1: 
      {
        name: "For my number",
        color: "credo",
        icon: <MobileScreenShareIcon style={{ fill: "#11E2F6" }} />,
      },
      type2:{
        name: "For another number",
        color: "credo",
        icon: <PermContactCalendarIcon style={{ fill: "#11E2F6" }} />,
      }
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

const Main = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-rows: repeat(1, auto);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 5rem;
  }
`;

export default function Transaction({ products, ...rest }) {
  const steps = ["Recipient", "Amount", "Confirm "];
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <TextField
            size="small"
            fullWidth
            id="name"
            label="Enter Phone number"
            type="number"
          />
        );
      case 1:
        return (
          <TextField
            size="small"
            margin="dense"
            fullWidth
            id="name"
            label="Enter Amont"
            type="number"
          />
        );
      case 2:
        return (
          <TextField
            size="small"
            fullWidth
            margin="dense"
            id="name"
            label="Enter Pin"
            type="number"
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <Page title="Transact | Mpesa">
        <Container>
          <Typography variant="h4" gutterBottom>
            Transact
          </Typography>

          {SOCIALS.map(({ type1,type2,type3,type4, name, mainTheme }) => (
            <Main>
              {/* {open && (
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <AppBar
                    className={classes.appBar}
                    sx={{
                      ".css-1t29gy6-MuiToolbar-root": {
                        backgroundColor: `${mainTheme}`,
                      },
                    }}
                  >
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography variant="h6" className={classes.title}>
                        {name}
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <DialogContent sx={{ py: 5, px: 2 }}>
                    <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
                      {steps.map((label) => (
                        <Step
                          key={label}
                          sx={{
                            "& .MuiStepLabel-root .Mui-active": {
                              color: "#000",
                            },
                            "& .MuiStepIcon-root.MuiStepIcon-completed": {
                              color: `${mainTheme}`,
                            },
                            "& .MuiStepLabel-root .Mui-completed": {
                              color: `${mainTheme}`, // circle color (COMPLETED)
                            },
                            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                              {
                                color: "grey.500", // Just text label (COMPLETED)
                              },
                            "& .MuiStepLabel-root .Mui-active": {
                              color: `${mainTheme}`, // circle color (ACTIVE)
                            },
                            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                              {
                                color: "common.white", // Just text label (ACTIVE)
                              },
                            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text":
                              {
                                fill: "common.white", // circle's number (ACTIVE)
                              },
                          }}
                        >
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    <React.Fragment>
                      {activeStep === steps.length ? (
                        <React.Fragment>
                          <Paper
                            sx={{
                              p: 4,
                              mb: 2,
                              textAlign: "center",
                              backgroundColor: "#fafafa",
                            }}
                          >
                            <Typography variant="h6" gutterBottom>
                              Transaction Complete
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="textSecondary"
                            >
                              Sucessfully sent Ksh: 500 to 083084038403
                            </Typography>
                          </Paper>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: `${mainTheme}` }}
                            onClick={handleClose}
                            fullWidth
                          >
                            Close
                          </Button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Paper
                            sx={{
                              p: 2,
                              display: "flex",
                              justifyContent: "center",
                              gap: 2,
                            }}
                          >
                            {getStepContent(activeStep)}
                          </Paper>
                          <DialogActions sx={{ px: 4 }}>
                            {activeStep !== 0 && (
                              <Button
                                onClick={handleBack}
                                variant="outlined"
                                style={{
                                  color: `${mainTheme}`,
                                  borderColor: `${mainTheme}`,
                                }}
                                fullWidth
                              >
                                Back
                              </Button>
                            )}
                            <Button
                              variant="contained"
                              style={{ backgroundColor: `${mainTheme}` }}
                              onClick={handleNext}
                              fullWidth
                            >
                              {activeStep === steps.length - 1
                                ? "Confirm "
                                : "Next"}
                            </Button>
                          </DialogActions>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  </DialogContent>
                </Dialog>
              )} */}
              <div>
                <Paper className={classes.paper}>{name}</Paper>
                  <CardWrapper >
                    <TransactCard
                      type={type1.color}
                      title={type1.name}
                      className={classes.transactCard}
                      icon={type1.icon}
                    />

               <TransactCard
                 type={type2.color}
                title={type2.name}
                className={classes.transactCard}
                icon={type2.icon}
              /> 
              {type3 !==  undefined &&
              <>
              <TransactCard
                 type={type3.color}
                title={type3.name}
                className={classes.transactCard}
                icon={type3.icon}
              />
              <TransactCard
                 type={type4.color}
                title={type4.name}
                className={classes.transactCard}
                icon={type4.icon}
              />  
              </>
              }
                  </CardWrapper>;
              </div>
            </Main>
          ))}
          <ProductCartWidget />
        </Container>
      </Page>
    </>
  );
}
