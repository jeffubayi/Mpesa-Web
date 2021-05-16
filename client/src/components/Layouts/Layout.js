import * as React from 'react';
import { Layout } from 'react-admin';
import TopNav from './MyAppBar';
import SideNav from './Menu';
import MyNotification from './MyNotification'

const MyLayout = (props) => 
<Layout
    {...props}
    appBar={TopNav}
    menu={SideNav}
    notification={MyNotification}
/>;

export default MyLayout;