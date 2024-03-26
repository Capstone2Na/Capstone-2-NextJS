"use client";
import { useContext } from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});
import { FetchWaterContext } from "../../services/water.service";

const FlowRateComponent = () => {
  const { flowRate } = useContext(FetchWaterContext);

  return (
    <>
      <GaugeComponent
        value={flowRate}
        type="radial"
        labels={{
          valueLabel: {
            formatTextValue: (value) => value,
          },
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              //   { value: 100 },
            ],
          },
        }}
        arc={{
          colorArray: ["#F79F92", "#EA4228"],
          subArcs: [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
        minValue={0}
        maxValue={99}
      />
    </>
  );
};

export default FlowRateComponent;
