"use client";
import React, { ReactNode, use } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

type MainButtonProps = {
  children: ReactNode;
  to: string;
};

const MainButton: React.FC<MainButtonProps> = ({ children, to }) => {
  const childrenWithClass = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      className: "text-4xl ",
    });
  });

  const pathname = usePathname();

  return (
    <Link href={to}>
      <Button
        variant="contained"
        className={`py-3 w-[33vw] bg-transparent hover:bg-buttonHover text-primary ${
          pathname === to ? "bg-buttonHover" : ""
        } `}
        disableElevation
      >
        {childrenWithClass}
      </Button>
    </Link>
  );
};

export default MainButton;
