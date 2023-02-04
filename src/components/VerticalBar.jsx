import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export function VerticalBar({charData,options}) {
  return <Bar data={charData} options={options}/>;
}

export default VerticalBar