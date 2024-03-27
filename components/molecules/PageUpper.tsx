import { appLabels } from "@/app/appLabels";
import ProfileButton from "../atoms/ProfileButton";
import { Righteous } from "next/font/google";

const logoFont = Righteous({
  weight: "400",
  subsets: ["latin-ext"],
  preload: true,
});
export default function PageUpper() {
  return (
    <>
      <div
        className={` ${logoFont.className} section bg-primary text-primary flex-col  `}
      >
        <div className="content flex-row py-2 items-center">
          <h4 className="text-2xl md:text-3xl tracking-wider font-thin">
            {appLabels.title}
          </h4>
          <ProfileButton />
        </div>
      </div>
    </>
  );
}
