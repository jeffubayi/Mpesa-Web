import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "13%",
    backgroundColor: "#00AB55",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    color: "#FFFF",
  },
  controls: {
    display: "flex",
    justifyContent: "flex-end",
  },
  playIcon: {
    color: "#00AB55",
  },
  icon: {
    backgroundColor: "#FFFF",
  },
}));

export default function TransactCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.cover}>
            Send Money
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause" className={classes.icon}>
            <CallMadeIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
