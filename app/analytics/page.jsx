"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Summary from "@/components/atoms/Summary";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firestoreConfig";
import { calculateAverage } from "@/components/atoms/ultilCodes/calculateAverage";

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
  // const [filteredwaterValues, setFilteredWaterValues] = React.useState([]);
  const [filteredTimestamps, setFilteredTimestamps] = React.useState([]);
  const [ph, setPh] = React.useState([]);
  const [turbidity, setTurbidity] = React.useState([]);
  const [temp, setTemp] = React.useState([]);
  const [timestamp, setTimestamp] = React.useState([]);

  const [hourPh, sethourPh] = React.useState(0);
  const [hourTurbidity, sethourTurbidity] = React.useState(0);
  const [hourTemp, sethourTemp] = React.useState(0);

  useEffect(() => {
    if (!doneFetch) return;
    console.log("ph", ph);
    console.log("turbidity", turbidity);
    console.log("temp", temp);
    console.log("timestamp", timestamp);
    console.log("totalVolume", totalVolume);
    console.log("filteredTimestamps", filteredTimestamps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneFetch]);

  useEffect(() => {
    const fetchTotalVolume = async () => {
      const docRef = doc(db, "totalWater", "total");
      try {
        const docSnap = await getDoc(docRef);
        console.log("docSnap: ", docSnap);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("data: ", data);
          // const totalVolume = data.totalVolume;
          setTotalVolume(data.totalVolume);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };
    const fetchDataFromFirestore = async () => {
      const ph = [];
      const turbidity = [];
      const temp = [];
      const timestamp = [];

      const ph1Hour = [];
      const turbidity1Hour = [];
      const temp1Hour = [];

      try {
        const querySnapshot = await getDocs(
          collection(db, "averagedQualityData")
        );
        console.log("success fetching from averagedQualityData");
        querySnapshot.forEach((doc) => {
          const phSnapshot = doc.data()["ph"];
          ph.push(phSnapshot);

          const turbiditySnapshot = doc.data()["turbidity"];
          turbidity.push(turbiditySnapshot);

          const tempSnapshot = doc.data()["temperature"];
          temp.push(tempSnapshot);

          // const waterValuesSnapshop = doc.data()["totalVolume"];
          // waterValues.push(waterValuesSnapshop);

          const timestampSnapshot = doc.data()["formattedDate"];
          timestamp.push(timestampSnapshot);
        });

        // waterValues.forEach((value, index) => {
        //   if (index === 0) {
        //     filteredValues.push(prevValue);
        //     prevValue = value;
        //   } else {
        //     if (prevValue <= value) {
        //       prevValue = value;
        //     } else {
        //       filteredValues.push(prevValue);
        //       prevValue = 0;
        //     }
        //   }
        // });

        // if (prevValue !== 0) {
        //   filteredValues.push(prevValue);
        // }

        // totalVolume = filteredValues.reduce((a, b) => a + b, 0);

        // const filtered = filterTotalWaterTimestamp(waterValues, timestamp);
        // setFilteredWaterValues(filtered.filteredValues);
        // setFilteredTimestamps(filtered.filteredTimestamps);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }

      try {
        const querySnapshot = await getDocs(
          collection(db, "oneHourQualityData")
        );
        console.log("success fetching from averagedQualityData");
        querySnapshot.forEach((doc) => {
          const phSnapshot = doc.data()["ph"];
          ph1Hour.push(phSnapshot);

          const turbiditySnapshot = doc.data()["turbidity"];
          turbidity1Hour.push(turbiditySnapshot);

          const tempSnapshot = doc.data()["temperature"];
          temp1Hour.push(tempSnapshot);

          // const waterValuesSnapshop = doc.data()["totalVolume"];
          // waterValues.push(waterValuesSnapshop);
        });

        // waterValues.forEach((value, index) => {
        //   if (index === 0) {
        //     filteredValues.push(prevValue);
        //     prevValue = value;
        //   } else {
        //     if (prevValue <= value) {
        //       prevValue = value;
        //     } else {
        //       filteredValues.push(prevValue);
        //       prevValue = 0;
        //     }
        //   }
        // });

        // if (prevValue !== 0) {
        //   filteredValues.push(prevValue);
        // }

        // totalVolume = filteredValues.reduce((a, b) => a + b, 0);

        // const filtered = filterTotalWaterTimestamp(waterValues, timestamp);
        // setFilteredWaterValues(filtered.filteredValues);
        // setFilteredTimestamps(filtered.filteredTimestamps);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }

      setTemp(temp);
      setTurbidity(turbidity);
      setTimestamp(timestamp);
      // setTotalVolume(totalVolume);
      setPh(ph);
      sethourPh(ph1Hour);
      sethourTurbidity(turbidity1Hour);
      sethourTemp(temp1Hour);
      setDoneFetch(true);
      console.log(hourPh, hourTurbidity, hourTemp);
      // return {
      //   waterValues,
      //   filteredValues,
      //   totalVolume,
      //   ph,
      //   turbidity,
      //   temp,
      //   timestamp,
      // };
    };
    fetchDataFromFirestore();
    fetchTotalVolume();
  }, []);

  // function padZero(num) {
  //   return num < 10 ? "0" + num : num;
  // }

  // const formattedHour = (hour) => {
  //   if (hour == 0 || hour == 12) {
  //     return 12;
  //   } else if (hour < 12) {
  //     return hour;
  //   } else {
  //     return hour - 12;
  //   }
  // };

  // function formatTimestamps(timeStamps) {
  //   const formattedArray = [];
  //   timeStamps.forEach((timestamp) => {
  //     const date = new Date(timestamp);

  //     const month = date.toLocaleString("default", { month: "short" }); // Get month abbreviation
  //     const day = date.getDate(); // Get day of the month
  //     const hour = date.getHours(); // Get hour of the day
  //     console.log(date, hour);
  //     const amOrPm = hour >= 12 ? "PM" : "AM"; // Determine if it's AM or PM
  //     const format12Hour = formattedHour(hour);
  //     const minutes = date.getMinutes(); // Get minutes of the hour
  //     formattedArray.push(
  //       `${month} ${padZero(day)}, ${format12Hour}:${padZero(
  //         minutes
  //       )} ${amOrPm}`
  //     );
  //   });
  //   console.log(formattedArray);
  //   return formattedArray;
  // }
  return (
    <div className="h-full w-full">
      <Grid container spacing={1} className=" mx-auto pr-4 mt-4">
        <Grid item xs={12} lg={4.2}>
          <Summary
            isMain={true}
            value={totalVolume}
            label="Water Usage (Liters)"
            sub="Total, Since First Record"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={calculateAverage(hourPh)}
            label="PH Level"
            sub="Average, last hour"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={calculateAverage(hourTurbidity)}
            label="Turbidity (NTU)"
            sub="Average, last hour"
          />
        </Grid>
        <Grid item xs={4} lg={2.6}>
          <Summary
            value={calculateAverage(hourTemp)}
            label="Temperature (&deg;C)"
            sub="Average, last hour"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <CustomBarchart />
        </Grid> */}
        <Grid item xs={12} height={500}>
          <WaterQualityCharts
            phValues={ph}
            turbidityValues={turbidity}
            temperatureValues={temp}
            timeStamps={timestamp}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Analytics), {
  ssr: true,
});
