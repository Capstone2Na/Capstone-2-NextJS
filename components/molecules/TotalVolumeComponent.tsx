import { appLabels } from "@/app/appLabels";
import {
  FetchWaterContext,
  FetchWaterContextType,
} from "@/services/water.service";
import React, { useContext } from "react";

const TotalVolumeComponent = () => {
  const { totalVolume } = useContext(
    FetchWaterContext
  ) as FetchWaterContextType;

  return (
    <h4 className="text-lg font-bold md:text-2xl md:ml-20">
      {appLabels.dashboard.totalWaterUsage.title}:{" "}
      <span className="font-bold">
        {totalVolume} {appLabels.dashboard.totalWaterUsage.unit}
      </span>
    </h4>
  );
};

export default TotalVolumeComponent;
