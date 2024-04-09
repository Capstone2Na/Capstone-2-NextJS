import React from "react";

import { LineChart } from "@mui/x-charts";
import { fetchAllData } from "@/services/water.service";
import { X } from "@mui/icons-material";

const Charts = async ({
  xAxis,
  series,
  width,
  height,
}: {
  xAxis: any;
  series: any;
  width: number;
  height: number;
}) => {
  const data = await fetchAllData();
  try {
    console.log(data);
    xAxis = [1, 2, 3, 4, 5, 6, 7];
    series = [data.v0, data.v1, data.v2, data.v3, data.v4, data.v5, data.v9];
  } catch (error) {
    console.log("Error displaying data.");
  }
  return (
    <LineChart xAxis={xAxis} series={series} width={width} height={height} />
  );
};

export default Charts;
