import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import {
  changeCalibrationValue,
  FetchWaterContext,
} from "@/services/water.service";

import { TextField } from "@mui/material";

const WaterFlowCalibration = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { flowcalibrationFactor, setFlowCalibrationFactor } =
    useContext(FetchWaterContext);
  const [newCalibrationValue, setNewCalibrationValue] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSettingCalibrationValue = async () => {
    setLoading(true);
    try {
      await changeCalibrationValue(newCalibrationValue);
    } catch (error) {
      console.error("Error Setting Calibration Value", error);
    } finally {
      setLoading(false);
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    setNewCalibrationValue(flowcalibrationFactor);
  }, [flowcalibrationFactor]);

  useEffect(() => {
    if (newCalibrationValue == flowcalibrationFactor) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [newCalibrationValue, flowcalibrationFactor]);
  return (
    <>
      <Tooltip
        title="View Water Flow Calibration Setting"
        placement="bottom"
        className="absolute top-2 right-2"
      >
        <IconButton onClick={() => setOpenDialog(true)}>
          <InfoIcon className={`text-iconButton transition-all duration-300`} />
        </IconButton>
      </Tooltip>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle id="waterflow-dialog-title">
          Water Flow Calibration Setting
        </DialogTitle>
        <IconButton
          onClick={() => setOpenDialog(false)}
          className="absolute right-1 top-1 md:right-2 md:top-2"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText id="waterflow-dialog">
            <span>{`Water Flow Calibration Value: `}</span>
            <span className="font-bold">{flowcalibrationFactor}</span>
            <br />
            <br />
            <TextField
              type="number"
              label="Calibration Value"
              value={newCalibrationValue}
              onChange={(e) => setNewCalibrationValue(Number(e.target.value))}
            />
            <br />
            <br />
            <span className="text-accent">{`Warning: Setting the calibration value
            should only be done by experienced users.`}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            disabled={disabled}
            loading={loading}
            onClick={() => handleSettingCalibrationValue()}
          >
            Set Calibration Value
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WaterFlowCalibration;
