import React, { useState } from "react";
import { importData } from "../../services/Adminservices";

function ImportData() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  const importCsvData = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
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
        <div className="flex-col">
          <label className="text-lg text-">Batch : </label>
          <input
            className="file-input file-input-bordered w-full max-w-xs p-1 m-1"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Batch"
          />
          <input
            className="file-input file-input-bordered w-full max-w-xs m-1"
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
        </div>
      </form>
    </div>
  );
}

export default ImportData;
