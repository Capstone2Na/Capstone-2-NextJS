import { Box, Typography } from "@mui/material";
// import { cloneElement } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = () => {
  return (
    <Box className="flex flex-col items-center">
      <Box className="w-28">
        <AccountCircleIcon className="size-auto w-full text-tertiary" />
      </Box>
      <Typography
        variant="h4"
        className="text-center text-secondary opacity-90 pt-2 pb-1"
      >
        User Name
      </Typography>
      <Typography
        variant="h6"
        className="text-center text-secondary opacity-70"
      >
        email@email.com
      </Typography>
    </Box>
  );
};

export default UserProfile;
