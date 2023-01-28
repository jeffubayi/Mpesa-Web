import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { TextField, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";

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

export default function TransactCard({ type, title, icon, mainTheme }) {
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
            label="Enter Amount"
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
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent sx={{ py: 5, px: 2 }}>
            <Stepper activeStep={activeStep} sx={{ mt: 3 ,mb:2}}>
              {steps.map((label) => (
                <Step
                  key={label}
                  sx={{
                    "& .MuiStepLabel-root .Mui-active": {
                      color: `${mainTheme}`
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
                    <Typography variant="subtitle2" color="textSecondary">
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
                      {activeStep === steps.length - 1 ? "Confirm " : "Next"}
                    </Button>
                  </DialogActions>
                </React.Fragment>
              )}
            </React.Fragment>
          </DialogContent>
        </Dialog>
      )}
      <Card
        style={{
          backgroundImage: `${
            type === "send"
              ? "linear-gradient( 136deg, #00AB55 0%, #00AB55 60%, #66ffb3 100%)"
              : type === "pay"
              ? "linear-gradient( 136deg, #036ECC 0%, #036ECC 60%, #81c3fd 100%)"
              : type === "withdraw"
              ? "linear-gradient( 136deg, #f7005b 0%, #f7005b 60%, #ff99be 100%)"
              : "linear-gradient( 136deg, #11E2F6 0%, #11E2F6 60%, #b5f7fd 100%)"
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
            <IconButton className={classes.icon}>{icon}</IconButton>
          </div>
        </div>
      </Card>
    </>
  );
}
