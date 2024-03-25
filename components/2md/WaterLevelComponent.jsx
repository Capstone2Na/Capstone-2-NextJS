"use client";
import dynamic from "next/dynamic";
const LiquidChart = dynamic(() => import("react-liquidchart"), {
  ssr: false,
});
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
      // legend="Water Tank Level"
      value={waterLevel}
      showDecimal
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
  );
};
export default WaterLevelComponent;
