import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStudents, removeStudent } from "../../services/Adminservices";
import { MdOutlineUpdate, MdDeleteForever, MdCheck } from "react-icons/md";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import AddPlacedStudent from "../placed/AddPlacedStudent";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showPlaced, setShowPlaced] = useState(false);
  const [sid, setSid] = useState("");

  useEffect(() => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
        // console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleShowUpdate = (studentId) => {
    setShowUpdate(true);
    setSid(studentId);
  };

  const handleDelete = (studentId) => {
    removeStudent(studentId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handlePlaced = (studentId) => {
    setShowPlaced(true);
    setSid(studentId);
  };
  return (
    <>
      <h1 className="text-center text-3xl">All Students List</h1>
      {students.length ? (
        <div className="w-full">
          {showUpdate && (
            <UpdateStudent
              show={showUpdate}
              setShow={setShowUpdate}
              sid={sid}
            />
          )}
          {showAdd && <AddStudent show={showAdd} setShow={setShowAdd} />}
          {showPlaced && (
            <AddPlacedStudent
              show={showPlaced}
              setShow={setShowPlaced}
              sid={sid}
            />
          )}

          <div>
            <button
              className="btn btn-outline w-28 mt-2"
              onClick={handleShowAdd}
            >
              Add
            </button>
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
                  <td>{student.faculty}</td>
                  <td>{student.mentor}</td>
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

export default StudentsList;
