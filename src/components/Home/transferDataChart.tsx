import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

const TransferDataChart = ({
  transferData,
  setTransferData,
  data,
  convertDateFormat,
}: any) => {
  useEffect(() => {
    if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
      const chartData = data?.dailyDatas
        ?.reverse()
        ?.slice(80, 100)
        .map((item: any, index: any) => ({
          date: convertToReadableDate(item.date), // Convert date to number if needed
          txCount: Number(item.txCount), // Convert txCount to number
        }));
      setTransferData(chartData);
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

  // Function to filter out even dates
  const getOddDates = (data: any) => {
    return data
      .map((item: any) => item.date)
      .filter((item: any, index: any) => index % 2 === 0);
  };
  const convertDate = (data: any) => {
    const array: any = [];
    data?.forEach((date: string) => {
      array.push(convertDateFormat(date));
    });
    return array;
  };

  return (
    <ResponsiveBar
      data={transferData}
      keys={["txCount"]}
      indexBy="date"
      margin={{ top: 50, right: 30, bottom: 100, left: 60 }}
      padding={0.6}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#17257c"]}
      borderRadius={3}
      borderColor={{ from: "color", modifiers: [["darker", 1.4]] }}
      axisTop={null}
      axisRight={null}
      tooltip={(input: any) => {
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
              Date: {convertDateFormat(input?.data?.date)}
            </div>
            <div className="font-bold">Transfers: {input?.data?.txCount}</div>
          </div>
        );
      }}
      axisBottom={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: -60,
        legend: "Days",
        legendPosition: "middle",
        legendOffset: 70,
        tickValues: getOddDates(transferData), // Use custom tick values for odd dates
        format: (value) => convertDateFormat(value),
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize:5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Transfers",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={20}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 400,
          translateY: 0,
          itemsSpacing: 5,
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

export default TransferDataChart;
