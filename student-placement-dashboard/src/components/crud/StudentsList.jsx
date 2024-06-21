import React, { useEffect, useState } from "react";
import { getAllStudents } from "../../services/Adminservices";
import { MdOutlineUpdate, MdDeleteForever, MdCheck } from "react-icons/md";
import AddStudent from "./AddStudent";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }, [students]);

  const handleShow = () => {
    setShow(true);
  };

  const handleUpdate = () => {};
  return (
    <>
      {students.length ? (
        <div className="w-full">
          {show && <AddStudent show={show} setShow={setShow} />}
          <button className="btn btn-outline w-28 mt-2" onClick={handleShow}>
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
