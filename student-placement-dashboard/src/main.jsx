import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import StudentsList from "./components/crud/StudentsList.jsx";
import PlacedStudentsList from "./components/placed/PlacedStudentsList.jsx";
import ImportData from "./components/crud/ImportData.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
