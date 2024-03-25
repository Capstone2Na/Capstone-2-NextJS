import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import MainButton from "../1sm/MainButton";

const PageBottomButtons: React.FC = () => {
  return (
    <div className="w-screen bg-primary">
      <div className="content flex-row justify-between w-full mx-auto">
        <MainButton to="/">
          <HomeIcon />
        </MainButton>
        <MainButton to="/dashboard">
          <SpeedIcon />
        </MainButton>
        <MainButton to="/analytics">
          <TimelineIcon />
        </MainButton>
      </div>
    </div>
  );
};

export default PageBottomButtons;
