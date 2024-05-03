"use client";
import React from "react";
import LineCharts from "../molecules/LineCharts";

export default function WaterQualityCharts({
  phValues,
  turbidityValues,
  temperatureValues,
  timeStamps,
}: {
  phValues: number[];
  turbidityValues: number[];
  temperatureValues: number[];
  timeStamps: string[];
}) {
  return (
    <>
      <div className="w-full flex flex-col gap-2 rounded-md overflow-hidden bg-tertiary">
        <h6 className="bg-blue-300 px-4 py-2 text-sm lg:text-lg">
          Water Quality History
        </h6>
        <div className="flex flex-col gap-8 my-4">
          <LineCharts
            timeStamp={timeStamps}
            data={phValues}
            label="PH Level"
            // value={parseFloat(phAverage.toFixed(2))}
            key={1}
          />

          <LineCharts
            timeStamp={timeStamps}
            data={turbidityValues}
            label="Turbidity (NTU)"
            // value={parseFloat(turbidityAverage.toFixed(2))}
            key={2}
          />

          <LineCharts
            timeStamp={timeStamps}
            data={temperatureValues}
            label="Temperature"
            // value={parseFloat(temperatureAverage.toFixed(2))}
            key={3}
          />
        </div>
      </div>
    </>
  );
}
