import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1 className="font-bold text-center text-4xl">Dashboard</h1>
      <div className="flex justify-center content-center h-auto p-4 m-5">
        <div className="text-xl btn btn-primary mx-2">
          <NavLink to="/import-data">Import data</NavLink>
        </div>
        <div className="text-xl btn btn-primary mx-2">
          <NavLink to="/students">All Students</NavLink>
        </div>
        <div className="text-xl btn btn-primary mx-2">
          <NavLink to="/placed-students">Placed Students</NavLink>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
