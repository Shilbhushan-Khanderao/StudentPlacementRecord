import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-daisyui";
import { addStudent } from "../../services/Adminservices";

function AddStudent() {
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

  const handleAddStudent = (e) => {
    e.preventDefault();
    addStudent(student)
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
        <div className="font-bold text-xl text-center">Add New Student</div>
        <div className="items-center">
          <form className="form-control flex items-center">
            <label className="w-30">
              <div className="label">
                <span className="label-text">Batch</span>
              </div>
              <input
                type="text"
                placeholder="Enter Batch"
                value={student.batch.name}
                className="input input-bordered w-30"
                onChange={(e) => {
                  handleBatchChange(e.target.value);
                }}
              />
            </label>
            <label className="w-30 ">
              <div className="label">
                <span className="label-text">Batch Name</span>
              </div>
              <input
                type="text"
                placeholder="Enter Batch Name"
                value={student.batch.batchName}
                className="input input-bordered w-30"
                onChange={(e) => {
                  handleBatchNameChange(e.target.value);
                }}
              />
            </label>
            <label className="w-30">
              <div className="label">
                <span className="label-text">PRN</span>
              </div>
              <input
                type="number"
                placeholder="Enter PRN"
                name="prn"
                value={student.prn}
                className="input input-bordered w-30 "
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
                className="input input-bordered w-30"
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
                className="input input-bordered w-30"
                onChange={handleChange}
              />
            </label>
            <label className="w-30 ">
              <div className="label">
                <span className="label-text">Faculty</span>
              </div>
              <input
                type="text"
                placeholder="Enter Faculty"
                name="faculty"
                value={student.faculty.name}
                className="input input-bordered w-30"
                onChange={(e) => {
                  handleFacultyChange(e.target.value);
                }}
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
                className="input input-bordered w-30"
                onChange={(e) => {
                  handleMentorChange(e.target.value);
                }}
              />
            </label>
            <label className="">
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
              className="btn btn-outline mt-2 w-20"
              onClick={handleAddStudent}
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
