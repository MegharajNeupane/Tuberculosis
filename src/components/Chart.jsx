import React from "react";
import { Line, Doughnut, defaults, Bar } from "react-chartjs-2";

defaults.global.legend.position = "top";

function Chart() {
  return (
    <div class="main-chartcard">
      <div class="chartcard">
        <div class="chart-container">
          <Line
            height={150}
            width={500}
            data={{
              labels: [
                "Baishak",
                "Jestha",
                "Asar",
                "Shrwan",
                "Bhadra",
                "Asoj",
                "kartik",
                "Mangsir",
                "Poush",
                "Magh",
                "Falgun",
                "Chaitra",
              ],
              datasets: [
                {
                  data: [30, 60, 20, 50, 70, 90, 60, 40, 50, 60, 80, 10],
                  backgroundColor: "#98F6BE",
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Tuberculosis Patient in Months",
                fontSize: 15,
              },
              legend: {
                display: false,
              },
              maintainAspectRatio: false,

              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>

      <div class="chartcard">
        <div class="chart-container">
          <Doughnut
            height={170}
            data={{
              labels: ["Male", "Female"],
              datasets: [
                {
                  label: "Number of Male And Female Tuberculosis Patient",
                  data: [500, 700],
                  backgroundColor: ["#F68F5C", "#E6F65C "],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Number of Male and Female Patient",
                fontSize: 15,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
      <div class="chartcard">
        <div class="chart-container">
          <Bar
            height={180}
            width={340}
            data={{
              labels: ["PBC", "PCD", "Ep"],
              datasets: [
                {
                  data: [120, 180, 220],
                  backgroundColor: ["#E0301D ", "#E6F65C ", "#F1948A "],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "TB Distribution by Type",
                fontSize: 15,
              },
              legend: {
                display: false,
                position: "right",
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 30,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;
