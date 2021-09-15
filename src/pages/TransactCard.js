import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";
import PropTypes from 'prop-types';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme, styleProps }) => {
  const { color, variant } = styleProps;

  const styleFilled = (color) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main
  });

  const styleOutlined = (color) => ({
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette[color].main}`
  });

  const styleGhost = (color) => ({
    color: theme.palette[color].dark,
    backgroundColor: alpha(theme.palette[color].main, 0.16)
  });

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 8,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,

    ...(color !== 'default'
      ? {
          ...(variant === 'filled' && { ...styleFilled(color) }),
          ...(variant === 'outlined' && { ...styleOutlined(color) }),
          ...(variant === 'ghost' && { ...styleGhost(color) })
        }
      : {
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.grey[500_32]}`
          }),
          ...(variant === 'ghost' && {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.grey[500_16]
          })
        })
  };
});





const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "60%",
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
    padding :"0.5rem"
  },
  playIcon: {
    color: "#00AB55",
  },
  icon: {
    backgroundColor: "#FFFF",
  },
}));

export default function TransactCard({  color = 'default', variant = 'ghost', title }) {
  const classes = useStyles();

  return (
    <RootStyle>
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
    </RootStyle>
  );
}
TransactCard.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost'])
};
