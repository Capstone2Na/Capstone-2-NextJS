"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

const RightDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Drawer open={open} anchor="right">
      <div className="w-[100vw] max-w-3xl h-lvh">
        <div className="p-2 flex flex-row items-center justify-center border-b border-gray-200 relative text-primary bg-primary">
          <IconButton
            size="large"
            className="text-primary absolute left-2 top-0 bottom-0"
            onClick={handleClose}
          >
            <ArrowBackIosNew />
          </IconButton>
          <h6>User</h6>
        </div>
        <div className="p-3 overflow-y-auto"></div>
      </div>
    </Drawer>
  );
};

export default RightDrawer;
