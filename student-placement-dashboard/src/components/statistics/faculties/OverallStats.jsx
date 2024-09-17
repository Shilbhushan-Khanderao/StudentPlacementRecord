import React from "react";

function OverallStats({ overallStatistics }) {
  const centreData = overallStatistics.centreData;
  const overallData = {
    totalCount: overallStatistics.totalCount,
    placedCount: overallStatistics.placedCount,
    placedPercentage: overallStatistics.placedPercentage,
  };

  return (
    <div className="overflow-x-auto flex-col">
      <table className="table">
        <thead>
          <tr>
            <th className="text-xl">Overall Analysis</th>
            {centreData.map((center) => (
              <th className="text-xl text-center" key={center.centre}>
                {center.centre}
              </th>
            ))}
            <th className="text-xl text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-xl">Placed Students</th>
            {centreData.map((center) => (
              <td className="text-xl text-center" key={center.centre}>
                {center.placedCount}
              </td>
            ))}
            <td className="text-xl text-center">{overallData.placedCount}</td>
          </tr>
          <tr>
            <th className="text-xl">Total Students</th>
            {centreData.map((center) => (
              <td className="text-xl text-center" key={center.centre}>
                {center.totalCount}
              </td>
            ))}
            <td className="text-xl text-center">{overallData.totalCount}</td>
          </tr>
          <tr>
            <th className="text-xl">Placed Percentage</th>
            {centreData.map((center) => (
              <td className="text-xl text-center" key={center.centre}>
                {center.placedPercentage}%
              </td>
            ))}
            <td className="text-xl text-center">
              {overallData.placedPercentage}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OverallStats;
