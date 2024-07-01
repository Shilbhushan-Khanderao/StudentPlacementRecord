import React, { useEffect, useState } from "react";
import {
  addPlacedStudent,
  getAllStudents,
  getStudentyById,
  removeStudent,
} from "../../services/Adminservices";
import { MdOutlineUpdate, MdDeleteForever, MdCheck } from "react-icons/md";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [sid, setSid] = useState("");
  const [student, setStudent] = useState({});

  useEffect(() => {
    getAllStudents()
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
    removeStudent(studentId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handlePlaced = (studentId) => {
    getStudentyById(studentId)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));

    addPlacedStudent(student)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
