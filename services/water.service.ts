import axios from "axios";
import { createContext } from "react";

const blynkToken = process.env.NEXT_PUBLIC_BLYNK_API_TOKEN;

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
  disableSmartSwitch: () => Promise<void>;
  enableSmartSwitch: () => Promise<void>;
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
    disableSmartSwitch: async () => {
      throw new Error("FetchWaterContext.Provider not found");
    },
    enableSmartSwitch: async () => {
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
  try {
    const url = "https://sgp1.blynk.cloud/external/api/getAll";
    const response = await axios.get<Data>(url, {
      params: {
        token: blynkToken,
      },
    });
    console.log("Fetching all Data...");
    return response.data;
  } catch (err) {
    console.log("Error fetching all Data:", err);
    throw err;
  }
};

// Fetch device status if offline or online
export const fetchStatus = async (): Promise<boolean> => {
  try {
    const url = "https://sgp1.blynk.cloud/external/api/isHardwareConnected";
    const response = await axios.get(url, {
      params: {
        token: blynkToken,
      },
    });
    console.log("Fetching device status...");
    console.log("Device online:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching device status:", err);
    throw err;
  }
};

export const changeCalibrationValue = async (value: number): Promise<void> => {
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

export const disableSmartSwitch = async (): Promise<void> => {
  const value = 0;
  try {
    const url = `https://sgp1.blynk.cloud/external/api/update`;
    await axios.get(url, {
      params: {
        token: blynkToken,
        V6: value,
      },
    });
    console.log(`Pin V6 set to ${value}`);
  } catch (err) {
    console.log("Error updating pin V6:", err);
  }
};

export const enableSmartSwitch = async (): Promise<void> => {
  const value = 1;
  try {
    const url = `https://sgp1.blynk.cloud/external/api/update`;
    await axios.get(url, {
      params: {
        token: blynkToken,
        V6: value,
      },
    });
    console.log(`Pin V6 (SmartSwitching) set to ${value}`);
  } catch (err) {
    console.log("Error updating pin V6:", err);
    throw err;
  }
};

export const updateValveState = async (value: number) => {
  try {
    const url = `https://sgp1.blynk.cloud/external/api/update`;
    await axios.get(url, {
      params: {
        token: blynkToken,
        V9: value,
      },
    });
    console.log(`Pin V9 (Valve State) set to ${value}`);
  } catch (err) {
    console.log("Error updating pin V9:", err);
    throw err;
  }
};
