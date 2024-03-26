"use client";
import SettingsBtns from "./SettingsBtns";
import { Switch } from "@mui/material";
import { useTheme } from "next-themes";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const ThemeSelect = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <SettingsBtns
      onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
      btnText="Mode"
      optText="Light and Dark"
      icon={<NightsStayIcon />}
    >
      <Switch checked={theme === "dark"} color="default" />
    </SettingsBtns>
  );
};

export default ThemeSelect;
