// material
import { Stack, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import ExpenseChart from "../components/_dashboard/app/AppWebsiteVisits";
import MySpend from "../components/MpesaCheckout/MySpend"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="My Spend | Mpesa">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            My Spend
          </Typography>
        </Stack>
        <MySpend/>
        <ExpenseChart />
      </Container>
    </Page>
  );
}
