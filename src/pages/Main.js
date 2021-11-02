import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const High = styled(CardActions)`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(1, auto);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 8rem;
  }
`;

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 190,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/png;base64,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"
          title="Safaricom Bundles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Safaricom Bundles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Safaricom
          </Typography>
          <High>
            <Button size="small" color="primary" variant="contained">
              Buy Bundles
            </Button>
            <Button size="small" color="primary" variant="outlined">
              Tunukiwa Bundles
            </Button>
          </High>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
