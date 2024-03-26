import React from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import UserProfile from "../molecules/UserProfile";
import SettingsSec from "../atoms/SettingsSec";
import ThemeSelect from "../atoms/ThemeSelect";
import ChangePassBtn from "../atoms/ChangePassBtn";
import LogoutButton from "../atoms/LogoutButton";
import { appLabels } from "@/app/appLabels";

const RightDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Drawer open={open} anchor="right">
      <div className="w-[100vw] max-w-3xl h-lvh bg-tertiary">
        <div className="p-2 flex flex-row items-center justify-center border-b border-gray-200 relative text-primary bg-primary h-16">
          <IconButton
            size="large"
            className="text-primary absolute left-2 top-0 bottom-0"
            onClick={handleClose}
          >
            <ArrowBackIosNew />
          </IconButton>
          <h6 className="text-xl font-bold">{appLabels.rightDrawer.label}</h6>
        </div>
        <div className="p-3 overflow-y-auto">
          {/* Settings Section */}
          <UserProfile />
        </div>
        <SettingsSec title={appLabels.rightDrawer.generalSettings}>
          <ThemeSelect />
        </SettingsSec>
        <SettingsSec title={appLabels.rightDrawer.accountSettings}>
          <ChangePassBtn />
          <LogoutButton />
        </SettingsSec>
      </div>
    </Drawer>
  );
};

export default RightDrawer;
