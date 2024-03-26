"use client";
import { Button, Typography } from "@mui/material";
import { cloneElement, ReactElement, ReactNode } from "react";

interface SettingsBtnsProps {
  icon: ReactElement; // Change type to ReactElement
  btnText: string;
  optText?: string;
  children?: ReactNode;
  onClick: () => void;
}

const SettingsBtns: React.FC<SettingsBtnsProps> = ({
  icon,
  btnText,
  optText,
  children,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className="flex flex-row justify-between items-center w-full h-12 relative"
    >
      <div className="flex flex-row gap-4 items-center">
        <div className="text-secondary flex items-center justify-center">
          {cloneElement(icon, {
            className: (icon.props.className || "") + " size-6", // Fix icon className handling
          })}
        </div>
        <div className="flex flex-col items-start justify-between">
          <Typography
            textTransform={"none"}
            variant="h6"
            className="text-tertiary text-center"
          >
            {btnText}
          </Typography>
          {optText && (
            <Typography
              textTransform={"none"}
              variant="body2"
              className="text-tertiary opacity-50 text-center"
            >
              {optText}
            </Typography>
          )}
        </div>
      </div>
      {children}
      <div className="absolute top-0 w-full h-full"></div>
    </Button>
  );
};

export default SettingsBtns;
