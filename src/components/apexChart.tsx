// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";

// const ApexChart = ({ data }: any) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(data?.dailyDatas) && data?.dailyDatas?.length > 0) {
//       const formattedData = data.dailyDatas.map((item: any) => ({
//         x: convertToReadableDate(item.date), // Date string
//         y: item.txCount,
//       }));
//       setChartData(formattedData);
//     }
//   }, [data]);

//   const convertToReadableDate = (epochInput: any) => {
//     const epochTime = parseInt(epochInput, 10);
//     if (!isNaN(epochTime)) {
//       const date = new Date(epochTime * 1000); // Convert epoch time to milliseconds
//       const dateString = date.toLocaleString("en-GB", {
//         timeZone: "UTC",
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//       }); // Format date to a readable string without GMT
//       return dateString;
//     } else {
//       return "Invalid epoch time";
//     }
//   };

//   return (
//     <div className="bg-white p-2 ApexChart">
//       <div className="row">
//         <div className="mixed-chart overflow-x-auto h-full">
//           <Chart
//             options={{
//               chart: {
//                 id: "basic-bar",
//                 type: "bar",
//               },
//               colors: ["#000000"], // Black color
//               xaxis: {
//                 categories: chartData.map((data: any) => data.x),
//                 labels: {
//                   rotate: -90,
//                 },
//               },
//               // @ts-ignore
//               tooltip: {
//                 text: "dark", // Dark theme
//               },
//             }}
//             series={[
//               {
//                 name: "Tx Count",
//                 data: chartData.map((data) => data.y),
//               },
//             ]}
//             type="bar"
//             width="500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApexChart;
