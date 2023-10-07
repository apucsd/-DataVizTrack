"use client";
import { useFileContext } from "@/provider/FileProvider";
import React from "react";
import Swal from "sweetalert2";

const UpLoadFile = () => {
  const { setFile } = useFileContext();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "text/csv") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFile(reader.result);
        };
        reader.readAsText(file);
      } else {
        // Handle error if the uploaded file is not a CSV
        Swal.fire({
          text: "Please upload a CSV file.",
          imageUrl:
            "https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?w=900&t=st=1696578469~exp=1696579069~hmac=646f1d874bfac79dd61038cd5dc5605778fc6bfacfd6d2eeb6addf290244ae66",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });

        event.target.value = ""; //Clear the input field
      }
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-3">
        View Your CSV at DataVizTrack
      </h1>
      <p>Open and view CSV files.</p>
      <br />
      <br />
      <div className="border-dashed border-4 p-5 border-blue-500 w-[90%] mx-auto">
        <div className="mx-auto my-2 max-w-xs">
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Upload file
          </label>
          <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
            <div className="space-y-1 text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="text-gray-600">
                <a
                  href="#"
                  className="font-medium pr-1 text-primary-500 hover:text-primary-700"
                >
                  Click to upload
                </a>
                or drag and drop
              </div>
              <p className="text-sm text-gray-500">csv (max. 100kb-200kb)</p>
            </div>
            <input
              onChange={handleFileChange}
              type="file"
              className="sr-only"
            />
          </label>
        </div>
      </div>
      <div>
        <p className="text-gray-700 my-10">
          By uploading your files or using our service you agree with our Terms
          of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default UpLoadFile;
