import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
  useResourceContext,
  ChipField,
} from 'react-admin'

const DisplayName = () => {
  const {resource} = useResourceContext();
  return <>{resource}</>;
}

const ClassList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ChipField source='id'/>
        <ImageField source="url" />
        <TextField source="title"/>
      </Datagrid>
    </List>
  )
}

export default ClassList