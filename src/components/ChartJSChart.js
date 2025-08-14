import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pharmaceutical Sales & Trends',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Revenue Trend',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      data: [65, 59, 80, 81, 56, 55, 40],
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: 'Units Sold',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [28, 48, 40, 19, 86, 27, 90],
      yAxisID: 'y',
    },
    {
      type: 'bar',
      label: 'Inventory',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      data: [45, 25, 16, 36, 67, 18, 76],
      yAxisID: 'y',
    },
  ],
};

const ChartJSChart = () => {
  return <Chart type="bar" options={options} data={data} />;
};

export default ChartJSChart; 