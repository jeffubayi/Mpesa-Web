import * as React from "react";
import { Title } from 'react-admin';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Intro from "../features/Intro";
import Card from "../features/Card";

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 2fr);
width:auto;
gap:3rem;
margin-top:1rem;
`;

const Wrap = styled.div`
display: grid;
width:auto;
grid-template-columns: repeat(2, 2fr);
gap:1rem;
`;

const data = {
 labels: ["Liked", "Disliked", "Least Rated",],
  datasets: [
    {
      label: "Posts Overview",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#f50057",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const state = {
    labels: ["Likes", "Dislikes", "Low Rates",],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 2,
        maxBarThickness: 3,
        minBarLength: 1,
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
  <div>
    <Wrap>
    <Intro/>
    <Paper >
    {/* <Bar
             data={data}
             options={{
               title: {
                 display: true,
                 text: "Posts",
                 fontSize: 20,
               },
               legend: {
                 display: false,
               },
             }}
          /> */}
    </Paper>
    </Wrap>
    <h2 style={{textAlign:"center"}}>Latest Posts</h2>
        <Wrapper>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </Wrapper>
          </div>
);
export default Dashboard;