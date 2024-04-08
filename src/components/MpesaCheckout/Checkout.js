import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginTop: theme.spacing(-9),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    margin:"1rem 0 1rem 0"
  },
}));

const steps = ["Recipient Details ", "Transaction Details", "Confirm "];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const Text = styled.div`
  display: grid;
  text-align: center;
  margin: auto;
  @media (min-width: 768px) {
    text-align: center;
    margin: 0 12rem;
  }
`;

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Transact
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <Text>
                <Typography Completeypography variant="h5" gutterBottom>
                  Confirm
                </Typography>
                <div className={classes.wrapper}>
                  <Fab
                    aria-label="save"
                    color="primary"
                  >
                     <CheckIcon />
                  </Fab>
                </div>
                <Text variant="subtitle2" color="textSecondary">
                  PK20D0153BY9 Confirmed. Ksh 200 sent to John Smith
                  0114476990 on 4/11/21 at 6:12 PM. New M-PESA balance is Ksh
                  200. Transaction cost, Ksh21.00. Amount you can transact
                  within the day is 299,800.00. To reverse, forward this message
                  to 456. We have emailed your mpesa statement.
                </Text>
              </Text>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      className={classes.button}
                      variant="outlined"
                    >
                      PREVIOUS
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "CONFIRM " : "CONTINUE"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
