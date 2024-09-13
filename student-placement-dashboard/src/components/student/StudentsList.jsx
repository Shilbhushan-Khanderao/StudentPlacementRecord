import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllStudents, removeStudent } from "../../services/Adminservices";
import { MdOutlineUpdate, MdDeleteForever, MdCheck } from "react-icons/md";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handlePlaced = (studentId) => {
    if (studentId !== null && studentId !== undefined)
      navigate("/add-placedstudent", { state: { id: studentId } });
  };

  const handleUpdate = (studentId) => {
    if (studentId !== null && studentId !== undefined)
      navigate("/update-student", { state: { id: studentId } });
  };

  const handleDelete = (studentId) => {
    removeStudent(studentId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="text-center text-3xl">All Students List</h1>
      {students.length ? (
        <div className="w-full">
          <div>
            <Link
              to="/add-student"
              className="btn btn-primary btn-outline mx-1"
            >
              Add Student
            </Link>
            <Link to="/placed-students" className="btn btn-primary mx-1">
              Placed Students
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>PRN</th>
                <th>Name</th>
                <th>Team Number</th>
                <th>Faculty</th>
                <th>Mentor</th>
                <th>Centre</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.prn}</td>
                  <td>{student.name}</td>
                  <td>{student.teamNumber}</td>
                  <td>{student.faculty.name}</td>
                  <td>{student.mentor.name}</td>
                  <td>{student.centre}</td>
                  <td>
                    <button
                      className="btn btn-outline mx-0.5"
                      type="button"
                      onClick={() => handlePlaced(student.id)}
                    >
                      <MdCheck />
                    </button>
                    <button
                      to="/update-student"
                      className="btn btn-outline mx-1"
                      onClick={() => handleUpdate(student.id)}
                    >
                      <MdOutlineUpdate />
                    </button>

                    <button
                      className="btn btn-outline mx-0.5"
                      type="button"
                      onClick={() => handleDelete(student.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default StudentsList;
