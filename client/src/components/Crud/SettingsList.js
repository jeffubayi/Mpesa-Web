import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  EditButton,
  DeleteButton,
  useResourceContext,
  ChipField,
  UrlField,
  ReferenceInput,
  Filter,
  SelectInput,TextInput,SimpleList,
} from 'react-admin'
import ProfileCard from "../Layouts/ProfileCard.js"
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  web: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 10px',
  },
  mail: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 10px',
  },
  priceCell: { fontWeight: 'bold' },
});

const WebField = props => {
  const classes = useStyles();
  return <UrlField className={classes.web} {...props} />;
};

const MailField = props => {
  const classes = useStyles();
  return <EmailField className={classes.mail} {...props} />;
};


const InputField = props => {
  const classes = useStyles();
  return <TextField cellClassName={classes.priceCell} {...props} />;
};

const DisplayName = () => {
  const {resource} = useResourceContext();
  return <>{resource}</>;
}

const SettingsList = (props) => {
    
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title="All users" {...props}>
    {isSmall ? (
        <SimpleList
        primaryText={record => record.id}
        secondaryText={record => record.email}
        tertiaryText={record => record.phone}
        />
    ) : (
        <Datagrid>
            <TextField source='id' />
            <InputField source='name' />
            <MailField source='email' />
           <NumberField source='phone' />
           <EditButton basePath='/users' />
        </Datagrid>
    )}
</List>
  )
}

export default SettingsList



