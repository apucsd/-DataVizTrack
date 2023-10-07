"use client";
import { useFileContext } from "@/provider/FileProvider";
import ChartType from "./components/home/ChartType";
import ShowLineChart from "./components/home/ShowLineChart";
import ShowPieChart from "./components/home/ShowPieChart";
import UpLoadFile from "./components/home/UpLoadFile";
import ShowBarChart from "./components/home/ShowBarChart";

export default function HomePage() {
  const { chartType, fileData } = useFileContext();
  return (
    <div className="text-center my-20">
      <UpLoadFile></UpLoadFile>
      <ChartType></ChartType>
      {fileData && (
        <div id="chart" className="pb-10 md:w-[90%] mx-auto">
          {chartType == "bar" && <ShowBarChart></ShowBarChart>}
          {chartType == "line" && <ShowLineChart></ShowLineChart>}
          {chartType == "pie" && <ShowPieChart></ShowPieChart>}
          <p>
            © {new Date().getFullYear()} <b>DataVizTrack</b>. All rights
            reserved.
          </p>
        </div>
      )}
    </div>
  );
}
