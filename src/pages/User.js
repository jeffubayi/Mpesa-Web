import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import { Stack, Button, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import ExpenseChart from "../components/_dashboard/app/AppWebsiteVisits";
import MySpend from "../components/MpesaCheckout/MySpend"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function User() {
  return (
    <Page title="User ">
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
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            LOANS AND SAVINGS
          </Button>
        </Stack>
        <MySpend/>
        <ExpenseChart />
      </Container>
    </Page>
  );
}
