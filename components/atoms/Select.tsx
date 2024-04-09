import { NativeSelect } from "@mui/material";
import React from "react";

const SelectTimeFrame = () => {
  return (
    <NativeSelect
      defaultValue={"hour"}
      inputProps={{
        name: "filter",
      }}
      sx={{ maxWidth: "200px" }}
    >
      <option value={"hour"}>Last Hour</option>
      <option value={"day"}>Last 24 Hours</option>
      <option value={"week"}>Past 7 Days</option>
    </NativeSelect>
  );
};

export default SelectTimeFrame;
