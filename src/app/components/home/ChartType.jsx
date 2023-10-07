"use client";

import { useFileContext } from "@/provider/FileProvider";
import html2canvas from "html2canvas";
import React from "react";
import pdf from "../../../../public/pdf.svg";
import png from "../../../../public/png.svg";
import Image from "next/image";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";

const ChartType = () => {
  const { user } = useAuth();
  const { setChart } = useFileContext();
  const handleChartType = (e) => {
    const selectedValue = e.target.value;
    setChart(selectedValue);
  };
  const downLoadPNG = () => {
    const targetElement = document.getElementById("chart");
    if (!targetElement) {
      return Swal.fire("Please upload your file first");
    }
    if (!user) {
      return Swal.fire("Please login before download");
    }
    html2canvas(targetElement).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      // Create a download link and trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "chart-visualization.png";
      downloadLink.click();
    });
  };
  const downLoadPDF = () => {
    const targetElement = document.getElementById("chart");
    if (!targetElement) {
      return Swal.fire("Please upload your file first");
    }
    if (!user) {
      return Swal.fire("Please login before download");
    }
    html2canvas(targetElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth(); // Width of the PDF document (in mm)

      const imgWidth = 210; // Width of the captured image on the PDF (in mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate the height based on the aspect ratio

      const xPos = (pdfWidth - imgWidth) / 2; // Calculate X position to center the image horizontally
      const yPos = 10; // 10 mm margin from the top

      pdf.addImage(imgData, "PNG", xPos, yPos, imgWidth, imgHeight);
      pdf.save("chart-visualization.pdf");
    });
  };
  return (
    <div className="grid grid-cols-3 justify-center md:gap-20 gap-5 px-10 items-center  text-center">
      <h2>Chart Type: </h2>
      <div>
        <select
          onChange={handleChartType}
          className="mt-1.5 py-3 md:px-20 px-8 w-full border rounded-lg border-gray-300 text-gray-700"
        >
          <option className="p-3" value="bar">
            Bar
          </option>
          <option value="pie">Pie</option>
          <option value="line">Line</option>
        </select>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <button onClick={downLoadPDF} className="btn2">
          Download{" "}
          <Image src={pdf} width={10} height={10} className="w-8 h-6" alt="" />
        </button>

        <button onClick={downLoadPNG} className="btn">
          Download{" "}
          <Image width={10} height={10} src={png} className="w-8 h-6" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChartType;
