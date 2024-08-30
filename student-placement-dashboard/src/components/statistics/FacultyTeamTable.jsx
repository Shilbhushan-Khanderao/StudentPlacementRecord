import React from "react";

function FacultyTeamTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-1/2">
        <thead>
          <tr>
            <th className="text-xl">Faculty</th>
            <th className="text-xl">Placed Students</th>
            <th className="text-xl">Total Students</th>
            <th className="text-xl">Placed Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{}</th>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FacultyTeamTable;
