import React from 'react'
import { Create, SimpleForm, TextInput, DateInput,ReferenceInput, SelectInput  } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
       <ReferenceInput label="Post" source="post_id" reference="posts">
         <SelectInput optionText="title" />
      </ReferenceInput>
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
