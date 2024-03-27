"use client";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import RightDrawer from "@/components/organisms/RightDrawer";

const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton
        size="large"
        className="text-inherit  object-cover"
        onClick={handleOpen}
      >
        <AccountCircleIcon className=" text-3xl lg:text-4xl" />
      </IconButton>
      <RightDrawer open={open} handleClose={handleClose} />
    </>
  );
};

export default ProfileButton;
