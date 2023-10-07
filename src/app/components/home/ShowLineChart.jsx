"use client";
import useCSVData from "@/hooks/useCSVData";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const ShowLineChart = () => {
  const lineData = useCSVData();
  return (
    <>
      <div
        className="my-20 duration-700"
        style={{ width: "100%", height: 420 }}
      >
        <h1 className="text-center font-semibold text-4xl my-10">
          CSV To Line Chart
        </h1>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={lineData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Employee Name" />
            <YAxis dataKey="Total Working Hours" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Total Working Hours"
              name="Total Working Hours"
              stroke="#00AB39FF"
              fill="#FF17D8FF"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ShowLineChart;
