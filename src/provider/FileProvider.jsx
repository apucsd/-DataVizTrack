"use client";
import React, { createContext, useState, useContext } from "react";

const FileContext = createContext();

export const useFileContext = () => {
  return useContext(FileContext);
};

export const FileProvider = ({ children }) => {
  const [fileData, setFileData] = useState(null);
  const [chartType, setChartType] = useState("bar");

  const setFile = (data) => {
    setFileData(data);
  };
  const setChart = (data) => {
    setChartType(data);
  };

  return (
    <FileContext.Provider value={{ fileData, setFile, setChart, chartType }}>
      {children}
    </FileContext.Provider>
  );
};
