import React from 'react'
import {TopToolbar, Edit, SimpleForm, TextInput, DateInput,ListButton } from 'react-admin'

const PostEditActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const PostEdit = (props) => {
  return (
    <Edit actions={<PostEditActions />}title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
