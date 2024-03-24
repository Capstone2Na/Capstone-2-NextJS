"use client";
import { Box, Typography } from "@mui/material";
import TurbidityComponent from "../2md/TurbidityComponent";
import PhComponent from "../2md/PhComponent";
import { useContext } from "react";
import { FetchWaterContext } from "../../services/water.service";

const HomeWaterQuality = () => {
  const { waterTemp, turbidityValue, phValue } = useContext(FetchWaterContext);
  return (
    <Box className=" flex flex-col w-full py-4 gap-3 bg-primary03 rounded-lg text-inherit">
      <Typography
        variant="h4"
        className=" text-center  flex-nowrap text-inherit text-sm"
      >
        Water Temperature:{" "}
        <span className="font-semibold text-base">
          {waterTemp}
          {" °C"}
        </span>
      </Typography>
      <Box className="flex flex-row w-full gap-1">
        <Box className="w-[46%] flex flex-col">
          <PhComponent value={14} />
          <Box className=" justify-center flex w-full">
            <Typography variant="body2 flex flex-col justify-center items-center text-xs">
              <span className="font-bold text-sm">{phValue.toFixed(2)}</span> PH
              Level
            </Typography>
          </Box>
        </Box>
        <Box className="w-[46%] flex flex-col">
          <TurbidityComponent />
          <Box className=" justify-center flex w-full">
            <Typography variant="body2 flex flex-col justify-center items-center text-xs">
              <span className="font-bold text-sm">
                {turbidityValue.toFixed(2)}
                {/* {"3000.0 NTU"} */}
              </span>
              Turbidity
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeWaterQuality;
