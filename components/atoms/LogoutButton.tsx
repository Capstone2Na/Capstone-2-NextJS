import React from "react";
import SettingsBtns from "./SettingsBtns";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = () => {
  return (
    <SettingsBtns
      onClick={() => console.log("TestLogout")}
      btnText="Logout"
      icon={<LogoutIcon className="transform scale-x-[-1]" />}
    ></SettingsBtns>
  );
};

export default LogoutButton;
