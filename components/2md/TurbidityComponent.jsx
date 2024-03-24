"use client";
import { useContext } from "react";
// import GaugeComponent from "react-gauge-component";
import { FetchWaterContext } from "../../services/water.service";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

const TurbidityComponent = () => {
  const { turbidityValue } = useContext(FetchWaterContext);

  return (
    <GaugeComponent
      id="phGauge"
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        //   gradient: true,
        subArcs: [
          {
            limit: 300,
            color: "#5BE12C",
            showTick: true,
            tooltip: {
              text: "Safe Water",
            },
          },
          {
            limit: 1000,
            color: "#F5CD19",
            showTick: true,
            tooltip: {
              text: "Warning: Water slightly Alkaline",
            },
          },
          {
            color: "#EA4228",
            tooltip: {
              text: "Too high temperature!",
            },
          },
        ],
      }}
      pointer={{
        color: "#345243",
        length: 0.8,
        width: 15,
        elastic: true,
      }}
      labels={{
        valueLabel: {
          // formatTextValue: (value) => "Turbidity: " + value.toFixed(2),
          // fontSize: 1,
          hide: true,
        },
        tickLabels: {
          type: "outer",
          valueConfig: {
            fontSize: 10,
          },
          defaultTickLineConfig: {
            length: 3,
          },
          defaultTickValueConfig: {
            style: {
              fontSize: 7,
              fill: "",
            },
          },
        },
      }}
      value={turbidityValue}
      minValue={0}
      maxValue={3000}
    />
  );
};

export default TurbidityComponent;
