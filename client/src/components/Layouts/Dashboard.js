import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import {Line,Pie} from "react-chartjs-2";
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 2fr);
width:auto;
gap:3rem;
margin-top:6rem;
`;

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Revenue",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#00acc1",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const state = {
    labels: ["Orders", "Returns", "Ongoing",],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        hoverOffset: 4,
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
          ],
        data: [35, 10, 20]
    }]
  };


const Dashboard = () => (
    <Card>
        <Title style={{textAlign:"center"}}title="Astro-School" />
        <CardContent>Students and Teachers Admin Panel </CardContent>
        <Wrapper>
        
            <div>
            <Paper elevation={3} >
          
        <Line
            data={data}
            options={{
              title: {
                display: true,
                text: "Revenue Overview",
                fontSize: 30,
              },
              legend: {
                display: false,
              },
            }}
          />
         </Paper>
          </div>
         
         
          <div>
          <Paper elevation={3} >
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: "Orders Overview",
                fontSize: 20,
              },
              legend: {
                display: false,
              },
            }}
          />
           </Paper>
              </div>
          </Wrapper>
    </Card>
);
export default Dashboard;