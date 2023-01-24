// material
import React from "react";
import {
  Grid,
  Container,
  Typography,
  CardHeader,
  Card,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  AppExpense,
  AppStatement,
  AppServices,
  AppCategories,
  AppTransaction,
} from "../components/_dashboard/app";
import SwipeableTextMobileStepper from "../components/MpesaCheckout/MySpend";

export default function DashboardApp() {
  return (
    <Page title="Home | Mpesa">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={2.5}>
            <Card sx={{ height: 160, textAlign: "center",}}>
              <CardHeader title="Balance" style={{mb:2}} />
              <Typography  variant="subtitle-2">KSH. 0.00</Typography>
              <Typography variant="body2">Available fuliza balance </Typography>
              <Typography variant="caption">KSH. 0.00</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <AppTransaction />
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <SwipeableTextMobileStepper />
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
          <Grid item xs={12} md={6} lg={4}>
            <AppCategories />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
