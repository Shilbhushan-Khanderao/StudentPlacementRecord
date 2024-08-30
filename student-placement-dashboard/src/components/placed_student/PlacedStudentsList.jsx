import React, { useState, useEffect } from "react";
import { MdOutlineUpdate, MdDeleteForever } from "react-icons/md";
import {
  getAllPlacedStudents,
  removePlacedStudent,
} from "../../services/Adminservices";
import UpdatePlacedStudent from "./UpdatePlacedStudent";
import { Link, NavLink } from "react-router-dom";

function PlacedStudentsList() {
  const [students, setStudents] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [sid, setSid] = useState("");

  useEffect(() => {
    getAllPlacedStudents()
      .then((response) => {
        setStudents(response.data);
        // console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleShowUpdate = (studentId) => {
    setShowUpdate(true);
    setSid(studentId);
  };

  const handleDelete = (studentId) => {
    removePlacedStudent(studentId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="text-center text-3xl">Placed Students List</h1>
      <Link to="/students" className="btn btn-primary mx-2">
        Students
      </Link>
      {students.length ? (
        <div className="w-full">
          {showUpdate && (
            <UpdatePlacedStudent
              show={showUpdate}
              setShow={setShowUpdate}
              sid={sid}
            />
          )}
          <table className="table">
            <thead>
              <tr>
                <th>PRN</th>
                <th>Name</th>
                <th>Team Number</th>
                <th>Faculty</th>
                <th>Mentor</th>
                <th>Centre</th>
                <th>Company</th>
                <th>Poster Created</th>
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
                  <td>{student.company.name}</td>
                  <td>{student.posterCreated === true ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-outline mx-0.5"
                      type="button"
                      onClick={() => handleShowUpdate(student.id)}
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

export default PlacedStudentsList;
