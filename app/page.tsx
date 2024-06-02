import Image from "next/image";
import Link from "next/link";
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
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: true });
