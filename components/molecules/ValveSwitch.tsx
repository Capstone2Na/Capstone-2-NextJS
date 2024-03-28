"use client";
import { useState, useEffect, useContext, use } from "react";
import Switch from "react-switch";
import {
  FetchWaterContext,
  FetchWaterContextType,
} from "@/services/water.service";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);
  const { valveState, doneSwitching, setdoneSwitching } = useContext(
    FetchWaterContext
  ) as FetchWaterContextType;
  const setValveState = process.env.NEXT_PUBLIC_API_SET_VALVE_STATE;

  useEffect(() => {
    if (valveState == 0) {
      if (checked !== false) {
        setChecked(false);
      }
    } else if (valveState == 1) {
      if (checked !== true) {
        setChecked(true);
      }
    } else {
      console.log("Error: Valve state is not 0 or 1");
    }
  }, [valveState, checked]);

  const handleChange = (checked: boolean) => {
    setdoneSwitching(false);
    const url = checked
      ? setValveState + "1" // Set switch to ON
      : setValveState + "0"; // Set switch to OFF

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(() => {
        setChecked(checked);
      })
      .catch((error) => console.error("There's Error:", error));
  };

  return (
    <div className="flex flex-col justify-center items-center pt-2">
      <label htmlFor="material-switch">
        <Switch
          disabled={!doneSwitching}
          checked={checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={true}
          checkedIcon={true}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={40}
          width={88}
          className="react-switch"
          id="material-switch"
        />
      </label>
      <h1 className="label">Valve Switch</h1>
    </div>
  );
};

export default SwitchComponent;
