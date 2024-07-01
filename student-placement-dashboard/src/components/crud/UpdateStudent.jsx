import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { getStudentyById, updateStudent } from "../../services/Adminservices";

function UpdateStudent({ sid, show, setShow }) {
  const [student, setStudent] = useState({
    prn: "",
    name: "",
    teamNumber: "",
    centre: "",
    faculty: "",
    mentor: "",
  });

  useEffect(() => {
    getStudentyById(sid)
      .then((response) => setStudent(response.data))
      .catch((error) => console.log(error));
  }, [sid]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    updateStudent(student)
      .then((response) => console.log(response))
      .then(() => closeModal())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="font-sans">
        <Modal open={show}>
          <div className="font-bold text-xl">Update Student</div>
          <form>
            <Button
              size="md"
              color="ghost"
              shape="circle"
              className="absolute right-2 top-2"
              onClick={closeModal}
            >
              X
            </Button>
            <label className="form-control w-full ">
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
            <label className="form-control w-full">
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
            <label className="form-control w-full">
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
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Faculty</span>
              </div>
              <input
                type="text"
                placeholder="Enter Faculty"
                name="faculty"
                value={student.faculty}
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Mentor</span>
              </div>
              <input
                type="text"
                placeholder="Enter Mentor"
                name="mentor"
                value={student.mentor}
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>
            <label className="form-control w-full ">
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
        </Modal>
      </div>
    </>
  );
}

export default UpdateStudent;
