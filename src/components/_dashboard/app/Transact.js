import PropTypes from "prop-types";
import React from "react";
// material
import {
  Grid,
  Card,
  Paper,
  Typography,
  CardContent,
  Avatar,
  TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import toast from "react-hot-toast";
// utils
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import PaymentIcon from "@material-ui/icons/Payment";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import LanguageIcon from "@material-ui/icons/Language";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import StoreIcon from "@material-ui/icons/Store";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import LaunchIcon from "@material-ui/icons/Launch";
import { Formik, Field, Form } from "formik";
import {validationSchema,initialValues} from "../../../utils/validation"
import {fDateTime} from "../../../utils/formatTime"
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
    mode: ["Select Mode", `Phone Number`, "Amount", "Confirm "],
    icon: <SendIcon width={24} height={24} />,
    mainTheme: "#00AB55",
    type1: {
      name: "Send ",
      color: "send",
      icon: <ImportExportIcon />,
    },
    type2: {
      name: "Request ",
      color: "send",
      icon: <TrendingDownIcon />,
    },
    type3: {
      name: "Global",
      color: "send",
      icon: <LanguageIcon />,
    },
    type4: {
      name: "Another network",
      color: "send",
      icon: <CallMadeIcon />,
    },
  },
  {
    name: "PAY",
    mode: ["Select Mode", `Till Number`, "Amount", "Confirm "],
    icon: <PaymentIcon width={24} height={24} />,
    mainTheme: "#036ECC",
    type1: {
      name: "Pay Bill",
      color: "pay",
      icon: <ReceiptIcon />,
    },
    type2: {
      name: "Buy Goods",
      color: "pay",
      icon: <ShoppingBasketIcon />,
    },
    type3: {
      name: "Pochi La Biashara",
      color: "pay",
      icon: <PhoneAndroidIcon />,
    },
    type4: {
      name: "Fuliza",
      color: "pay",
      icon: <LaunchIcon />,
    },
  },
  {
    name: "WITHDRAW",
    mode: ["Select Mode", `Agent Number`, "Amount", "Confirm "],
    icon: <RemoveCircleOutlineIcon width={24} height={24} />,
    mainTheme: "#f7005b",
    type1: {
      name: "At Agent",
      color: "withdraw",
      icon: <StoreIcon />,
    },
    type2: {
      name: "ATM",
      color: "withdraw",
      icon: <PaymentIcon />,
    },
  },
  {
    name: "AIRTIME",
    mode: ["Select Mode", `Phone Number`, "Amount", "Confirm "],
    icon: <PhonelinkRingIcon width={24} height={24} />,
    mainTheme: "#08ccdd",
    type1: {
      name: "For my number",
      color: "credo",
      icon: <MobileScreenShareIcon />,
    },
    type2: {
      name: "For another number",
      color: "credo",
      icon: <PermContactCalendarIcon />,
    },
  },
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object,
};

const CardMediaStyle = styled("div")({
  display: "grid",
  justifyContent: "center",
  marginBottom: "0.3rem",
});

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
  const classes = useStyles();
  const { icon, name, mainTheme, type1, type2, type3, type4, mode } = site;
  const steps = mode;
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

  const onSubmit = async (values,{setSubmitting}) => {
    await new Promise((r) => setTimeout(r, 500));
                if (!isLastStep()) {
                  setSubmitting(false);
                  handleNext();
                  return;
                }
                handleNext();
                        
  };

  const isLastStep = () => {
		return activeStep === steps.length - 1;
	};

  const save = (values) => {
    console.log(`values`,values)
    setOpen(false);
    toast(
      `Mpesa confirmed,Ksh : ${values.amount} sent to ${
        values.number
      } on ${fDateTime}`,
      {
        position: "top-right",
      }
    );
	};


 

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6} lg={6}>
              <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
                <CardMediaStyle>
                  <Avatar sx={{ mb: 0.5, backgroundColor: `${mainTheme}` }}>
                    {type1.icon}
                  </Avatar>
                </CardMediaStyle>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {type1.name}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} lg={6}>
              <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
                <CardMediaStyle>
                  <Avatar sx={{ mb: 0.5, backgroundColor: `${mainTheme}` }}>
                    {type2.icon}
                  </Avatar>
                </CardMediaStyle>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {type2.name}
                </Typography>
              </Paper>
            </Grid>
            {type3 !== undefined && (
              <>
                <Grid item xs={6} lg={6}>
                  <Paper
                    variant="outlined"
                    sx={{ py: 2.5, textAlign: "center" }}
                  >
                    <CardMediaStyle>
                      <Avatar sx={{ mb: 0.5, backgroundColor: `${mainTheme}` }}>
                        {type3.icon}
                      </Avatar>
                    </CardMediaStyle>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {type3.name}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Paper
                    variant="outlined"
                    sx={{ py: 2.5, textAlign: "center" }}
                  >
                    <CardMediaStyle>
                      <Avatar sx={{ mb: 0.5, backgroundColor: `${mainTheme}` }}>
                        {type4.icon}
                      </Avatar>
                    </CardMediaStyle>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {type4.name}
                    </Typography>
                  </Paper>
                </Grid>
              </>
            )}
          </Grid>
        );
      case 1:
        return (
          <Field
            // component={TextField}
            fullWidth
            size="small"
            name="number"
            label="Enter Phone number"
            required
            type="number"
          />
        );
      case 2:
        return (
          <Field
          // component={TextField}
          fullWidth
          size="small"
          name="amount"
          label="Enter Amount"
          required
          type="number"
          />
        );
      case 3:
        return (
          <Field
          // component={TextField}
            fullWidth
            name="pin"
            size="small"
            label="Enter Pin"
            password
            type="number"
            required
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
                      color: `${mainTheme}`,
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

                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "common.white", // Just text label (ACTIVE)
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "common.white", // circle's number (ACTIVE)
                    },
                  }}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values,isSubmitting }) => (
                <Form>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Paper
                        sx={{
                          p: 4,
                          mb: 2,
                          textAlign: "center",
                          justifyContent: "space-between",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Confirm
                        </Typography>
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-evenly"
                          alignItems="stretch"
                        >
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="body2"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <em> Number: </em> <b>{values.number}</b>
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="body2"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <em>Amount: </em> <b>{values.amount}/=</b>
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="body2"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <em> Transaction cost: </em> <b>4.50/=</b>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: `${mainTheme}` }}
                        onClick={save(values)}
                        fullWidth
                      >
                        Send
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
                          disabled={isSubmitting}
                          type="submit"
                          fullWidth
                        >
                          {isLastStep() ? 'Confirm' : 'Next'}
                        </Button>
                      </DialogActions>
                    </React.Fragment>
                  )}
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      )}
      <Grid item xs={6} lg={3} onClick={handleClickOpen}>
        <Paper sx={{ py: 0.5, textAlign: "center" }}>
          <IconWrapperStyle color={mainTheme}>{icon}</IconWrapperStyle>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
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
