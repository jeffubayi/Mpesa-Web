import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "60%",
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
    padding :"0.5rem"
  },
  playIcon: {
    color: "#00AB55",
  },
  icon: {
    backgroundColor: "#FFFF",
  },
}));

export default function TransactCard({ send,pay ,  withdraw,title}) {
  const classes = useStyles();

  return (
    <Card style={{
      backgroundColor: `${
        send
          ? "#00AB55"
          : pay
          ? "#036ECC"
          : withdraw
          ? "#f7005b"
          : "#11E2F6"
      }`,
    }}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.cover}>
            {title}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton  className={classes.icon}>
            <CallMadeIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
