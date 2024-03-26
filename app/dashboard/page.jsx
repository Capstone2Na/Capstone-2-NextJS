"use client";
import HomeWaterQuality from "@/components/organisms/HomeWaterQuality";
import HomeWaterFlow from "@/components/organisms/HomeWaterFlow";
import ValveSwitch from "@/components/molecules/ValveSwitch";
import {
  FetchWaterContext,
  fetchAllData,
  fetchStatus,
} from "@/services/water.service";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [deviceOnline, setDeviceOnline] = useState(true);
  const [phValue, setPhValue] = useState(0);
  const [flowRate, setFlowRate] = useState(0);
  const [turbidityValue, setTurbidityValue] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [waterTemp, setWaterTemp] = useState(0);
  const [valveState, setValveState] = useState(true);
  const [doneSwitching, setdoneSwitching] = useState(false);

  const executeFetchAllData = async () => {
    try {
      const data = await fetchAllData();
      console.log(data);
      setPhValue(data.v0);
      setFlowRate(data.v1);
      setTurbidityValue(data.v2);
      setWaterLevel(data.v3);
      setTotalVolume(data.v4);
      setWaterTemp(data.v5);
      setValveState(data.v9);
      setdoneSwitching(true);
    } catch (error) {
      console.error("Error fetching all:", error);
    }
  };

  const executeFetchStatus = async () => {
    try {
      const statusBool = await fetchStatus();
      setDeviceOnline(statusBool);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    executeFetchStatus();
    const runFetchAllData = setInterval(executeFetchAllData, 3000);
    const runCheckStatus = setInterval(executeFetchStatus, 5000);
    return () => {
      clearInterval(runFetchAllData);
      clearInterval(runCheckStatus);
    }; // Clean up the intervals on component unmount
  }, []);

  useEffect(() => {
    console.log(`Device Online? : ${deviceOnline}`);
  }, [deviceOnline]);

  return (
    <>
      <FetchWaterContext.Provider
        value={{
          phValue,
          flowRate,
          turbidityValue,
          waterLevel,
          totalVolume,
          waterTemp,
          valveState,
          doneSwitching,
          setdoneSwitching,
        }}
      >
        <div className="mx-auto content h-max overflow-x-hidden overflow-y-auto text-secondary max-h-lvh lg:max-w-1/2 md:h-min lg:h-full flex flex-col lg:flex-row justify-between items-center lg:items-start lg:pt-6">
          <HomeWaterFlow />
          <div className="w-full lg:h-min lg:max-w-1/2 lg:ml-3 h-full flex flex-col justify-between mt-3 lg:mt-0 items-center lg:gap-4">
            <HomeWaterQuality />
            <ValveSwitch />
          </div>
        </div>
      </FetchWaterContext.Provider>
    </>
  );
};

export default Dashboard;
