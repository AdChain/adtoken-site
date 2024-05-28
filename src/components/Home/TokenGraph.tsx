"use client";

import {
  useBalancesQuery,
  useDailyDatasQuery,
  useTokensQuery,
} from "@/generated/graphql";
// yarn add @nivo/line
import React, { useState } from "react";
import Piechart from "./piechart";
import TransferDataChart from "./transferDataChart";
import DailyVolumes from "../dailyVolumes";
// import ApexChart from "../apexChart";
const TokenGraph = () => {
  const { data: balancesData }: any = useBalancesQuery();
  const { data: tokensData }: any = useTokensQuery();
  const { data: dailyDatasData }: any = useDailyDatasQuery();
  const [dailyDataChart, setDailyDataChart] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  console.log(balancesData, "balancesData");

  function gweiToEther(gwei: any) {
    // 1 Ether = 1,000,000,000 Gwei
    const gweiInEther = 1e9;
    return (gwei / gweiInEther).toFixed(4).replace(/\.?0+$/, "");
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-5">
      <div>
        <p className="text-white font-bold mb-4">
          Transfer per day ( first 20 )
        </p>

        <div className="h-[54vh] bg-white rounded-lg ">
          <TransferDataChart
            data={dailyDatasData}
            transferData={transferData}
            setTransferData={setTransferData}
          />
        </div>
        {/* <div className="h-[54vh] bg-white rounded-lg mt-5">
          <ApexChart data={dailyDatasData} />
        </div> */}
      </div>

      <div>
        <p className="text-white font-bold mb-4">Top 20 ADT holders</p>
        <div className="h-[54vh] bg-white rounded-lg ">
          <Piechart
            data={balancesData}
            pieChartData={pieChartData}
            setPieChartData={setPieChartData}
            gweiToEther={gweiToEther}
          />
        </div>
      </div>
      <div>
        <p className="text-white font-bold mb-4">Daily Volume ( first 20 )</p>
        <div className="h-[54vh] bg-white rounded-lg ">
          <DailyVolumes
            data={dailyDatasData}
            setDailyDataChart={setDailyDataChart}
            dailyDataChart={dailyDataChart}
            gweiToEther={gweiToEther}
          />
        </div>
      </div>
      <div className="w-full h-[54vh]">
        <p className="text-white font-bold mb-4">Total supply of ADT</p>
        <div className="w-full h-[54vh] flex text-3xl justify-center items-center font-semibold">
          <h2>{gweiToEther(tokensData?.tokens[0]?.totalSupply)}</h2>
        </div>
      </div>
    </div>
  );
};

export default TokenGraph;
