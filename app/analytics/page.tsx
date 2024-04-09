import React from "react";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";

const Analytics = () => {
  return (
    <div className="section h-full overflow-x-hidden overflow-y-auto text-secondary">
      <Grid container spacing={2} className="mx-auto h-full">
        <Grid item xs={12} className="h-11">
          summary
        </Grid>
        <Grid item xs={12}>
          chart 1
        </Grid>
      </Grid>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
});
