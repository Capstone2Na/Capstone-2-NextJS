"use client";
import { useState, useEffect, useContext } from "react";
import Switch from "react-switch";
import {
  disableSmartSwitch,
  enableSmartSwitch,
  FetchWaterContext,
  FetchWaterContextType,
  updateValveState,
} from "@/services/water.service";
import AutoSwitch from "./AutoSwitch";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [attemtingDisable, setAttemtingDisable] = useState(false);
  const [attemtingEnable, setAttemtingEnable] = useState(false);
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(false);
  const { valveState, doneSwitching, isAutoSwitching, setdoneSwitching } =
    useContext(FetchWaterContext) as FetchWaterContextType;

  useEffect(() => {
    if (isAutoSwitching == 1) {
      setAutoSwitchEnabled(true);
    } else if (isAutoSwitching == 0) {
      setAutoSwitchEnabled(false);
    } else {
      console.log("Error: Auto Switch state is not 0 or 1");
    }
  }, [isAutoSwitching]);

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
  }, [valveState, checked, isAutoSwitching]);

  const handleAutoSwitchEanble = async () => {
    setAttemtingEnable(true);
    try {
      await enableSmartSwitch();
      console.log("Auto Switch Enabled");
      setOpenDialog(false);
      setAutoSwitchEnabled(true);
      setAttemtingEnable(false);
    } catch (error) {
      console.error("There's Error:", error);
    }
  };

  const handleAutoSwitchDisable = async () => {
    setAttemtingDisable(true);

    try {
      await disableSmartSwitch();
      console.log("Auto Switch Disabled");
      setOpenDialog(false);
      setAutoSwitchEnabled(false);
      setAttemtingDisable(false);
    } catch (error) {
      console.error("There's Error:", error);
    }
  };

  const handleValveChange = async (checked: boolean) => {
    setdoneSwitching(false);

    try {
      updateValveState(checked ? 1 : 0);
      setChecked(checked);
    } catch (error) {
      console.error("Error Changing Valve State:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-2 mb-4 relative">
      <label htmlFor="material-switch">
        <Switch
          disabled={!doneSwitching || isAutoSwitching == 1}
          checked={checked}
          onChange={handleValveChange}
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
      <span className="text-xs ">
        <span className="opacity-80">{" Smart Switch: "}</span>
        <span
          className={`${isAutoSwitching ? "text-green-300" : "text-accent"}`}
        >
          {isAutoSwitching ? "Enabled" : "Disabled"}
        </span>
      </span>
      <AutoSwitch
        handleEnable={handleAutoSwitchEanble}
        handleDisable={handleAutoSwitchDisable}
        attemtingDisable={attemtingDisable}
        attemtingEnable={attemtingEnable}
        enabled={autoSwitchEnabled}
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleOpen={() => setOpenDialog(true)}
      />
    </div>
  );
};

export default SwitchComponent;
