import React, { useState, useEffect } from "react";
import {
  getAllBatches,
  getMentorsPlacementStats,
  getMentorsPlacementStatsByBatch,
} from "../../../services/DashboardServices";
import MentorChart from "./MentorChart";
import MentorTable from "./MentorTable";

function MentorDashboard({}) {
  const [batches, setBatches] = useState([]);
  const [batchId, setBatchId] = useState("all");
  const [placementStats, setPlacementStats] = useState([]);

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    if (batches.length > 0) {
      if (batchId === "all") {
        fetchPlacementStats();
      } else {
        fetchPlacementStatsByBatch(batchId);
      }
    }
  }, [batchId, batches]);

  //MentorsStatistics methods
  const fetchPlacementStats = () => {
    getMentorsPlacementStats()
      .then((response) => setPlacementStats(response.data))
      .catch((error) => console.log(error));
  };

  const fetchPlacementStatsByBatch = (batchId) => {
    getMentorsPlacementStatsByBatch(batchId)
      .then((response) => {
        setPlacementStats(response.data);
      })
      .catch((error) => console.log(error));
  };

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
        <h1 className="text-center text-3xl">Mentor Dashboard</h1>
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
              <MentorChart placementStats={placementStats} />
            ) : (
              <p>Loading chart...</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-full">
            {placementStats.length > 0 ? (
              <MentorTable placementStats={placementStats} />
            ) : (
              <p>Loading table...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
