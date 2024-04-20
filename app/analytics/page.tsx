import React from "react";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Summary from "@/components/atoms/Summary";

const WaterQualityCharts = dynamic(
  () => import("@/components/organisms/WaterQualityCharts"),
  {
    ssr: false,
  }
);
const CustomBarchart = dynamic(
  () => import("@/components/organisms/CustomBarChart"),
  {
    ssr: false,
  }
);

// export async function getStaticProps() {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

const Analytics = () => {
  return (
    <div className="h-full w-full">
      <Grid container spacing={1} className=" mx-auto pr-4 mt-4">
        <Grid item xs={12} lg={4.2}>
          <Summary
            value={100.92}
            label="Water Usage (Liters)"
            sub="Total, Last 24 Hours"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={13.88}
            label="PH Level"
            sub="Average, Last 30 Minutes"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={2090.92}
            label="Turbidity (NTU)"
            sub="average, Last 30 Minutes"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={33.07}
            label="Temperature (&deg;C)"
            sub="Average, Last 30 Minutes"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomBarchart />
        </Grid>
        <Grid item xs={12} height={500}>
          <WaterQualityCharts />
        </Grid>
      </Grid>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
});
