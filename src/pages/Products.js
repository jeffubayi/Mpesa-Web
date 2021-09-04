// material
import { Container } from "@material-ui/core";
// components
import Page from "../components/Page";
import { ProductCartWidget } from "../components/_dashboard/products";
import Checkout from "../components/MpesaCheckout/SendMoneyDialog";
// ----------------------------------------------------------------------
import Button from "@material-ui/core/Button";
import React from "react";

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
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Send money
          </Button>
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
