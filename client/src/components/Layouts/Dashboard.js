import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Dashboard = () => (
    <Card>
        <Title style={{textAlign:"center"}}title="Astro-School" />
        <CardContent>Students and Teachers Admin Panel </CardContent>
    </Card>
);
export default Dashboard;