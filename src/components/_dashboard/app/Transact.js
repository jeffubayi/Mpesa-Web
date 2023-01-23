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
          <DialogContent sx={{ py: 5 ,px:2}}>
            <Stepper activeStep={activeStep}  sx={{ mb: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                <Paper sx={{ p: 4,mb:2, textAlign: "center",backgroundColor:"#fafafa" }}>
                  <Typography variant="h6" gutterBottom>
                    Transaction Complete
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Sucessfully sent Ksh: 500 to 083084038403
                  </Typography>
                 
                </Paper>
                 <Button
                 variant="contained"
                 color="primary"
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
                  <DialogActions sx={{  px: 4 }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} variant="outlined" fullWidth>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
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
