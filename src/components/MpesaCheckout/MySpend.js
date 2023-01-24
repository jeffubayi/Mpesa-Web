import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, CardHeader } from "@material-ui/core";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Payments have never been this easy,',
    imgPath:
      ' data:image/png;base64,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',
  },
  {
    label: 'Download the Mpesa app on your phone',
    imgPath:
"https://i.ytimg.com/vi/-65tZBmCR4s/maxresdefault.jpg",
  },
  {
    label: 'Checkout all the best deals inclusive',
    imgPath:
      ' https://media.licdn.com/dms/image/C4D22AQGSeIxh_pHUvQ/feedshare-shrink_2048_1536/0/1674199077984?e=2147483647&v=beta&t=WgqSls7Gws35fe6n8xjKY5P7buAJLSgdeSv9ak8eQ70',
  },
  {
    label: 'Transforming lives across the country',
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLqiIw8ksmkzwC7PVDjT0NE7K1QQc_07Vkg&usqp=CAU"
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: '1rem'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    textAlign:"center",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 110,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
     <Card >
      <CardHeader title="Suggested for you" />
   <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

    </Card>
  );
}

export default SwipeableTextMobileStepper;

