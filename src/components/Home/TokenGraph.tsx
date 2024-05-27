"use client";

import {
  useBalancesQuery,
  useDailyDatasQuery,
  useTokensQuery,
} from "@/generated/graphql";
// yarn add @nivo/line
import React, { useState } from "react";

import DailyDatasChart from "./dailyDatasChart";
import BalancesDataChart from "../balancesDataChart";
import Piechart from "./piechart";
const balanceData = [
  {
    id: "japan",
    color: "hsl(250, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 250,
      },
      {
        x: "helicopter",
        y: 220,
      },
      {
        x: "boat",
        y: 18,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 169,
      },
      {
        x: "bus",
        y: 93,
      },
      {
        x: "car",
        y: 278,
      },
      {
        x: "moto",
        y: 131,
      },
      {
        x: "bicycle",
        y: 266,
      },
      {
        x: "horse",
        y: 258,
      },
      {
        x: "skateboard",
        y: 230,
      },
      {
        x: "others",
        y: 118,
      },
    ],
  },
];

const TokenGraph = () => {
  const { data: balancesData, loading: balancesLoading }: any =
    useBalancesQuery();

  // Destructure and rename data and loading for useTokensQuery
  const { data: tokensData, loading: tokensLoading }: any = useTokensQuery();

  // Destructure and rename data and loading for useDailyDatasQuery
  const { data: dailyDatasData, loading: dailyDatasLoading }: any =
    useDailyDatasQuery();
  // Destructure and rename data and loading for useBalancesQuery
  const [dailyDataChart, setDailyDataChart] = useState([]);

  const [balancesChart, setBalancesChart] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  return (
    <>
      <p className="text-white font-bold mx-5">Number of transfer per day</p>
      <div className="h-[60vh] bg-white rounded-lg m-5">
        <DailyDatasChart
          data={dailyDatasData}
          setDailyDataChart={setDailyDataChart}
          dailyDataChart={dailyDataChart}
        />
      </div>
      <p className="text-white font-bold mx-5">Daily Volume</p>
      <div className="h-[60vh] bg-white rounded-lg m-5">
        <BalancesDataChart
          data={dailyDatasData}
          balancesChart={balancesChart}
          setBalancesChart={setBalancesChart}
        />
      </div>
      {/* <div className="h-[60vh] bg-white rounded-lg m-5">
        <Piechart
          data={balancesData}
          pieChartData={pieChartData}
          setPieChartData={setPieChartData}
        />
      </div> */}
    </>
  );
};

export default TokenGraph;
