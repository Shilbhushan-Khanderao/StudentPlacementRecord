import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { getStudentyById, updateStudent } from "../../services/Adminservices";
import { useNavigate } from "react-router-dom";

function UpdateStudent() {
  const [student, setStudent] = useState({
    batch: { name: "", batchName: "" },
    prn: "",
    name: "",
    teamNumber: "",
    centre: "",
    faculty: { name: "" },
    mentor: { name: "" },
  });

  const navigate = useNavigate();

  useEffect(() => {
    getStudentyById(sid)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
  }, [sid]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleFacultyChange = (newFacultyName) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      faculty: { ...prevStudent.faculty, name: newFacultyName },
    }));
  };

  const handleMentorChange = (newMentorName) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      mentor: { ...prevStudent.mentor, name: newMentorName },
    }));
  };

  const handleBatchChange = (newBatch) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      batch: { ...prevStudent.batch, name: newBatch },
    }));
  };

  const handleBatchNameChange = (newBatchName) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      batch: { ...prevStudent.batch, batchName: newBatchName },
    }));
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    updateStudent(student)
      .then((response) => {
        if (response.data.status === "success") {
          navigate("/students");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="font-sans w-full">
        <div className="font-bold text-xl">Update Student</div>
        <div className="items-center">
          <form className="form-control flex items-center">
            <label className="w-30">
              <div className="label">
                <span className="label-text">PRN</span>
              </div>
              <input
                type="number"
                placeholder="Enter PRN"
                name="prn"
                value={student.prn}
                className="input input-bordered w-full "
                onChange={handleChange}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={student.name}
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">Team Number</span>
              </div>
              <input
                type="number"
                placeholder="Enter Team No."
                name="teamNumber"
                value={student.teamNumber}
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">Faculty</span>
              </div>
              <input
                type="text"
                placeholder="Enter Faculty"
                name="faculty"
                value={student.faculty.name}
                className="input input-bordered w-full"
                onChange={(e) => handleFacultyChange(e.target.value)}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">Mentor</span>
              </div>
              <input
                type="text"
                placeholder="Enter Mentor"
                name="mentor"
                value={student.mentor.name}
                className="input input-bordered w-full"
                onChange={(e) => handleMentorChange(e.target.value)}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">Centre</span>
              </div>
              <select
                className="select select-bordered"
                name="centre"
                value={student.centre}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select
                </option>
                <option value={"KH"}>Kharghar</option>
                <option value={"JH"}>Juhu</option>
              </select>
            </label>
            <Button
              type="submit"
              className="btn btn-outline mt-2 w-28"
              onClick={handleUpdateStudent}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
