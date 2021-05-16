import React from 'react'
//RA 
import { Admin,Resource } from 'react-admin'
import PostList from './components/Crud/PostList'
import PostCreate from './components/Crud/PostCreate'
import PostEdit from './components/Crud/PostEdit'
import UserList from './components/Crud/StudentList'
import UserCreate from './components/Crud/StudentCreate'
import UserEdit from './components/Crud/StudentEdit'
import CommentList from './components/Crud/CommentList'
import TodoList from './components/Crud/TodoList'

//API FOR Posts and Users data from https://jsonplaceholder.typicode.com
import jsonServerProvider from 'ra-data-json-server';



function App() {
  return (
    <Admin 
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
      >
        <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='comments'
        list={CommentList}
      />
      <Resource
        name='todos'
        list={TodoList}
      />
    </Admin>
  )
}

export default App
