import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import MainButton from "../atoms/MainButton";

const PageBottomButtons: React.FC = () => {
  return (
    <div className="w-full bg-primary">
      <div className="w-full flex flex-row justify-between mx-auto">
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
