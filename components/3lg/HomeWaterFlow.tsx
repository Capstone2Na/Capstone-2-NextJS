"use client";
import { Box, Typography } from "@mui/material";
import FlowRateComponent from "../2md/FlowRateComponent";
import WaterLevelComponent from "../2md/WaterLevelComponent";
import { useContext } from "react";
import { FetchWaterContext } from "../../services/water.service";
import { FetchWaterContextType } from "../../services/water.service";
const HomeWaterFlow: React.FC = () => {
  const { waterLevel, totalVolume } = useContext(
    FetchWaterContext
  ) as FetchWaterContextType;

  return (
    <Box className="w-full px-3 pb-4 bg-primary03 rounded-lg">
      <Box className="flex flex-row w-full justify-center">
        <Box className="w-2/3">
          <FlowRateComponent />
          <Typography
            variant="body2"
            className="flex flex-col items-center text-xs -mt-4 justify-center"
          >
            {"Flow Rate"}
            <span className="text-sm font-bold">{" (L/m)"}</span>
          </Typography>
        </Box>

        <Box className="w-1/3 pr-3 flex flex-col items-center justify-start">
          <WaterLevelComponent color={"rgb(147 197 253)"} value={waterLevel} />
          <Typography variant="body2" className="text-xs -mt-12">
            Water Level
          </Typography>
        </Box>
      </Box>
      <Box className="w-full flex pt-4 mt-4">
        <Typography variant="body1" className="ml-3 text-xs">
          Total Water Consumed:{" "}
          <span className="font-bold">
            {totalVolume}
            {" Liters"}
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeWaterFlow;
