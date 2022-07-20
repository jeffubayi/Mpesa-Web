import React from "react";
import { makeStyles } from "@material-ui/styles";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    position: "relative",
  },
  fabProgress: {
    position: "absolute",
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

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Stack sx={{ mb: 2 }} alignItems="center" justifyContent="center">
          {loading && (
            <CircularProgress
              size={68}
              color="primary"
              className={classes.fabProgress}
            />
          )}
        </Stack>
      </div>

      <Grid container item xs={12} spacing={4} style={{ marginBottom: "1rem" }}>
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
    </div>
  );
};
export default NumberPin;
