"use client";
import { useContext } from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});
import { FetchWaterContext } from "../../services/water.service";

const PhComponent = () => {
  const { phValue } = useContext(FetchWaterContext);

  return (
    <>
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
              limit: 3.5,
              color: "#EA4228",
              showTick: true,
              tooltip: {
                text: "Water is too Acidic!",
              },
              onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
            },
            {
              limit: 5.5,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "Acidic Water",
              },
            },
            {
              limit: 8.5,
              color: "#5BE12C",
              showTick: true,
              tooltip: {
                text: "Safe Water",
              },
            },
            {
              limit: 10.5,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "Water Slightly Alkaline",
              },
            },
            {
              color: "#EA4228",
              tooltip: {
                text: "Water Too Alkaline",
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
            hide: true,
            formatTextValue: (value) => "ph: " + value,
          },
          tickLabels: {
            defaultTickLineConfig: {
              length: 3,
            },
            defaultTickValueConfig: {
              style: {
                fontSize: 10,
                fill: "",
              },
            },
            type: "outer",
            valueConfig: {
              formatTextValue: (value) => "ph: " + value,
            },
          },
        }}
        value={phValue}
        minValue={0}
        maxValue={14}
      />
    </>
  );
};

export default PhComponent;
