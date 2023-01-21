import { Card, Avatar, CardHeader, Grid, Typography,Paper } from "@material-ui/core";

// ----------------------------------------------------------------------

const TASKS = ["Hustler Fund", "Unlimited offers", "Home Fibre"];

// ----------------------------------------------------------------------

export default function Stories() {
  return (
    <Card>
      <CardHeader title="Suggested for you" />
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        sx={{ py: 0.9, px: 3, margin: "auto" }}
      >
        {TASKS.map((task) => (
          <Paper  sx={{  textAlign: "center" }}>
            <Avatar style={{ height: "4rem", width: "4rem"}} src="https://cdn-images-1.medium.com/max/900/1*foF2i8u15TM_yHeAHTc8WQ.jpeg" />
            <Typography variant="body2" sx={{ textAlign: "center",marginTop:2 }}>
              {task}
            </Typography>
          </Paper>
        ))}
      </Grid>
    </Card>
  );
}
