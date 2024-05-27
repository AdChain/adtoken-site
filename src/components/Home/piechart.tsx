import { ResponsivePie } from "@nivo/pie";
import React, { useEffect } from "react";

const Piechart = ({ data, pieChartData, setPieChartData }: any) => {
  useEffect(() => {
    if (Array.isArray(data?.balances) && data?.balances?.length > 0) {
      console.log(data, "data");
      const chartData = data?.balances?.map((item: any) => ({
        id: "dfas",
        label: item.address,
        color: "hsl(78, 70%, 50%)",
        value: item.balance,
      }));
      console.log(chartData);
      setPieChartData(chartData);
    }
  }, [data]);
  return (
    <div>
      <ResponsivePie
        data={[
          {
            id: "stylus",
            label: "stylus",
            value: 469,
            color: "hsl(78, 70%, 50%)",
          },
          {
            id: "sass",
            label: "sass",
            value: 402,
            color: "hsl(40, 70%, 50%)",
          },
          {
            id: "javascript",
            label: "javascript",
            value: 546,
            color: "hsl(353, 70%, 50%)",
          },
          {
            id: "make",
            label: "make",
            value: 377,
            color: "hsl(331, 70%, 50%)",
          },
          {
            id: "css",
            label: "css",
            value: 142,
            color: "hsl(114, 70%, 50%)",
          },
        ]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-51}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Piechart;
