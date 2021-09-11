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
          padding:"0 3rem 0"
        }}>
      <Grid item xs={12} md={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Amount"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            required
            id="cardNumber"
            label="Enter Mpesa Pin"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
       
       
      </Grid>
    </React.Fragment>
  );
}