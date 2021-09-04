// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { ProductCartWidget } from "../components/_dashboard/products";
import Checkout from "../components/MpesaCheckout/SendMoneyDialog";
// ----------------------------------------------------------------------
import Button from "@material-ui/core/Button";
import React from "react";
import TransactCard from "./TransactCard";

export default function EcommerceShop({ products, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page title="Transact | Mpesa">
      <Container>
        <Typography variant="h4" gutterBottom>
          Transact
        </Typography>
        <div>
          <Typography variant="body2" gutterBottom>
            SEND AND REQUEST
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "2rem",
              gap: "3rem",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              SEND AND REQUEST
            </Button>
            <TransactCard />
            <TransactCard />
            <TransactCard />
            <TransactCard />
          </div>
          <Typography variant="body2" gutterBottom>
            PAY
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "2rem",
              gap: "3rem",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              PAY
            </Button>
            <TransactCard />
            <TransactCard />
            <TransactCard />
            <TransactCard />
          </div>
          <Typography variant="body2" gutterBottom>
            WITHDRAW
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "2rem",
              gap: "3rem",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              WITHDRAW
            </Button>
            <TransactCard />
            <TransactCard />
            <TransactCard />
            <TransactCard />
          </div>
          <Typography variant="body2" gutterBottom>
            BUY AIRTIME
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "2rem",
              gap: "3rem",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              BUY AIRTIME
            </Button>
            <TransactCard />
            <TransactCard />
            <TransactCard />
            <TransactCard />
          </div>
          {open && (
            <Checkout
              openDialog={handleClickOpen}
              closeDialog={handleClose}
              buttonHelperText="Close"
              title="Warning"
              description="You lack permissions to view the requested resources"
            />
          )}
        </div>
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
