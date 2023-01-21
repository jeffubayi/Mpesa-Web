import PropTypes from "prop-types";
import React from "react";
// material
import {
  Grid,
  Card,
  Paper,
  Typography,
  CardContent,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

// utils
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import PaymentIcon from "@material-ui/icons/Payment";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const SOCIALS = [
  {
    name: "SEND & REQUEST",
    icon: <SendIcon width={24} height={24} />,
    mainTheme: "#00AB55",
  },
  {
    name: "PAY",
    icon: <PaymentIcon width={24} height={24} />,
    mainTheme: "#036ECC",
  },
  {
    name: "WITHDRAW",
    icon: <RemoveCircleOutlineIcon width={24} height={24} />,
    mainTheme: "#f7005b",
  },
  {
    name: "AIRTIME",
    icon: <PhonelinkRingIcon width={24} height={24} />,
    mainTheme: "#11E2F6",
  },
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object,
};

const IconWrapperStyle = styled("div")(({ theme, color }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(7),
  height: theme.spacing(7),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: color,
  backgroundImage: `linear-gradient(135deg, ${alpha(color, 0)} 0%, ${alpha(
    color,
    0.24
  )} 100%)`,
}));

function SiteItem({ site }) {
  const steps = ["Recipient", "Amount", "Confirm "];
  const classes = useStyles();
  const { icon, name, mainTheme } = site;
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
      {open && (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <AppBar className={classes.appBar}>
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
          <div style={{ marginTop: 1 }}>
            <IconWrapperStyle color={mainTheme}>{icon}</IconWrapperStyle>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <Paper sx={{ p: 4, textAlign: "center" }}>
                  <Typography variant="h5" gutterBottom>
                    Transaction Complete
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    PK20D0153BY9 Confirmed. Ksh 200 sent to John Smith
                    0114476990 on 4/11/21 at 6:12 PM. New M-PESA balance is Ksh
                    200. Transaction cost, Ksh21.00. Amount you can transact
                    within the day is 299,800.00. To reverse, forward this
                    message to 456. We have emailed your mpesa statement.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    fullWidth
                  >
                    CONFIRM
                  </Button>
                </Paper>
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
                  <DialogActions sx={{ justifyContent: "center", px: 4 }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} variant="outlined" fullWidth>
                        PREVIOUS
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      fullWidth
                    >
                      {activeStep === steps.length - 1
                        ? "CONFIRM "
                        : "CONTINUE"}
                    </Button>
                  </DialogActions>
                </React.Fragment>
              )}
            </React.Fragment>
          </div>
        </Dialog>
      )}
      <Grid item xs={6} lg={3} onClick={handleClickOpen}>
        <Paper sx={{ py: 1, textAlign: "center" }}>
          <IconWrapperStyle color={mainTheme}>{icon}</IconWrapperStyle>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {name}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default function AppTransaction() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
