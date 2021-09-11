import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {TextField,Divider }from "@material-ui/core";
import SearchContact from "./SearchContact";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumn: "repeat(3,auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <SearchContact />
        </Grid>
        <div style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumn: "repeat(1,auto",
          justifyContent: "center",
        }}>
          <Divider/>
          <Typography variant="body2" gutterBottom>
            OR
          </Typography>
          <Divider/>
        </div>
        <Grid item xs={12} sm={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Phone number"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
