// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const generateColors = (count: number) => {
  const baseColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];

  const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];

  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length]);
  }
  return colors;
};

const Chart = ({ data }: { data: { [key: string]: number } }) => {
  console.log(data);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Languages",
        data: Object.values(data),
        backgroundColor: generateColors(Object.values(data).length),
        borderColor: generateColors(Object.values(data).length).map((color) =>
          color.replace("0.2", "1")
        ), // Adjust border colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // responsive: true,
    plugins: {
      legend: {
        position: "bottom",

      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw}`,
        },
      },
    },
  } as any;

  return <Pie data={chartData} options={options} width={400} height={400} />;
};

export default Chart;
