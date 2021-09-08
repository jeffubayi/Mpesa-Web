import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Typography,Avatar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const payments = [
  { name: 'Amount Ksh', detail: '5,000' },
  { name: 'Transaction Date', detail: '1/04/2024' },
  { name: 'Transaction cost', detail: '27' },
  { name: 'New Balance', detail: '4000' },
  
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirm transaction
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Sent to 
          </Typography>
          <Avatar style={{width:"3.8rem",height:"3.8rem"}}/>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>07070707070</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            transaction details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="subtitle1">{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}