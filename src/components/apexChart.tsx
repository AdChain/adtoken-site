import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = ({ data }: any) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
      const formattedData = data.dailyDatas.map((item: any) => ({
        x: convertToReadableDate(item.date), // Date string
        y: item.txCount,
      }));
      setChartData(formattedData);
    }
  }, [data]);
  const convertDateFormat = (inputDate: any) => {
    // Split the input date string into day, month, and year
    const [day, month, year] = inputDate.split("/");

    // Create a Date object with the provided year, month (subtracting 1 as months are zero-indexed), and day
    const date = new Date(`${year}-${month}-${day}`);

    // Format the date using toLocaleString with the desired format
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };

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
      return convertDateFormat(dateString);
    } else {
      return "Invalid epoch time";
    }
  };

  return (
    <div className="bg-white rounded-lg p-2 ApexChart">
      <div className="row">
        <div className="mixed-chart overflow-x-auto h-full">
          <Chart
            options={{
              chart: {
                id: "basic-bar",
                type: "bar",
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 4,
                },
              },
              colors: ["#17257C"], // Black color
              xaxis: {
                categories: chartData.map((data: any) => data.x),
                labels: {
                  rotate: -90,
                },
              },
              tooltip: {
                style: {
                  fontSize: "12px",
                },
              },
            }}
            series={[
              {
                name: "Tx Count",
                data: chartData.map((data: any) => data.y),
              },
            ]}
            type="bar"
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
