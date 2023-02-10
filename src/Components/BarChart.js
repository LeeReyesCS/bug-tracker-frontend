import React from "react";
import './BarChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// import { Chart as ChartJS } from 'chart.js/auto';
const BarChart = ({chartData}) => {

  let blockedCount= 0;
  let unclaimedCount = 0;
  let inProgressCount = 0;
  let solvedCount = 0;
  let reviewCount = 0;
  let upNextCount = 0;

  const countStatus = (chartData, word, count) => {

    chartData?.map((chartData) => {
      if (chartData.status === word) {
        count +=1;
      }
      return count;
    })
    return count;   
  }




  // setchartInfo(chartData.status);
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bug Status',
      },
    },
  };
  const labels = ["Unclaimed","In Progress", "Up Next", "Needs Review", "Blocked", "Solved"];
  const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [countStatus(chartData,"Unclaimed",unclaimedCount), 
      countStatus(chartData,"In Progress",inProgressCount), 
      countStatus(chartData,"Up Next",upNextCount),
      countStatus(chartData,"Needs Review",reviewCount),
      countStatus(chartData,"Blocked",blockedCount), 
      countStatus(chartData,"Solved",solvedCount)],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
};


  return (
    <div className="bar-chart" >
  <Bar data ={data} options = {options}/>
  </div>
  )
}

export default BarChart;