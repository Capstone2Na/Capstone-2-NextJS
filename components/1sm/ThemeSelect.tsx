"use client";
import React, { useContext } from "react";
import SettingsBtns from "./SettingsBtns";
import { Switch } from "@mui/material";
import { ThemeContext } from "@/context/ThemeContext";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const ThemeSelect = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <SettingsBtns
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      btnText="Mode"
      optText="Light and Dark"
      icon={<NightsStayIcon />}
    >
      <Switch checked={theme === "dark"} color="default" />
    </SettingsBtns>
  );
};

export default ThemeSelect;
