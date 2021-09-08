import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchContact from "./SearchContact";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Recipient number
      </Typography>
      <Grid
        container
        spacing={3}
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumn: "repeat(3,auto",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <SearchContact />
        </Grid>
        <div>
          <Typography variant="body2" gutterBottom>
            OR
          </Typography>
        </div>
        <Grid item xs={12} sm={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Phone number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
