import React from "react";
import FacultyTeamTable from "./FacultyTeamTable";
import OverallStats from "./OverallStats";
import LabChart from "./LabChart";

function Dashboard() {
  return (
    <div>
      <h1 className="text-center text-3xl">Dashboard</h1>
      <FacultyTeamTable />
      <LabChart />
      <OverallStats />
    </div>
  );
}

export default Dashboard;
