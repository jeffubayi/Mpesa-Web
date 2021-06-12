import React from 'react'
import Typography from '@material-ui/core/Typography';
import TimeLine from "../features/TimeLine"
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  BooleanField,
} from 'react-admin'
import CustomField from "../Layouts/CustomField"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    row: {
        color: 'orange',
    },
});
const Aside = () => (
  <div style={{ width: 200, margin: '1em' }}>
      <Typography variant="h6">Post details</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
     
  </div>
);

const PostList = (props) => {
  const classes = useStyles();
  return (
    <List aside={<Aside />} {...props}>
      <Datagrid classes={{ row: classes.row }}>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
        <CustomField/>
      </Datagrid>
    </List>
  )
}

export default PostList
