import axios from "axios";
import { createContext, useContext } from "react";

type Data = {
  v0: Number; // Example: pH value
  v1: Number; // Example: Flow rate
  v2: Number; // Example: Turbidity value
  v3: Number; // Example: Water level
  v4: Number; // Example: Total volume
  v5: Number; // Example: Water temperature
  v9: Number; // Example: Valve Switch Status
};

export interface FetchWaterContextType {
  fetchAllData: () => Promise<Data>;
  fetchStatus: () => Promise<boolean>;
  phValue: number;
  flowRate: number;
  turbidityValue: number;
  waterLevel: number;
  totalVolume: number;
  waterTemp: number;
  switchStatus: number;
  valveState: number;
}

// Create context
export const FetchWaterContext: React.Context<FetchWaterContextType> =
  createContext<FetchWaterContextType>({
    fetchAllData: async () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    fetchStatus: async () => {
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
