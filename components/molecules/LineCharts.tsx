import { LineChart } from "@mui/x-charts/LineChart";
import dynamic from "next/dynamic";

const data = [6.2, 7.4, 7, 6.8, 6.7, 7.2, 7.44];
const timeSeries = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
export default function LineCharts({
  timeSeries,
  data,
  label,
  value,
  props,
}: {
  timeSeries: string[] | any;
  data: number[];
  label: string;
  value: number;
  props?: any;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:pl-8 lg:pr-4 items-center ">
      <div className="lg:w-[20%] flex flex-col gap-6 mt-14 pl-4">
        <h4> {label}</h4>
        <h1 className="text-xs lg:text-base">{value}</h1>
      </div>
      {/* <div className="lg:w-[70%] rounded-md bg-blue-200 px-2 py-1 lg:px-4 lg:py4"> */}
      <LineChart
        skipAnimation={true}
        xAxis={[{ data: timeSeries, scaleType: "point" }]}
        series={[{ data }]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
        sx={{ width: "100%", minWidth: 300 }}
      />
      {/* </div> */}
    </div>
  );
}
