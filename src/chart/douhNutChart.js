import { Doughnut } from "react-chartjs-2";
import {  Chart, ArcElement, Tooltip, Legend } from "chart.js";

const DoughNutChart = () => {
  Chart.register(ArcElement, Tooltip, Legend);
  const doughnutData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [10,5,5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={doughnutData} options={doughnutOptions}></Doughnut>;
};
export default DoughNutChart;
