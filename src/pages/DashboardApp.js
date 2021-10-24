// material
import React from "react";
import { Box, Grid, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppCurrentVisits,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
} from "../components/_dashboard/app";
import Checkout from "../components/MpesaCheckout/SendMoneyDialog";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function DashboardApp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: true,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Page title="Home | Mpesa">
      <Container maxWidth="xl">
        {open && (
          <Checkout
            openDialog={handleClickOpen}
            closeDialog={handleClose}
            buttonHelperText="Close"
            title="Warning"
            description="You lack permissions to view the requested resources"
          />
        )}
        <Box sx={{ pb: 5 }}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Current Balance
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              defaultValue="1000"
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="end">
                  <Typography variant="subtitle-2">KSH.</Typography>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} onClick={handleClickOpen}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3} onClick={handleClickOpen}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3} onClick={handleClickOpen}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} sm={6} md={3} onClick={handleClickOpen}>
            <AppNewUsers />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
          {/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
