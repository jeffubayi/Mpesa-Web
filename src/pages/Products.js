
// material
import { Container  } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  ProductCartWidget,
} from '../components/_dashboard/products';
import Checkout from "../components/MpesaCheckout/Checkout"
// ----------------------------------------------------------------------

export default function EcommerceShop({products,...rest}) {

  return (
    <Page title="Transact | Mpesa">
      <Container>
       
       < Checkout/>
        <ProductCartWidget /> 
      </Container>
    </Page>
  );
}
