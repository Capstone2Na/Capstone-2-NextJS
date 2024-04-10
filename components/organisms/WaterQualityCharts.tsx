"use client";
import * as React from "react";
import LineCharts from "../molecules/LineCharts";

export default function WaterQualityCharts() {
  const waterQualityData = [
    { timeStamp: "2024-04-02", ph: 6.5, turbidity: 310, temperature: 24 },
    { timeStamp: "2024-04-03", ph: 6.8, turbidity: 300, temperature: 23 },
    { timeStamp: "2024-04-04", ph: 7.0, turbidity: 290, temperature: 22 },
    { timeStamp: "2024-04-05", ph: 6.9, turbidity: 330, temperature: 26 },
    { timeStamp: "2024-04-06", ph: 6.7, turbidity: 325, temperature: 27 },
    { timeStamp: "2024-04-07", ph: 6.6, turbidity: 335, temperature: 28 },
    { timeStamp: "2024-04-08", ph: 6.4, turbidity: 340, temperature: 29 },
  ];
  const timeStamps = waterQualityData.map((data) => data.timeStamp);
  const phValues = waterQualityData.map((data) => data.ph);
  const turbidityValues = waterQualityData.map((data) => data.turbidity);
  const temperatureValues = waterQualityData.map((data) => data.temperature);

  const phAverage = phValues.reduce((a, b) => a + b, 0) / phValues.length;
  const turbidityAverage =
    turbidityValues.reduce((a, b) => a + b, 0) / turbidityValues.length;
  const temperatureAverage =
    temperatureValues.reduce((a, b) => a + b, 0) / temperatureValues.length;
  return (
    <>
      <div className="w-full flex flex-col gap-3 rounded-md overflow-hidden bg-tertiary">
        <h1 className="bg-blue-300 px-4 py-2">Water Quality History</h1>
        <div className="flex flex-col gap-16 my-4">
          <LineCharts
            timeSeries={timeStamps}
            data={phValues}
            label="PH Level"
            value={parseFloat(phAverage.toFixed(2))}
            key={1}
          />

          <LineCharts
            timeSeries={timeStamps}
            data={turbidityValues}
            label="Turbidity (NTU)"
            value={parseFloat(turbidityAverage.toFixed(2))}
            key={2}
          />

          <LineCharts
            timeSeries={timeStamps}
            data={temperatureValues}
            label="Temperature"
            value={parseFloat(temperatureAverage.toFixed(2))}
            key={3}
          />
        </div>
      </div>
    </>
  );
}
