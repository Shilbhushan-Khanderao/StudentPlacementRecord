import React, { useState } from "react";
import { importData } from "../../services/Adminservices";

function ImportData() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [batchName, setBatchName] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleBatchNameChange(e) {
    setBatchName(e.target.value);
  }

  const importCsvData = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("batchName", batchName);
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
          className="file-input file-input-bordered w-full max-w-xs"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="file-input file-input-bordered w-full max-w-xs"
          type="text"
          value={batchName}
          onChange={handleBatchNameChange}
        />
        <input
          className="file-input file-input-bordered w-full max-w-xs"
          type="file"
          accept=".csv"
          onChange={handleChange}
        />
        <button
          className="btn btn-outline ml-1"
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
