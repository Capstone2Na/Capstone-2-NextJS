import axios from "axios";
import { createContext } from "react";

type Data = {
  v0: Number; // Example: pH value
  v1: Number; // Example: Flow rate
  v2: Number; // Example: Turbidity value
  v3: Number; // Example: Water level
  v4: Number; // Example: Total volume
  v5: Number; // Example: Water temperature
  v6: Number; // Example: is auto Switching
  v8: Number; // Example: Flow calibration factor
  v9: Number; // Example: Valve Switch Status
};

export interface FetchWaterContextType {
  fetchAllData: () => Promise<Data>;
  fetchStatus: () => Promise<boolean>;
  changeCalibrationValue: () => Promise<number>;
  setdoneSwitching: (doneSwitching: boolean) => void;
  phValue: number;
  flowRate: number;
  turbidityValue: number;
  waterLevel: number;
  totalVolume: number;
  waterTemp: number;
  isAutoSwitching: number;
  switchStatus: number;
  valveState: number;
  doneSwitching: boolean;
  deviceOnline: boolean;
  flowcalibrationFactor: number;
  setFlowCalibrationFactor: (flowcalibrationFactor: number) => void;
}

// Create context
export const FetchWaterContext: React.Context<FetchWaterContextType> =
  createContext<FetchWaterContextType>({
    setdoneSwitching: () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    fetchAllData: async () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    fetchStatus: async () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    setFlowCalibrationFactor: () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    changeCalibrationValue: async () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    phValue: 0,
    flowRate: 0,
    turbidityValue: 0,
    waterLevel: 0,
    totalVolume: 0,
    waterTemp: 0,
    switchStatus: 0,
    valveState: 0,
    isAutoSwitching: 0,
    doneSwitching: false,
    flowcalibrationFactor: 0,
    deviceOnline: false,
  });

// Fetch all data
export const fetchAllData = async (): Promise<Data> => {
  const fetchAllDataURL: string = process.env.NEXT_PUBLIC_API_URL_GETALL!;
  try {
    const response = await axios.get<Data>(fetchAllDataURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching all:", error);
    throw error;
  }
};

// Fetch device status if offline or online
export const fetchStatus = async (): Promise<boolean> => {
  const deviceStatusAPI_URL: string =
    process.env.NEXT_PUBLIC_API_DEVICE_STATUS!;
  try {
    const response = await axios.get<boolean>(deviceStatusAPI_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching device status:", error);
    throw error;
  }
};

export const changeCalibrationValue = async (value: number): Promise<void> => {
  const blynkToken = process.env.NEXT_PUBLIC_API_TOKEN;
  try {
    await axios.get("https://sgp1.blynk.cloud/external/api/update", {
      params: {
        token: blynkToken,
        pin: "V8",
        value: value,
      },
    });
    console.log("Water Flow Calibration Value Set Successfully");
  } catch (err) {
    console.log("Error setting new Water Flow Calibration Value:", err);
  }
};
