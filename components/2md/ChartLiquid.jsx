"use client";
import LiquidChart from "react-liquidchart";
import PropTypes from "prop-types";

const ChartLiquid = ({ value, color }) => {
  const stops = [
    <stop key={1} stopColor={color} offset="10%" />,
    <stop key={2} stopColor={color} offset="50%" />,
    <stop key={3} stopColor={color} offset="95%" />,
  ];

  return (
    <LiquidChart
      responsive
      legend="Water Tank Filled Percentage"
      value={value}
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
      legendFontSize={0.1}
    />
  );
};

ChartLiquid.propTypes = { value: PropTypes.number, color: PropTypes.string };

export default ChartLiquid;
