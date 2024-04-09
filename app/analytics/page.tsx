import React from "react";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Charts from "@/components/atoms/Charts";

const Analytics = () => {
  return (
    <Grid container spacing={2} className="h-full mx-4">
      <Grid item xs={12}>
        summary
      </Grid>
      <Grid item xs={12}>
        {/* <Charts /> */}
      </Grid>
      <Grid item xs={12}>
        charts 2
      </Grid>
      <Grid item xs={12}>
        charts 3
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
});
