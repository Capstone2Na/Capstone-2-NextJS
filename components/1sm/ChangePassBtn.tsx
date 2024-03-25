import React from "react";
import SettingsBtns from "./SettingsBtns";
import KeyIcon from "@mui/icons-material/Key";
const ChangePassBtn = () => {
  return (
    <SettingsBtns
      onClick={() => console.log("TestLogout")}
      btnText="Change Password"
      icon={<KeyIcon />}
    ></SettingsBtns>
  );
};

export default ChangePassBtn;
