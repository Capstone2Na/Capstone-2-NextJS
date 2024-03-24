import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, IconButton, Typography } from "@mui/material";
import ProfileButton from "../1sm/ProfileButton";
// import Button from "@mui/material/Button";

export default function PageUpper() {
  return (
    <>
      <Box className="section bg-primary text-primary flex-col">
        <Box className="content flex-row py-2 items-center">
          <Typography variant="h4" className="text-2xl">
            AWMMS
          </Typography>
          <ProfileButton />
        </Box>
        {/* <Button variant="contained">text test testooo</Button> */}
      </Box>
    </>
  );
}
