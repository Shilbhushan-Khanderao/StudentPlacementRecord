import React from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Label,
  LabelList,
} from "recharts";

function LabChart({ placementStats }) {
  const data = placementStats;
  return (
    <div className="w-full" style={{ height: "500px" }}>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fill="white" />
            <YAxis domain={[0, 100]} />
            <Legend />
            <Tooltip />
            <Bar dataKey="percentagePlaced" fill="#ffc658">
              <LabelList dataKey="percentagePlaced" fill="black" />
            </Bar>
            <Bar dataKey="placedStudents" stackId="a" fill="#dabfff">
              <LabelList dataKey="placedStudents" fill="green" />
            </Bar>
            <Bar dataKey="totalStudents" stackId="a" fill="#b0d0d3">
              <LabelList dataKey="totalStudents" fill="red" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for chart.</p>
      )}
    </div>
  );
}

export default LabChart;
