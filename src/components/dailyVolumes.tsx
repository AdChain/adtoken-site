"use client";
import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";

import React from "react";

const DailyVolumes = ({
  dailyDataChart,
  setDailyDataChart,
  data,
  gweiToEther,
}: any) => {
  const convertToReadableDate = (epochInput: any) => {
    const epochTime = parseInt(epochInput, 10);
    if (!isNaN(epochTime)) {
      const date = new Date(epochTime * 1000); // Convert epoch time to milliseconds
      const dateString = date.toLocaleString("en-GB", {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }); // Format date to a readable string without GMT
      return dateString;
    } else {
      return "Invalid epoch time";
    }
  };
  function formatVolume(volume: any) {
    const abbreviations = ["", "K", "M", "B", "T"];
    const numDigits = Math.floor(Math.log10(volume) / 3);
    const abbreviation = abbreviations[numDigits];

    if (!abbreviation) return volume;

    const divisor = Math.pow(10, numDigits * 3);
    const truncated = volume / divisor;

    return truncated.toFixed(2) + abbreviation;
  }

  useEffect(() => {
    if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
      const chartData = data?.dailyDatas?.map((item: any) => ({
        x: convertToReadableDate(item.date), // Convert date to number if needed
        y: gweiToEther(Number(item.volume)), // Convert txCount to number
      }));
      const body = [
        {
          id: "Token",
          color: "hsl(44°, 98%, 50%)",
          data: chartData,
        },
      ];
      setDailyDataChart(body);
    }
  }, [data]);

  return (
    <ResponsiveLine
      data={dailyDataChart}
      margin={{ top: 50, right: 30, bottom: 100, left: 90 }}
      xScale={{ type: "point" }}
      colors={["#17257c"]}
      tooltip={(input: any) => {
        console.log(input, "::::::");
        return (
          <div
            style={{
              background: "white",
              padding: "5px 12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#000",
              width: "",
            }}
          >
            <div className="font-bold">
              Volume :{input?.point?.data?.yFormatted}
            </div>
          </div>
        );
      }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -60,
        legend: "Days",
        legendOffset: 70,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Volume",
        legendOffset: -80,
        legendPosition: "middle",
        truncateTickAt: 0,
        format: (value) => formatVolume(value),
      }}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 400,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default DailyVolumes;

// import React, { useEffect } from "react";
// import { ResponsiveLine } from "@nivo/line";

// const DailyVolumes = ({
//   dailyDataChart,
//   setDailyDataChart,
//   data,
//   gweiToEther,
// }) => {
//   const convertToReadableDate = (epochInput) => {
//     const epochTime = parseInt(epochInput, 10);
//     if (!isNaN(epochTime)) {
//       const date = new Date(epochTime * 1000);
//       const dateString = date.toLocaleString("en-GB", {
//         timeZone: "UTC",
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//       });
//       return dateString;
//     } else {
//       return "Invalid epoch time";
//     }
//   };

//   function formatVolume(volume) {
//     const abbreviations = ["", "K", "M", "B", "T"];
//     const numDigits = Math.floor(Math.log10(volume) / 3);
//     const abbreviation = abbreviations[numDigits];

//     if (!abbreviation) return volume;

//     const divisor = Math.pow(10, numDigits * 3);
//     const truncated = volume / divisor;

//     return truncated.toFixed(2) + abbreviation;
//   }

//   useEffect(() => {
//     if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
//       const chartData = data?.dailyDatas?.map((item) => ({
//         x: convertToReadableDate(item.date),
//         y: gweiToEther(item.volume), // Apply formatVolume to the y-value
//       }));
//       const formattedData = [
//         {
//           id: "Token",
//           data: chartData,
//         },
//       ];
//       setDailyDataChart(formattedData);
//     }
//   }, [data]);

//   return (
//     <ResponsiveLine
//       data={dailyDataChart}
//       margin={{ top: 50, right: 30, bottom: 100, left: 90 }}
//       xScale={{ type: "point" }}
//       colors={["#17257c"]}
//       yScale={{
//         type: "linear",
//         min: "auto",
//         max: "auto",
//         stacked: true,
//         reverse: false,
//       }}
//       yFormat={(value) => formatVolume(value)}
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: -60,
//         legend: "Days",
//         legendOffset: 70,
//         legendPosition: "middle",
//         truncateTickAt: 0,
//       }}
//       animate
//       curve="monotoneX"
//       axisLeft={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "Volume",
//         legendOffset: -80,
//         legendPosition: "middle",
//         format: (value) => formatVolume(value),
//       }}
//       pointSize={0}
//       pointColor={{ theme: "background" }}
//       pointBorderWidth={2}
//       pointBorderColor={{ from: "serieColor" }}
//       pointLabel="y"
//       pointLabelYOffset={-12}
//       enableSlices="x"
//       useMesh={true}
//       legends={[
//         {
//           anchor: "bottom-right",
//           direction: "column",
//           justify: false,
//           translateX: 400,
//           translateY: 0,
//           itemsSpacing: 0,
//           itemDirection: "left-to-right",
//           itemWidth: 80,
//           itemHeight: 20,
//           itemOpacity: 0.75,
//           symbolSize: 12,
//           symbolShape: "circle",
//           symbolBorderColor: "rgba(0, 0, 0, .5)",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemBackground: "rgba(0, 0, 0, .03)",
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// };

// export default DailyVolumes;
