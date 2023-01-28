
import {
  Grid,
  Container,
  Typography,
  CardContent,
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
import AppStatus from "../components/MpesaCheckout/MySpend";

export default function DashboardApp() {
  return (
    <Page title="Home | Mpesa">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={2.5}>
            <Card sx={{ height: 160, textAlign: "center" }}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Current Balance
                </Typography>
                <Typography variant="h5" component="h2">
                   0.00 /=
                </Typography>
                <Typography color="textSecondary " variant="caption">
                  Available Fuliza balance
                </Typography>
                <Typography variant="body2" component="p">
                  Ksh: 0.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <AppTransaction />
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <AppStatus />
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
