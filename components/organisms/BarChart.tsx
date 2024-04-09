"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import SelectTimeFrame from "../atoms/Select";

const dataset = [
  {
    totalWater: 21,
    month: "Apr",
  },
  {
    totalWater: 28,
    month: "May",
  },
  {
    totalWater: 41,
    month: "Jun",
  },
  {
    totalWater: 73,
    month: "Jul",
  },
  {
    totalWater: 99,
    month: "Aug",
  },
  {
    totalWater: 144,
    month: "Sep",
  },
  {
    totalWater: 62,
    month: "Oct",
  },
  {
    totalWater: 108,
    month: "Nov",
  },
  {
    totalWater: 131,
    month: "Dec",
  },
  {
    totalWater: 55,
    month: "Jan",
  },
  {
    totalWater: 48,
    month: "Feb",
  },
  {
    totalWater: 25,
    month: "Mar",
  },
];

const valueFormatter = (value: number | null) => `${value} Liters`;

const chartSetting = {
  yAxis: [
    {
      label: "Water Usage (Liters)",
    },
  ],
  series: [{ dataKey: "totalWater", valueFormatter }],
  height: 400,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function CustomBarchart() {
  const value = 244.02;
  return (
    <div className="w-full flex flex-col gap-3 rounded-md overflow-hidden bg-tertiary">
      <h1 className="bg-buttonHover px-4 py-2">Water Usage History</h1>
      <div className="flex lg:flex-row lg:pl-8 lg:pr-4">
        <div className="lg:w-[20%] flex flex-col gap-6 mt-6">
          <h4>Total in Liters:</h4>
          <h1 className="text-6xl">{value}</h1>
          <SelectTimeFrame />
        </div>
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "month",
              tickPlacement: "middle",
              tickLabelPlacement: "middle",
            },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
}
