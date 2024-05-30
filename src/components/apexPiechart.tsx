// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const ApexPiechart = ({ data }: any) => {
//   const [chartData, setChartData] = useState<any>({});

//   useEffect(() => {
//     const balances = [
//       {
//         id: "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
//         address: "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
//         balance: "212958903252852110",
//       },
//       {
//         id: "0x851d020687ab66bb080b60b02114c35f46961e31",
//         address: "0x851d020687ab66bb080b60b02114c35f46961e31",
//         balance: "110000000000000000",
//       },
//       {
//         id: "0x1f008c8f015dfd1031dfc8e40a6c83efd6bc8595",
//         address: "0x1f008c8f015dfd1031dfc8e40a6c83efd6bc8595",
//         balance: "100189708946139739",
//       },
//       {
//         id: "0x0c6c34cdd915845376fb5407e0895196c9dd4eec",
//         address: "0x0c6c34cdd915845376fb5407e0895196c9dd4eec",
//         balance: "79035695500164920",
//       },
//       {
//         id: "0xa64d893f83b22a3a99c84f883f53ce1d8c75cd5b",
//         address: "0xa64d893f83b22a3a99c84f883f53ce1d8c75cd5b",
//         balance: "46775435767357005",
//       },
//       {
//         id: "0x8c542675be5ea728dc7fdd5c2fce3b457c3736ad",
//         address: "0x8c542675be5ea728dc7fdd5c2fce3b457c3736ad",
//         balance: "31127879389734178",
//       },
//       {
//         id: "0x2e19a7630d4d5f87e65dbff69d27c8c4fd57f7a8",
//         address: "0x2e19a7630d4d5f87e65dbff69d27c8c4fd57f7a8",
//         balance: "27000000000000000",
//       },
//       {
//         id: "0x2f0c5e1ceac8cc5b53f83c362d4cdf8808ade62f",
//         address: "0x2f0c5e1ceac8cc5b53f83c362d4cdf8808ade62f",
//         balance: "21244973964144631",
//       },
//       {
//         id: "0xc7f047cf257943f2aba80f8bd9264510867b54a8",
//         address: "0xc7f047cf257943f2aba80f8bd9264510867b54a8",
//         balance: "20969970358457587",
//       },
//       {
//         id: "0x8770eb9d4a2c4be34501e4c71233692aea5995ec",
//         address: "0x8770eb9d4a2c4be34501e4c71233692aea5995ec",
//         balance: "20713234844685220",
//       },
//       {
//         id: "0x3110abce2a45ea68ec5f6aa3d32eb2c1e41e42a8",
//         address: "0x3110abce2a45ea68ec5f6aa3d32eb2c1e41e42a8",
//         balance: "20498900000000000",
//       },
//       {
//         id: "0x1792e707c7276b804a1a64a5e0c661a5899b29af",
//         address: "0x1792e707c7276b804a1a64a5e0c661a5899b29af",
//         balance: "16862146034051590",
//       },
//       {
//         id: "0x55a59c4cf200ff1ccbffda3e0aaf7e5aa6fa0fb6",
//         address: "0x55a59c4cf200ff1ccbffda3e0aaf7e5aa6fa0fb6",
//         balance: "16735704387883315",
//       },
//       {
//         id: "0x1cc8dbf3b588665bbf5ddd669c8d56957dfdb526",
//         address: "0x1cc8dbf3b588665bbf5ddd669c8d56957dfdb526",
//         balance: "13440126618973960",
//       },
//       {
//         id: "0xf87ba4ce6448e3c18c677b8bdc6b2a24db5b7e3e",
//         address: "0xf87ba4ce6448e3c18c677b8bdc6b2a24db5b7e3e",
//         balance: "13356000000000000",
//       },
//       {
//         id: "0x508ad1f1511b9bd4ceb89c12514241e3546facd2",
//         address: "0x508ad1f1511b9bd4ceb89c12514241e3546facd2",
//         balance: "11050002000000000",
//       },
//       {
//         id: "0x4069bc3c7d327b5c28c9b8a6f24c2fb54d227523",
//         address: "0x4069bc3c7d327b5c28c9b8a6f24c2fb54d227523",
//         balance: "10085819561290337",
//       },
//       {
//         id: "0x20d2c2a3efaa5043a6b39714b272796a36f8442f",
//         address: "0x20d2c2a3efaa5043a6b39714b272796a36f8442f",
//         balance: "8325205000000000",
//       },
//       {
//         id: "0x74f06a98a33f390b46c521747ccd34d328ccd2f2",
//         address: "0x74f06a98a33f390b46c521747ccd34d328ccd2f2",
//         balance: "8066564185319640",
//       },
//       {
//         id: "0x9ac4cf75798e2c941feec8c815f4ff1ee082352b",
//         address: "0x9ac4cf75798e2c941feec8c815f4ff1ee082352b",
//         balance: "7091717901950000",
//       },
//     ];

//     const chart_data = {
//       series: balances.map((m: any) => m.value),
//       options: {
//         labels: balances.map((m: any) => m.address),
//       },
//     };
//     setChartData(chart_data);
//   }, [data]);

//   return (
//     <div id="chart">
//       {chartData.options && chartData.series ? (
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="pie"
//           width="400"
//           height={500}
//         />
//       ) : (
//         <p>Loading...</p> // You can replace this with a loader or a different fallback
//       )}
//     </div>
//   );
// };

// export default ApexPiechart;

// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const ApexPiechart = ({ data }: any) => {
//   const [datas, setDatas] = useState<any>({});

//   useEffect(() => {
//     const balances = data?.data?.balance;
//     const chart_data = {
//       series: balances?.map((m: any) => m.balance),
//       options: {
//         labels: balances?.map((m: any) => m.address),
//       },
//     };
//     setDatas(chart_data);
//   }, [data]);
//   const [chartData, setChartData] = useState<any>({
//     series: datas?.options,
//     options: {
//       chart: {
//         width: 380,
//         type: "pie",
//       },
//       labels: datas?.series,
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   return (
//     <div>
//       {chartData.options && chartData.series ? (
//         <div id="chart">
//           <ReactApexChart
//             options={chartData.options}
//             series={chartData.series}
//             type="pie"
//             width={380}
//           />
//         </div>
//       ) : (
//         "No Data"
//       )}
//     </div>
//   );
// };

// export default ApexPiechart;
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function ApexPiechart({ data, value }: any) {

  return (
    <Chart
      type="pie"
      width="500"
      series={data}
      options={{
        labels: value,

        legend: {
          show: false,
          position: "bottom",
        },

        colors: ["#00AB55", "#2D99FF", "#FFE700", "#826AF9"],
      }}
    />
  );
}
