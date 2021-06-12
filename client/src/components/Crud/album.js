import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ImageField
} from 'react-admin'

import Avatar from '@material-ui/core/Avatar';


const AlbumList = (props) => {
  return (
    <List {...props} >
      <Datagrid>
        <TextField source='id' />
        <ImageField style={{borderRadius:"50px"}}source='url' />
      </Datagrid>
    </List>
  )
}

export default AlbumList;
