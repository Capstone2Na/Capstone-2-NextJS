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
    <h6 className="ml-3">
      {appLabels.dashboard.totalWaterUsage.title}:{" "}
      <span className="font-bold">
        {totalVolume} {appLabels.dashboard.totalWaterUsage.unit}
      </span>
    </h6>
  );
};

export default TotalVolumeComponent;
