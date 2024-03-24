import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

type MainButtonsProps = {
  children: ReactNode;
  to: string;
};

const MainButtons: React.FC<MainButtonsProps> = ({ children, to }) => {
  const childrenWithClass = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      className: "text-4xl ",
    });
  });

  return (
    <Link href={to}>
      <Button
        variant="contained"
        className={`py-3 w-[33vw] bg-transparent hover:bg-buttonHover text-primary`}
        disableElevation
      >
        {childrenWithClass}
      </Button>
    </Link>
  );
};

export default MainButtons;
