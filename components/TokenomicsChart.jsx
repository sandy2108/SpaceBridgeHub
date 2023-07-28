import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TokenomicsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Liquidity', 'Staking rewards', 'Marketing', 'Cex Listing'],
      datasets: [{
        label: 'My First Dataset',
        data: [60, 20, 10, 10],
        backgroundColor: [
          '#800080', // White
          '#b46eb4', // Purple (Use the same shade you are using in your site)
          'gray', // Light Purple (A lighter shade of purple)
          'white',
        ],
        hoverOffset: 4,
      }],
    };

    const config = {
      type: 'doughnut',
      data: data,
    };

    // Check if the chartRef already has a Chart instance, and destroy it if it does
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    chartRef.current = new Chart(ctx, config);

    // Clean up: Destroy the Chart instance before unmounting the component
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas id="myDoughnutChart" width="200" height="100" />
  );
};

export default TokenomicsChart;
