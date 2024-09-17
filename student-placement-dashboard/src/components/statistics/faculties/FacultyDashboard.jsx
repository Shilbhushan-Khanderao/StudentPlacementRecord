import React, { useEffect, useState } from "react";
import FacultyTable from "./FacultyTable";
import LabChart from "./LabChart";
import OverallStats from "./OverallStats";
import {
  getAllBatches,
  getFacultiesPlacementStats,
  getFacultiesPlacementStatsByBatch,
  getOverallPlacementStats,
  getOverallPlacementStatsByBatch,
} from "../../../services/DashboardServices";

function FacultyDashboard() {
  const [batches, setBatches] = useState([]);
  const [batchId, setBatchId] = useState("all");
  const [placementStats, setPlacementStats] = useState([]);
  const [overallStatistics, setOverallStatistics] = useState(null);

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    if (batches.length > 0) {
      if (batchId === "all") {
        fetchPlacementStats();
        fetchOverallStats();
      } else {
        fetchPlacementStatsByBatch(batchId);
        fetchOverallStatsByBatch(batchId);
      }
    }
  }, [batchId, batches]);

  const fetchPlacementStats = () => {
    getFacultiesPlacementStats()
      .then((response) => setPlacementStats(response.data))
      .catch((error) => console.log(error));
  };

  const fetchPlacementStatsByBatch = (batchId) => {
    getFacultiesPlacementStatsByBatch(batchId)
      .then((response) => {
        setPlacementStats(response.data);
      })
      .catch((error) => console.log(error));
  };
  //FacultiesStatistics

  const fetchOverallStatsByBatch = (batchId) => {
    getOverallPlacementStatsByBatch(batchId)
      .then((response) => setOverallStatistics(response.data))
      .catch((error) => console.log(error));
  };

  const fetchOverallStats = () => {
    getOverallPlacementStats()
      .then((response) => setOverallStatistics(response.data))
      .catch((error) => console.log(error));
  };
  //OverallStatistics

  const fetchBatches = () => {
    getAllBatches()
      .then((response) => {
        setBatches(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleBatchChange = (event) => {
    const selectedBatch = event.target.value;
    setBatchId(selectedBatch);
  };

  return (
    <>
      <div className="text-center mt-2">
        <h1 className="text-center text-3xl">Faculty Dashboard</h1>
        <select
          className="btn btn-outline text-center"
          value={batchId}
          onChange={handleBatchChange}
          disabled={batches.length === 0}
        >
          <option value="all">All Batches</option>
          {batches.map((singleBatch, index) => (
            <option key={index} value={singleBatch.id}>
              {singleBatch.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <div className="w-full">
            {placementStats.length > 0 ? (
              <LabChart placementStats={placementStats} />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-1/2">
            {placementStats.length > 0 ? (
              <FacultyTable placementStats={placementStats} />
            ) : (
              <p>Loading table...</p>
            )}
          </div>
          <div className="w-1/2">
            {overallStatistics !== null ? (
              <OverallStats overallStatistics={overallStatistics} />
            ) : (
              <p>Loading table...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default FacultyDashboard;
