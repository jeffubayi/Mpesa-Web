
// material
import { alpha } from '@material-ui/core/styles';
import {  DialogContent, IconButton } from '@material-ui/core';
// components
import { Icon } from '@iconify/react';
import {
   AppWebsiteVisits 
} from "../../components/_dashboard/app";
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FilterListIcon from '@material-ui/icons/FilterList';

// ----------------------------------------------------------------------


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getIcon = (name) => <Icon icon={name} width={22} height={22} />;


  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        {getIcon(pieChart2Fill)}
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Spend
            </Typography>
            <IconButton autoFocus color="inherit" onClick={handleClose}>
              <FilterListIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
        < AppWebsiteVisits/>
        </DialogContent>
      </Dialog>
    </>
  );
}
