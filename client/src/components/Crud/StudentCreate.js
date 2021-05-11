import React from 'react'
import { Create,  ArrayInput, SimpleFormIterator, DateInput, TextInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <ArrayInput source="id">
    <SimpleFormIterator>
        <DateInput source="date" />
        <TextInput source="url" />
    </SimpleFormIterator>
</ArrayInput>
    </Create>
  )
}

export default UserCreate
