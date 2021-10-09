import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import{CardActions,CardContent,Button}  from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "2rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 400,
    height:110,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Controls = styled.div`
  margin-top:1rem  ;
  @media (min-width: 768px) {
    margin:3rem 0 0 9rem ;
  }
`;

export default function HighlightCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://www.techinafrica.com/wp-content/uploads/2021/08/151.-safaricom.png"
        title="safaricom"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            SAFARICOM BUNDLES
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            safaricom
          </Typography>
        </CardContent>
      </div>
      <Controls>
      <CardActions style={{display:"flex",justifyContent:"space-between"}}>
        <Button size="small" color="primary" variant="contained">
          Buy bundles
        </Button>
        <Button size="small" color="primary" variant="outlined">
          Tunukiwa bundles
        </Button>
      </CardActions>
      </Controls>
    </Card>
  );
}
