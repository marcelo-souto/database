<<<<<<< HEAD
import React from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';
import Legend from './Legend';

Chart.register(ArcElement, Tooltip);
Chart.defaults.color = '#FFF';

function PieChart({ data, setCompanyChart }) {
  const chartRef = React.useRef();

  function onClick(event) {
    const companyId = getElementAtEvent(chartRef.current, event)[0].index;
    setCompanyChart(companyId);
  }

  return (
    <div style={{ width: '460px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Pie
        onClick={onClick}
        ref={chartRef}
        data={{
          labels: data.map(({ company }) => company),
          datasets: [
            {
              label: 'Quantidade de jogos em %',
              data: data.map(({ percent }) => percent),
              backgroundColor: data.map(({ color }) => color),
              borderColor: ['rgba(255, 255, 255, 0.05)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              titleFont: {
                family: "'Poppins', sans-serif",
                weight: 500,
                size: 20,
              },
              bodyFont: {
                size: 18
              }
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <Legend setCompanyChart={setCompanyChart} data={data} />
    </div>
  );
}

export default PieChart;
=======
import React from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';
import Legend from './Legend';

Chart.register(ArcElement, Tooltip);
Chart.defaults.color = '#FFF';

function PieChart({ data, setCompanyChart }) {
  const chartRef = React.useRef();

  function onClick(event) {
    const companyId = getElementAtEvent(chartRef.current, event)[0].index;
    setCompanyChart(companyId);
  }

  return (
    <div style={{ width: '460px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Pie
        onClick={onClick}
        ref={chartRef}
        data={{
          labels: data.map(({ company }) => company),
          datasets: [
            {
              label: 'Quantidade de jogos em %',
              data: data.map(({ percent }) => percent),
              backgroundColor: data.map(({ color }) => color),
              borderColor: ['rgba(255, 255, 255, 0.05)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              titleFont: {
                family: "'Poppins', sans-serif",
                weight: 500,
                size: 20,
              },
              bodyFont: {
                size: 18
              }
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <Legend setCompanyChart={setCompanyChart} data={data} />
    </div>
  );
}

export default PieChart;
>>>>>>> 0110a05 (pages)
