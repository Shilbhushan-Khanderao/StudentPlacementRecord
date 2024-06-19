import React, { useState } from "react";
import { importData } from "../services/Adminservices";

function ImportData() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const importCsvData = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    importData(formData)
      .then((response) => {
        console.log("Data Imported Success...");
      })
      .catch((error) => {
        console.log("Data Import Error: " + error);
      });
  };

  return (
    <div>
      <form>
        <input
          className="p-2"
          type="file"
          accept=".csv"
          onChange={handleChange}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={() => importCsvData(file)}
        >
          Import
        </button>
      </form>
    </div>
  );
}

export default ImportData;
