import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-hsmlfvEYX36jdX_UfSQy5cm_ihuA31VgJsIZ2P4_a0R9j7rlr7ITITlip2MFUxK3I&usqp=CAU"
          
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Astro
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Best school you could  ever get uint just make it all good and bulky for your own likin
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined">
          View Post
        </Button>
        <Button size="small" color="primary" variant="outlined">
          Book mark
        </Button>
      </CardActions>
    </Card>
  );
}
