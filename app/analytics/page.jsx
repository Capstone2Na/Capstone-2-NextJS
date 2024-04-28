"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Summary from "@/components/atoms/Summary";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firestoreConfig";
import { filterTotalWaterTimestamp } from "@/components/atoms/ultilCodes/filterTotalWaterTimestamp";

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

const Analytics = () => {
  const [doneFetch, setDoneFetch] = React.useState(false);
  const [totalVolume, setTotalVolume] = React.useState(0);
  const [filteredwaterValues, setFilteredWaterValues] = React.useState([]);
  const [filteredTimestamps, setFilteredTimestamps] = React.useState([]);
  const [ph, setPh] = React.useState([]);
  const [turbidity, setTurbidity] = React.useState([]);
  const [temp, setTemp] = React.useState([]);
  const [timestamp, setTimestamp] = React.useState([]);

  const [averagePh, setAveragePh] = React.useState(0);
  const [averageTurbidity, setAverageTurbidity] = React.useState(0);
  const [averageTemp, setAverageTemp] = React.useState(0);

  useEffect(() => {
    if (!doneFetch) return;
    console.log("ph", ph);
    console.log("turbidity", turbidity);
    console.log("temp", temp);
    console.log("timestamp", timestamp);
    console.log("totalVolume", totalVolume);
    console.log("filteredwaterValues", filteredwaterValues);
    console.log("filteredTimestamps", filteredTimestamps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneFetch]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      const ph = [];
      const turbidity = [];
      const temp = [];
      const timestamp = [];
      const data24hours = [];
      let totalVolume = 0;
      const waterValues = [];
      const filteredValues = [];

      let prevValue = 0;
      try {
        const querySnapshot = await getDocs(collection(db, "waterQuality"));
        console.log("success");
        querySnapshot.forEach((doc) => {
          const phSnapshot = doc.data()["ph"];
          ph.push(phSnapshot);

          const turbiditySnapshot = doc.data()["turbidity"];
          turbidity.push(turbiditySnapshot);

          const tempSnapshot = doc.data()["temperature"];
          temp.push(tempSnapshot);

          const waterValuesSnapshop = doc.data()["totalVolume"];
          waterValues.push(waterValuesSnapshop);

          const timestampSnapshot = doc.data()["timestamp"];
          timestamp.push(timestampSnapshot);
        });

        waterValues.forEach((value, index) => {
          if (index === 0) {
            filteredValues.push(prevValue);
            prevValue = value;
          } else {
            if (prevValue <= value) {
              prevValue = value;
            } else {
              filteredValues.push(prevValue);
              prevValue = 0;
            }
          }
        });

        if (prevValue !== 0) {
          filteredValues.push(prevValue);
        }

        totalVolume = filteredValues.reduce((a, b) => a + b, 0);

        const filtered = filterTotalWaterTimestamp(waterValues, timestamp);
        setFilteredWaterValues(filtered.filteredValues);
        setFilteredTimestamps(filtered.filteredTimestamps);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }

      setTemp(temp);
      setTurbidity(turbidity);
      setTimestamp(timestamp);
      setTotalVolume(totalVolume);
      setPh(ph);
      setDoneFetch(true);

      return {
        waterValues,
        filteredValues,
        totalVolume,
        ph,
        turbidity,
        temp,
        timestamp,
      };
    };
    fetchDataFromFirestore();
  }, []);

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }

  const formattedHour = (hour) => {
    if (hour == 0 || hour == 12) {
      return 12;
    } else if (hour < 12) {
      return hour;
    } else {
      return hour - 12;
    }
  };

  function formatTimestamps(timeStamps) {
    const formattedArray = [];
    timeStamps.forEach((timestamp) => {
      const date = new Date(timestamp);

      const month = date.toLocaleString("default", { month: "short" }); // Get month abbreviation
      const day = date.getDate(); // Get day of the month
      const hour = date.getHours(); // Get hour of the day
      console.log(date, hour);
      const amOrPm = hour >= 12 ? "PM" : "AM"; // Determine if it's AM or PM
      const format12Hour = formattedHour(hour);
      const minutes = date.getMinutes(); // Get minutes of the hour
      formattedArray.push(
        `${month} ${padZero(day)}, ${format12Hour}:${padZero(
          minutes
        )} ${amOrPm}`
      );
    });
    console.log(formattedArray);
    return formattedArray;
  }
  return (
    <div className="h-full w-full">
      <Grid container spacing={1} className=" mx-auto pr-4 mt-4">
        <Grid item xs={12} lg={4.2}>
          <Summary
            value={totalVolume}
            label="Water Usage (Liters)"
            sub="Total, Since First Record"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={ph.reduce((a, b) => a + b, 0) / ph.length}
            label="PH Level"
            sub="Average, Since First Record"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={turbidity.reduce((a, b) => a + b, 0) / turbidity.length}
            label="Turbidity (NTU)"
            sub="Average, Since First Record"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={temp.reduce((a, b) => a + b, 0) / temp.length}
            label="Temperature (&deg;C)"
            sub="Average, Since First Record"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomBarchart />
        </Grid>
        <Grid item xs={12} height={500}>
          <WaterQualityCharts
            phValues={ph}
            turbidityValues={turbidity}
            temperatureValues={temp}
            timeStamps={formatTimestamps(timestamp)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
});
