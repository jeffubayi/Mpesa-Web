import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";

import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    display: "grid",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    backgroundColor: "#e3e3e3",
  },
  wrapper: {
    margin: "-2rem 1rem 1rem",
    position: "relative",
  },
  fabProgress: {
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  button: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const NumberPin = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 5000);
    }
  };

  const handleLogin = () => {
    
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <Fab aria-label="save" color="primary" className={buttonClassname}>
            {success ? <CheckIcon /> : <FiberManualRecordIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              color="primary"
              className={classes.fabProgress}
            />
          )}
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={4}>
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                1
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                2
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                3
              </Paper>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                4
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                5
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                6
              </Paper>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <React.Fragment>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                7
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                8
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                9
              </Paper>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <React.Fragment>
            <Grid item xs={4}>
              <Paper></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={5}>
                0
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper></Paper>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={4} style={{marginTop:"1rem"}}>
          <React.Fragment>
            <Grid item xs={12}>
              {!success ? (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  onClick={handleButtonClick}
                  className={classes.button}
                  fullWidth
                >
                  CONFIRM
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={loading}
                   onClick={() => window.location.assign("/mpesa/app")}
                  className={classes.button}
                  fullWidth
                >
                  LOGIN
                </Button>
              )}
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
};
export default NumberPin;
