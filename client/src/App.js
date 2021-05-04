import React from 'react'
//RA 
import { Admin } from 'react-admin'

//API FOR Posts and Users data from https://jsonplaceholder.typicode.com
import jsonServerProvider from 'ra-data-json-server';



function App() {
  return (
    <Admin 
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
      >
    </Admin>
  )
}

export default App
