import React from "react";

function MentorTable({ placementStats }) {
  return (
    <div className="overflow-x-auto flex-col">
      <table className="table table-md">
        <thead>
          <tr>
            <th className="text-xl">Mentor</th>
            <th className="text-xl text-center">Placed Students</th>
            <th className="text-xl text-center">Total Students</th>
            <th className="text-xl text-center">Placed Percentage</th>
          </tr>
        </thead>
        <tbody>
          {placementStats.map((placementStat) => (
            <tr key={placementStat.name}>
              <td className="text-lg">{placementStat.name}</td>
              <td className="text-center text-lg">
                {placementStat.placedStudents}
              </td>
              <td className="text-center text-lg">
                {placementStat.totalStudents}
              </td>
              <td className="text-center text-lg">
                {placementStat.percentagePlaced}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MentorTable;
