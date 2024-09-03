import React, { useEffect, useState } from "react";
import { getAllStudents } from "../../services/Adminservices";
function FacultyTeamTable() {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = () => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };

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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.faculty.name}</td>
              <td>{student.faculty.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyTeamTable;
