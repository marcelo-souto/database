import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);
Chart.defaults.color = '#FFF';

function PieChart({ data }) {
  return (
    <div style={{width: '460px'}}>
      <Pie
        data={{
          labels: data.map(({ company }) => company),
          datasets: [
            {
              label: 'Quantidade de jogos',
              data: data.map(({ quantity }) => quantity),
              backgroundColor: [
                ' #171A2E',
                ' #1C1F37',
                ' #272B4D',
                ' #343A66',
                ' #484F8C',
                ' #626CBF',
              ],
              borderColor: ['rgba(255, 255, 255, 0.05)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
        
            legend: {
              display: true,
              position: 'top',
              align: 'center',
              labels: {
                color:'#F5F5F5',
                textAlign: 'center',
                padding: 14,
                boxWidth: 40,
                font: {
                  family: "'Poppins', sans-serif",
                  size: 16
                }
              }
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
