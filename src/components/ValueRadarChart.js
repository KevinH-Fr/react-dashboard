// src/components/ValueRadarChart.js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register components
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ValueRadarChart = () => {
  const { value, randomNumbers } = useContext(AppContext);

  const data = {
    labels: ['Random Number 1', 'Random Number 2', 'Random Number 3', 'Random Number 4'],
    datasets: [
      {
        label: 'Values',
        data: [randomNumbers[0], randomNumbers[1], randomNumbers[2], randomNumbers[3]],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default ValueRadarChart;
