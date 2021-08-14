
// material
import { Container,  Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  ProductList,
  ProductCartWidget,
} from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  return (
    <Page title="Transact | Mpesa">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Transact
        </Typography>

        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
