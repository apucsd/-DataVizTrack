"use client";
import useCSVData from "@/hooks/useCSVData";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const ShowPieChart = () => {
  const pieData = useCSVData();
  const colors = [
    "#FF5733",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#227093",
    "#00A896",
    "#3D5A80",
    "#98C4D8",
    "#E84855",
    "#455D7A",
    "#D9BF77",
    "#D1E8E2",
    "#3A506B",
  ];
  const formattedPieData = pieData?.map((item, index) => ({
    name: item["Employee Name"],
    "Total Working Hours": parseFloat(item["Total Working Hours"]),
    fill: colors[index % colors.length],
  }));
  console.log(pieData);
  return (
    <>
      <div className="my-20" style={{ width: "100%", height: 420 }}>
        <h1 className="text-center font-semibold text-4xl ">
          CSV To Pie Chart
        </h1>
        <h3 className="text-sm my-3 text-slate-600"> Total Working Hours</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 40, left: 30, bottom: 5 }}>
            <Pie
              dataKey="Total Working Hours"
              data={formattedPieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {formattedPieData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ShowPieChart;
