"use client";
import useCSVData from "@/hooks/useCSVData";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ShowBarChart = () => {
  const chartData = useCSVData();
  return (
    <>
      <div
        id="bar"
        className="transition-all duration-800 my-10 py-10 !bg-transparent"
        style={{ width: "100%", height: 420 }}
      >
        <h1 className="text-center font-semibold text-4xl">CSV To Bar Chart</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Employee Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Check-In Time"
              stackId="a"
              fill="#775CFFFF"
              name="Check-In Time"
            />
            <Bar
              dataKey="Check-Out Time"
              stackId="b"
              fill="#FF17D8FF"
              name="Check-Out Time"
            />
            <Bar
              dataKey="Total Working Hours"
              stackId="c"
              fill="#00AB39FF"
              name="Total Working Hours"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ShowBarChart;
