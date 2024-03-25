import { appLabels } from "@/app/appLabels";
import ProfileButton from "../1sm/ProfileButton";

export default function PageUpper() {
  return (
    <>
      <div className="section bg-primary text-primary flex-col">
        <div className="content flex-row py-2 items-center">
          <h4 className="text-2xl">{appLabels.title}</h4>
          <ProfileButton />
        </div>
      </div>
    </>
  );
}
