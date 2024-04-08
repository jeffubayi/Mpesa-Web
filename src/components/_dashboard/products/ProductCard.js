import PropTypes from "prop-types";
// material
import { Box, Card,Stack, Button } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
//
import Label from "../../Label";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover,  status } = product;

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "WIDTHRAW" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
            <Button variant="outlined" color={(status === "WIDTHRAW" && "error") || "info"}>{name}</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
