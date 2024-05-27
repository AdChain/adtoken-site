"use client";

import { useBalancesQuery } from "@/generated/graphql";
import React from "react";

const TokenGraph = () => {
  const { data, loading }: any = useBalancesQuery();

  console.log({
    data,
    loading,
  });
  return <div>TokenGraph</div>;
};

export default TokenGraph;
