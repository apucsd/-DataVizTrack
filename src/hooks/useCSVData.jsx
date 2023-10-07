import { useFileContext } from "@/provider/FileProvider";

const useCSVData = () => {
  const { fileData } = useFileContext();

  if (fileData) {
    const lines = fileData.split("\n");
    const headers = lines[0].split(",");
    const parsedData = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(",");
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        const header = headers[j].trim();
        const value = currentLine[j] ? currentLine[j].trim() : "";
        obj[header] = value;
      }

      // Calculate total working hours
      const checkInTime = new Date(`2000/01/01 ${obj["Check-In Time"]}`);
      let checkOutTime = new Date(`2000/01/01 ${obj["Check-Out Time"]}`);

      // If check-out time is before check-in time, assume it's on the next day
      if (checkOutTime < checkInTime) {
        checkOutTime = new Date(`2000/01/02 ${obj["Check-Out Time"]}`);
      }

      const diffInMinutes = (checkOutTime - checkInTime) / 1000 / 60;
      obj["Total Working Hours"] = (diffInMinutes / 60).toFixed(2);

      parsedData.push(obj);
    }

    return parsedData;
  }
};
export default useCSVData;
