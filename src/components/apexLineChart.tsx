// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Chart from "react-apexcharts";

// const ApexLineChart = (lineChartData) => {

//   const [options, setOptions] = useState<any>({
//     chart: {
//       height: 350,
//       type: "line",
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "straight",
//     },
//     title: {
//       text: "Product Trends by Month",
//       align: "left",
//     },
//     grid: {
//       row: {
//         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//         opacity: 0.5,
//       },
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//   });


//   return (
//     <div>
//       <div id="chart">
//         <Chart
//           options={options}
//           series={[
//             {
//               name: "Desktops",
//               data: lineChartData,
//             },
//           ]}
//           type="line"
//           height={350}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default ApexLineChart;

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

interface ApexLineChartProps {
  lineChartData: number[];
  lableLineChart: number[];
}

const ApexLineChart: React.FC<ApexLineChartProps> = ({
  lineChartData,
  lableLineChart,
}) => {
  const [lable, setLable] = useState<any>([]);
  useEffect(() => {
    setLable(lableLineChart);
  }, lableLineChart);

  const obj = {
    categories: lableLineChart,
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
  const [options, setOptions] = useState<any>({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: any) {

          return formatVolume(value);
        },
      },
    },
    // xaxis:obj,
    xaxis: {
      categories: [
        "Dec 12, 2023",
        "Dec 14, 2023",
        "Dec 17, 2023",
        "Dec 19, 2023",
        "Dec 21, 2023",
        "Jan 2, 2024",
        "Jan 6, 2024",
        "Jan 19, 2024",
        "Jan 21, 2024",
        "Jan 23, 2024",
        "Feb 27, 2024",
        "Feb 28, 2024",
        "Mar 3, 2024",
        "Mar 7, 2024",
        "Mar 18, 2024",
        "Apr 6, 2024",
        "Apr 17, 2024",
        "May 9, 2024",
        "May 21, 2024",
        "May 25, 2024",
      ],
    },
  });

  const series = [
    {
      name: "Desktops",
      data: lineChartData,
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexLineChart;
