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
import dashboard from "./components/Layouts/Dashboard"
import theme from  "./theme"

//icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StarsIcon from '@material-ui/icons/Stars';
import ChatIcon from '@material-ui/icons/Chat';
//API FOR Posts and Users data from https://jsonplaceholder.typicode.com
import jsonServerProvider from 'ra-data-json-server';


function App() {
  return (
    <Admin 
      theme={theme}
      dashboard={dashboard}
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
      >
        <Resource name="dashboard"/>
        <Resource
        name='posts'
        list={PostList}
        icon={HomeWorkIcon}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        icon={PeopleAltIcon}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='comments'
        list={CommentList}
        icon={ChatIcon}
      />
      <Resource
        name='todos'
        icon={StarsIcon}
        list={TodoList}
      />
    </Admin>
  )
}

export default App
