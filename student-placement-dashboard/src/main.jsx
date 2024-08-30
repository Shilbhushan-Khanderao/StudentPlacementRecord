import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import StudentsList from "./components/student/StudentsList.jsx";
import PlacedStudentsList from "./components/placed_student/PlacedStudentsList.jsx";
import ImportData from "./components/student/ImportData.jsx";
import Layout from "./Layout.jsx";
import AddStudent from "./components/student/AddStudent.jsx";
import UpdateStudent from "./components/student/UpdateStudent.jsx";
import UpdatePlacedStudent from "./components/placed_student/UpdatePlacedStudent.jsx";
import AddPlacedStudent from "./components/placed_student/AddPlacedStudent.jsx";
import Dashboard from "./components/statistics/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/students",
        element: <StudentsList />,
      },
      {
        path: "/placed-students",
        element: <PlacedStudentsList />,
      },
      {
        path: "/import-data",
        element: <ImportData />,
      },
      {
        path: "/add-student",
        element: <AddStudent />,
      },
      {
        path: "/update-student",
        element: <UpdateStudent />,
      },
      {
        path: "/add-placedstudent",
        element: <AddPlacedStudent />,
      },
      {
        path: "/update-placedstudent",
        element: <UpdatePlacedStudent />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
