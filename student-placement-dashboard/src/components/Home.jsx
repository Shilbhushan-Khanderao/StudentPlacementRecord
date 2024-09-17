import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="font-bold text-center text-4xl">Home</h1>
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
        <div className="text-xl btn btn-primary mx-2">
          <NavLink to="/faculty-dashboard">Faculty Dashboard</NavLink>
        </div>
        <div className="text-xl btn btn-primary mx-2">
          <NavLink to="/mentor-dashboard">Mentor Dashboard</NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
