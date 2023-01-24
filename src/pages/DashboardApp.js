// material
import React from "react";
import { Box, Grid, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppExpense ,
  AppStatement,
  AppServices,
  AppCategories,
  AppStories,
  AppTransaction
} from "../components/_dashboard/app";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


export default function DashboardApp() {
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
  return (
    <Page title="Home | Mpesa">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <FormControl>
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
        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={8} >
            <AppTransaction/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppStories/>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <AppStatement />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppExpense />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppServices />
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
            <AppCategories/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
