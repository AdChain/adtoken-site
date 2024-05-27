import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect } from "react";

const DailyDatasChart = ({ dailyDataChart, setDailyDataChart, data }: any) => {
  useEffect(() => {
    if (
      Array.isArray(data?.dailyDatas) &&
      data?.dailyDatas?.length > 0
    ) {
      const chartData = data?.dailyDatas?.map((item: any) => ({
        date: convertToReadableDate(item.date), // Convert date to number if needed
        txCount: Number(item.txCount), // Convert txCount to number
      }));
      setDailyDataChart(chartData);
      console.log(dailyDataChart, "dailyDataChart?.dailyDatas");
    }
  }, [data]);

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
  return (
    <ResponsiveBar
      data={dailyDataChart}
      keys={["txCount"]}
      indexBy="date"
      margin={{ top: 10, right: 130, bottom: 100, left: 60 }}
      padding={0.6}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderRadius={3}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.4]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -30,
        legend: "date",
        legendPosition: "middle",
        legendOffset: 55,

        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Dailydatas",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={20}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.4]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 62,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 73,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      motionConfig={{
        mass: 7,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
    />
  );
};

export default DailyDatasChart;
