"use client";
import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";

import React from "react";

const BalancesDataChart = ({ balancesChart, setBalancesChart, data }: any) => {
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

  useEffect(() => {
    if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
      const chartData = data?.dailyDatas?.map((item: any) => ({
        x: convertToReadableDate(item.date), // Convert date to number if needed
        y: Number(item.volume), // Convert txCount to number
      }));
      const body = [
        {
          id: "Token",
          color: "hsl(250, 70%, 50%)",
          data: chartData,
        },
      ];
      setBalancesChart(body);
    }
  }, [data]);

  return (
    <ResponsiveLine
      data={balancesChart}
      margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
      xScale={{ type: "point" }}
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
        tickRotation:-55,
        legend: "transportation",
        legendOffset: 60,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
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
          translateX: 100,
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

export default BalancesDataChart;
