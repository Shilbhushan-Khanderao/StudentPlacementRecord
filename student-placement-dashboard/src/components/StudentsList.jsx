import React, { useEffect, useState } from "react";
import { getAllStudents } from "../services/Adminservices";
import { MdOutlineUpdate, MdDeleteForever } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents()
      .then((response) => {
        // console.log(response);
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {students.length ? (
        <>
          <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 border-b-2 border-gray-300">PRN</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">Name</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">
                  Team Number
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300">
                  Faculty
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300">Mentor</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">Centre</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="bg-gray-600 text-white hover:bg-gray-500"
                >
                  <td className="px-4 py-2 border-b-2 text-center border-gray-300">
                    {student.prn}
                  </td>
                  <td className="px-4 py-2 border-b-2 border-gray-300">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 border-b-2 text-center border-gray-300">
                    {student.teamNumber}
                  </td>
                  <td className="px-4 py-2 border-b-2 text-center border-gray-300">
                    {student.faculty}
                  </td>
                  <td className="px-4 py-2 border-b-2 text-center border-gray-300">
                    {student.mentor}
                  </td>
                  <td className="px-4 py-2 border-b-2 text-center border-gray-300">
                    {student.centre}
                  </td>
                  <td className="border-b-2 text-center">
                    <button
                      className="bg-white hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                      type="button"
                      onClick={() => handlePlaced(student.id)}
                    >
                      <FcCheckmark />
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                      type="button"
                      onClick={() => handleUpdate(student.id)}
                    >
                      <MdOutlineUpdate />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default StudentsList;
