"use client";

import {
  useBalancesQuery,
  useDailyDatasQuery,
  useTokensQuery,
} from "@/generated/graphql";
// yarn add @nivo/line
import React, { useEffect, useState } from "react";
import Piechart from "./piechart";
import TransferDataChart from "./transferDataChart";
import DailyVolumes from "../dailyVolumes";
const TokenGraph = () => {
  const { data: balancesData }: any = useBalancesQuery();
  const { data: tokensData }: any = useTokensQuery();
  const { data: dailyDatasData }: any = useDailyDatasQuery();
  const [dailyDataChart, setDailyDataChart] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

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

  function gweiToEther(gwei: any) {
    // 1 Ether = 1,000,000,000 Gwei
    const gweiInEther = 1e9;
    return (gwei / gweiInEther).toFixed(4).replace(/\.?0+$/, "");
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-5 max-w-[1000px]">
      <div>
        <p className="text-white font-bold mb-4">Transfer per day</p>

        <div className="h-[54vh] w-[90vw] md:w-full rounded-lg ">
          <TransferDataChart
            data={dailyDatasData}
            transferData={transferData}
            setTransferData={setTransferData}
            convertDateFormat={convertDateFormat}
          />
        </div>
      </div>
      <div>
        <p className="text-white font-bold mb-4">Top 20 ADT holders</p>
        <div className="h-[54vh] w-[90vw] md:w-full rounded-lg ">
          <Piechart
            data={balancesData}
            pieChartData={pieChartData}
            setPieChartData={setPieChartData}
            gweiToEther={gweiToEther}
          />
        </div>
      </div>
      <div>
        <p className="text-white font-bold mb-4">Daily Volume </p>
        <div className="h-[54vh] w-[100vw] max-w-[1000px] md:w-screen rounded-lg ">
          <DailyVolumes
            data={dailyDatasData}
            setDailyDataChart={setDailyDataChart}
            dailyDataChart={dailyDataChart}
            gweiToEther={gweiToEther}
            convertDateFormat={convertDateFormat}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenGraph;
