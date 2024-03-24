import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import MainButtons from "../1sm/MainButtons";

const PageBottomButtons: React.FC = () => {
  return (
    <div className="w-screen bg-primary">
      <div className="content flex-row justify-between w-full mx-auto">
        <MainButtons to="/">
          <HomeIcon />
        </MainButtons>
        <MainButtons to="/dashboard">
          <SpeedIcon />
        </MainButtons>
        <MainButtons to="/analytics">
          <TimelineIcon />
        </MainButtons>
      </div>
    </div>
  );
};

export default PageBottomButtons;
