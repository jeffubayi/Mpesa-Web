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
import Checkout from "../components/MpesaCheckout/SendMoneyDialog"
// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [open, setOpen] = React.useState(false);

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
          <Typography variant="subtitle-2">Balance</Typography>
          <Typography variant="h4"> Ksh. 100</Typography>
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
