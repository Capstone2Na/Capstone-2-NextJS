import { Typography } from "@mui/material";
import TurbidityComponent from "../molecules/TurbidityComponent";
import PhComponent from "../molecules/PhComponent";
import { useContext } from "react";
import { FetchWaterContext } from "../../services/water.service";
import { appLabels } from "@/app/appLabels";

const HomeWaterQuality = () => {
  const { waterTemp, turbidityValue, phValue } = useContext(FetchWaterContext);
  return (
    <div className=" flex flex-col w-full py-4 gap-3 bg-primary03 rounded-lg text-inherit">
      <h4 className=" text-center  flex-nowrap text-inherit text-sm">
        {appLabels.dashboard.waterQuality.temp.title}:{" "}
        <span className="font-semibold text-base">
          {waterTemp}
          {appLabels.dashboard.waterQuality.temp.unit}
        </span>
      </h4>
      <div className="flex flex-row w-full gap-1">
        <div className="w-[46%] flex flex-col">
          <PhComponent value={14} />
          <div className=" justify-center flex w-full">
            <Typography variant="body2 flex flex-col justify-center items-center text-xs">
              <span className="font-bold text-sm">{phValue.toFixed(2)}</span>
              {appLabels.dashboard.waterQuality.pH}
            </Typography>
          </div>
        </div>
        <div className="w-[46%] flex flex-col">
          <TurbidityComponent />
          <div className=" justify-center flex w-full">
            <Typography variant="body2 flex flex-col justify-center items-center text-xs">
              <span className="font-bold text-sm">
                {turbidityValue.toFixed(2)}
              </span>
              {appLabels.dashboard.waterQuality.turbidity.title}
              {` (${appLabels.dashboard.waterQuality.turbidity.unit})`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWaterQuality;
