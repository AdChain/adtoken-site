import { ResponsivePie } from "@nivo/pie";
import React, { useEffect } from "react";

const Piechart = ({
  data,
  pieChartData,
  setPieChartData,
  gweiToEther,
}: any) => {
  const usedHues = new Set();
  const getRandomColor = () => {
    let hue;
    // Generate a unique hue
    do {
      hue = Math.floor(Math.random() * 360);
    } while (usedHues.has(hue));

    usedHues.add(hue);
    const saturation = 70; // fixed saturation
    const lightness = 50; // fixed lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  useEffect(() => {
    if (Array.isArray(data?.balances) && data?.balances?.length > 0) {
      const chartData = data?.balances?.map((item: any) => ({
        id:
          item.address.substring(0, 6) +
          "..." +
          item.address.substring(item.address.length - 4),
        label:
          item.address.substring(0, 6) +
          "..." +
          item.address.substring(item.address.length - 4),
        color: getRandomColor(),
        value: item.balance,
        tooltip : item.address
      }));
      setPieChartData(chartData);
    }
  }, [data]);

  return (
    <>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 40, bottom: 100, left: 20 }}
        startAngle={-51}
        padAngle={0.7}
        enableArcLabels={false}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
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
                Value: {gweiToEther(input?.datum?.data?.value)}
              </div>
              <div className="font-bold">
                Address: {input?.datum?.data?.tooltip}
              </div>
            </div>
          );
        }}
        
        borderWidth={1}
        colors={["#17257c", "#1290FF", "#3851f4"]}
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
      />
    </>
  );
};

export default Piechart;
