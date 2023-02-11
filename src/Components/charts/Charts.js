import { borderColor } from '@mui/system';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,LinearScale,BarElement,Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Bar } from 'react-chartjs-2';
import './Charts.css'

const Charts = ({chartData}) => {

  let lowCount = 0;
  let mediumCount = 0;
  let highCount = 0;

  const countPriority = (chartData,word,count) => {
    chartData?.map((chartData) => {
      if (chartData.priority === word) {
        count +=1;
      }
      return count;
    })
    return count;  
  }
  
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bugs by Priority',
    },
  },
};
  const data = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        label: '# of Bugs',
        data: [countPriority(chartData,"Low",lowCount),
        countPriority(chartData,"Medium",mediumCount),
        countPriority(chartData,"High",highCount)],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

let solvedBarCount = 0;
let unsolvedCount = 0;

const countSolved = (chartData,word,count) => {
  chartData?.map((chartData) => {
    if (chartData.status === word) {
      count +=1;
    }
    return count;
  })
  return count;  
}

const countUnsolved = (chartData,word,count) => {
  chartData?.map((chartData) => {
    if (chartData.status !== word) {
      count +=1;
    }
    return count;
  })
  return count;  
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title);

 const bar_options = {
  responsive: true,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: true,
      text: 'Solved vs. In Progress Bugs',
    },
  },
};
const labels = ["Unsolved", "Solved"];
const bar_data = {
labels,
datasets: [
  {
    label: ["Unsolved", "Solved"],
    data: [countUnsolved(chartData,"Solved",unsolvedCount), 
    countSolved(chartData,"Solved",solvedBarCount)],
    backgroundColor:['rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'],
    borderColor:['rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)']
  }]
};

  return (
    <div>
      <header>Progress Charts</header>
    <Carousel className='carousel-styling'>
    <div  className='chart-container'>
      <Doughnut data = {data} options = {options}/>
      </div>
      <div className='barchart-container'>
      <Bar data ={bar_data} options = {bar_options}/>
    </div>
    </Carousel>
    </div>
  )
}

export default Charts;