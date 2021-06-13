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
  SelectInput,TextInput,
  ReferenceField,
  CreateButton,
  TopToolbar,
} from 'react-admin'
import ProfileCard from "../Layouts/ProfileCard.js"
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

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

const ListActions = () => (
  <TopToolbar>
      <CreateButton
       label="Add Users"
       variant="contained" 
       color="primary"
       size="small"
       to="/users/create"
      />
  </TopToolbar>
);
const UserFilter = props => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn  />
      <ReferenceInput
          label="User"
          source="userId"
          reference="users"
          allowEmpty
      >
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

const UserList = (props) => {
  return (
    <List {...props}  actions={<ListActions />} filters={<UserFilter />}>
      <Datagrid>
        <TextField source='id' />
        <ChipField source="name"  size="large" color="primary" variant="outlined"  avatar={<Avatar src="data:image/jpeg;base64,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"/>}/>
        <MailField source='email' />
        <ChipField source="username" />
        <WebField source="website" />
        <NumberField source='phone' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users'  />
      </Datagrid>
    </List>
  )
}

export default UserList
