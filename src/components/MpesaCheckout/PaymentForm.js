import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}
      style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumn: "repeat(2,auto",
        }}>
      <Grid item xs={12} md={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Amount"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Mpesa Pin"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}