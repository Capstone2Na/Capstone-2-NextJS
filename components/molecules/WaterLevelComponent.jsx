"use client";
import dynamic from "next/dynamic";
const LiquidChart = dynamic(() => import("react-liquidchart"), {
  ssr: false,
});
// const GaugeComponent = dynamic(() => import("react-gauge-component"), {
//   ssr: false,
// });
import { useContext } from "react";
import { FetchWaterContext } from "../../services/water.service";

const WaterLevelComponent = () => {
  const { waterLevel } = useContext(FetchWaterContext);

  const color = "rgb(147 197 253)";
  const stops = [
    <stop key={1} stopColor={color} offset="10%" />,
    <stop key={2} stopColor={color} offset="50%" />,
    <stop key={3} stopColor={color} offset="95%" />,
  ];

  return (
    <LiquidChart
      responsive
      value={waterLevel * 50}
      textRe
      amplitude={4}
      frequency={2}
      animationTime={2000}
      animationWavesTime={2250}
      gradient={{
        type: 1,
        x1: 0,
        x2: 0,
        y1: 100,
        y2: 0,
        stops,
      }}
      postfix="%"
      legendFontSize={0.4}
    />
    // <GaugeComponent
    //   minValue={0}
    //   maxValue={3}
    //   value={waterLevel}
    //   type="radial"
    //   labels={{
    //     tickLabels: {
    //       type: "inner",
    //       ticks: [{ value: 1 }, { value: 2 }, { value: 3 }],
    //     },
    //   }}
    //   arc={{
    //     colorArray: ["add8e6", "00b7eb", "#4169e1"],
    //     subArcs: [{ limit: 1 }, { limit: 2 }, { limit: 3 }],
    //     padding: 0.02,
    //     width: 0.3,
    //   }}
    //   pointer={{
    //     elastic: true,
    //     animationDelay: 0,
    //   }}
    // />
  );
};
export default WaterLevelComponent;
