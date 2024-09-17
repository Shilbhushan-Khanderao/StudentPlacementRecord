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
  ReferenceLine,
  Brush,
} from "recharts";

function MentorChart({ placementStats }) {
  const data = placementStats;

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value, fill } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill={fill}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };
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
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
            <Tooltip />
            <ReferenceLine y={0} stroke="#36454F" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar dataKey="percentagePlaced" fill="#ffc658">
              <LabelList
                dataKey="percentagePlaced"
                fill="white"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="placedStudents" stackId="a" fill="#dabfff">
              <LabelList dataKey="placedStudents" fill="green" position="end" />
            </Bar>
            <Bar dataKey="totalStudents" stackId="a" fill="#b0d0d3">
              <LabelList
                dataKey="totalStudents"
                fill="red"
                content={renderCustomizedLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for chart.</p>
      )}
    </div>
  );
}

export default MentorChart;
