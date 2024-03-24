import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { cloneElement } from "react";

const SettingsBtns = ({ icon, btnText, optText, children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex flex-row justify-between items-center w-full h-12 relative"
    >
      <Box className="flex flex-row gap-4 items-center">
        <Box className=" text-secondary flex items-center justify-center">
          {cloneElement(icon, {
            className: icon.props.className
              ? icon.props.className + " size-6"
              : "size-6",
          })}
        </Box>
        <Box className="flex flex-col items-start justify-between">
          <Typography
            textTransform={"none"}
            variant="h6"
            className=" text-tertiary text-center"
          >
            {btnText}
          </Typography>
          {optText && (
            <Typography
              textTransform={"none"}
              variant="body2"
              className=" text-tertiary opacity-50 text-center"
            >
              {optText}
            </Typography>
          )}
        </Box>
      </Box>
      {children}
      <Box className="absolute top-0 w-full h-full"></Box>
    </Button>
  );
};

SettingsBtns.propTypes = {
  icon: PropTypes.node.isRequired,
  btnText: PropTypes.string.isRequired,
  optText: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default SettingsBtns;
