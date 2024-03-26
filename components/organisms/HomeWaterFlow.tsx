import FlowRateComponent from "../molecules/FlowRateComponent";
import WaterLevelComponent from "../molecules/WaterLevelComponent";
import { appLabels } from "@/app/appLabels";
import TotalVolumeComponent from "../molecules/TotalVolumeComponent";
const HomeWaterFlow: React.FC = () => {
  return (
    <div className="w-full px-3 pb-4 bg-primary03 rounded-lg">
      <div className="flex flex-row w-full justify-center">
        <div className="w-2/3 md:w-3/5">
          <FlowRateComponent />
          <h4 className="flex flex-col items-center label -mt-4 justify-center">
            {appLabels.dashboard.flowRate.title}
            <span className="unit">{appLabels.dashboard.flowRate.unit}</span>
          </h4>
        </div>

        <div className="w-1/3 md:w-[28%] pr-3 flex flex-col items-center justify-start">
          <WaterLevelComponent />
          <h4 className="label -mt-12 md:-mt-20">
            {appLabels.dashboard.waterLevel.title}
          </h4>
        </div>
      </div>
      <div className="w-full flex pt-4 mt-4">
        <TotalVolumeComponent />
      </div>
    </div>
  );
};

export default HomeWaterFlow;
