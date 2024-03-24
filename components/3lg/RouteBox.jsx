import { Box } from "@mui/material";
import PropTypes from "prop-types";

const RouteBox = ({ children }) => {
  return (
    <Box className="section w-screen h-full overflow-y-hidden overflow-x-scroll text-secondary">
      <Box className="content flex-col justify-between items-center h-full py-4">
        {children}
      </Box>
    </Box>
  );
};

RouteBox.propTypes = {
  children: PropTypes.node,
};

export default RouteBox;
