import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
   button: {
    boxShadow:" 0px 0px 2px #00000029",
    borderRadius: "3px",
    padding:"-4rem",
    opacity: "1",
   },
   icon: {
       color: "black"
   },
});

const CustomEmailField = ({ record = {}, source }) => {
   const [open, setOpen] = React.useState(false);
   const [selectedValue, setSelectedValue] = React.useState("");

   const handleClickOpen = () => {
    setOpen(true);
   
  };
  
   const classes = useStyles();
   return (

       <Button href={record[source]} className={classes.button}>
           {record[source]}
           <MoreHorizIcon/>
       </Button>

       
     
   );
}

export default CustomEmailField;