"use client";
import { appLabels } from "@/app/appLabels";
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
      <h1 className="text-center border rounded p-4 bg-primary03 text-primary">
        <span className="font-bold">{appLabels.title}</span>
        <br />
        <br />
        <h5 className="font-normal text-accent">Device Offline</h5>
      </h1>
    </div>
  );
};

export default dynamic(() => Promise.resolve(IsDeviceOffline), { ssr: true });
