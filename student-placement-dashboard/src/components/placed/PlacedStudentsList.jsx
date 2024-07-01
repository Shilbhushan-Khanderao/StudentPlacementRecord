import React, { useState, useEffect } from "react";
import { MdOutlineUpdate, MdDeleteForever, MdCheck } from "react-icons/md";
import {
  getAllPlacedStudents,
  removePlacedStudent,
} from "../../services/Adminservices";
import AddPlacedStudent from "./AddPlacedStudent";
import UpdatePlacedStudent from "./UpdatePlacedStudent";

function PlacedStudentsList() {
  const [students, setStudents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [sid, setSid] = useState("");

  useEffect(() => {
    getAllPlacedStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }, [students]);

  const handleShowAdd = () => {
    setShowAdd(true);
  };

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
      {students.length ? (
        <div className="w-full">
          {showUpdate && (
            <UpdatePlacedStudent
              show={showUpdate}
              setShow={setShowUpdate}
              sid={sid}
            />
          )}
          {showAdd && <AddPlacedStudent show={showAdd} setShow={setShowAdd} />}
          <button className="btn btn-outline w-28 mt-2" onClick={handleShowAdd}>
            Add
          </button>
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
                  <td>{student.faculty}</td>
                  <td>{student.mentor}</td>
                  <td>{student.centre}</td>
                  <td>{student.company}</td>
                  <td>{student.posterCreated}</td>
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

export default PlacedStudentsList;
