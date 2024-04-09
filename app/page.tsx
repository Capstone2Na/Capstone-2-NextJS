import Image from "next/image";
import Link from "next/link";
import { appLabels } from "./appLabels";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import { AppLogo } from "@/components/molecules/PageUpper";

function Home() {
  return (
    <>
      <Image
        fill={true}
        quality={100}
        src={"/HydroSync/Image1.jpg"}
        alt="HydroSync Lading Img"
        className=" object-cover  w-screen relative -z-50 filter brightness-50"
      />
      <div className=" absolute top-0 h-full w-full flex flex-col items-center bg-gradient-to-b from-transparent to-black opacity-90">
        <AppLogo
          className={"mx-auto mt-[30vh] text-5xl text-primary lg:text-6xl"}
        />
        <p className="text-tertiary text-xs md:text-sm lg:text-xl mt-2 md:mt-3">
          BSCpE 4 Capstone Project{" "}
        </p>
        <Link
          href={"/dashboard"}
          className="mt-2 animate-pulse duration-[2s] hover:animate-none "
        >
          <Button
            variant="outlined"
            className=" text-nowrap w-min bg-transparent hover:bg-buttonHover hover:text-secondary font-bold lg:text-lg lg:px-4 lg:py-2 "
          >
            Get Started
          </Button>
        </Link>
      </div>

      {/* <div className="content items-center overflow-x-hidden overflow-y-auto mx-auto h-full max-h-full text-secondary">
          <div className="flex flex-col pt-6">
            <h1 className="text-3xl font-semibold mb-2 text-center">
              Welcome to{" "}
              <span className="text-4xl font-bold">{appLabels.title}</span>
            </h1>
            <h2 className="text-sm font-semibold text-center">
              {appLabels.tagLine}
            </h2>
            <div className="my-4  h-60 border content items-center">
              <span className="text-green-500 text-center">
                Header Image: Image of a modern smart home with water management
                system installed
              </span>
            </div>

            <div>
              <p className="text-sm font-base">
                At HydroSync, we believe in empowering homeowners with smart
                technology to efficiently manage their water usage and ensure
                water quality. Our IoT Water Management System provides
                real-time monitoring and control features, allowing you to track
                water quality parameters, monitor usage, and water flow—all from
                the convenience of your mobile device in real time.
              </p>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: true,
  // loading: () => <Loading />,
});
