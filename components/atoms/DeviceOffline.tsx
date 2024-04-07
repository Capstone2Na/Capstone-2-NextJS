"use client";

import dynamic from "next/dynamic";
import { useContext } from "react";
import {
  FetchWaterContext,
  FetchWaterContextType,
} from "@/services/water.service";

const IsDeviceOffline = () => {
  const { deviceOnline } = useContext(
    FetchWaterContext
  ) as FetchWaterContextType;
  return (
    <div
      className={`${
        deviceOnline ? "hidden" : ""
      } absolute top-0 left-0 right-0 bottom-0 w-full h-full backdrop-blur-sm grid place-items-center`}
    >
      <div className="bg-primary text-center border rounded-lg px-10 py-6  ">
        <h1 className="text-primary pb-2">
          <span className="font-bold animate-pulse duration-300">
            Waiting...
          </span>
        </h1>
        <h5 className="font-normal text-red-400">Device Offline</h5>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(IsDeviceOffline), { ssr: true });
