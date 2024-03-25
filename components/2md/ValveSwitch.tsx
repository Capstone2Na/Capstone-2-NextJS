"use client";
import { useState, useEffect, useContext } from "react";
import Switch from "react-switch";
import {
  FetchWaterContext,
  FetchWaterContextType,
} from "@/services/water.service";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);
  const { valveState } = useContext(FetchWaterContext) as FetchWaterContextType;
  const valveStateURL = process.env.NEXT_PUBLIC_API_VALVE_STATE;
  const setValveState = process.env.NEXT_PUBLIC_API_SET_VALVE_STATE;

  useEffect(() => {
    if (valveState == 0) {
      if (checked !== false) {
        setChecked(false);
      }
    } else {
      setChecked(true);
    }
  }, [valveState, checked]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!valveStateURL) {
          throw new Error("valveStateURL is not defined");
        }
        const response = await fetch(valveStateURL);
        const text = await response.text();
        if (!text) {
          throw new Error("No response from server");
        }
        const data = JSON.parse(text);
        const switchState = data == "1";
        setChecked(switchState);
      } catch (error) {
        console.error("There's Error:", error);
      }
    };
    fetchData();
  });

  const handleChange = (checked: boolean) => {
    console.log(checked);
    setChecked(checked);

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
      .then((data) => console.log(data))
      .catch((error) => console.error("There's Error:", error));
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <label htmlFor="material-switch">
        <Switch
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
      <h1 className="text-sm">Valve Switch</h1>
    </div>
  );
};

export default SwitchComponent;
