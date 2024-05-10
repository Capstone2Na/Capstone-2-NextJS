import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
const AutoSwitch = ({
  attemtingDisable,
  attemtingEnable,
  open,
  handleOpen,
  handleClose,
  handleEnable,
  handleDisable,
  enabled,
}: {
  attemtingDisable: boolean;
  attemtingEnable: boolean;
  open: boolean;
  handleOpen: any;
  handleClose: any;
  handleEnable: any;
  handleDisable: any;
  enabled: boolean;
}) => {
  return (
    <>
      <Tooltip
        title={"Click Here to Enable/Disable Smart Switching"}
        className="absolute -right-10 top-2"
      >
        <IconButton onClick={handleOpen} className="">
          <SettingsIcon
            className={`text-iconButton transition-all duration-300`}
          />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {` Smart Switching ${enabled ? "Enabled" : "Disabled"}`}
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          className="absolute right-1 top-1 md:right-2 md:top-2"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText id="smartSwitch-dialog">
            Smart Switching allows HyrdroSync to automatically Turn On/Off your
            valve based on the water tank Level.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            disabled={!enabled}
            onClick={handleDisable}
            loading={attemtingDisable}
          >
            Disable
          </LoadingButton>
          <LoadingButton
            disabled={enabled}
            onClick={handleEnable}
            loading={attemtingEnable}
          >
            Enable
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AutoSwitch;
