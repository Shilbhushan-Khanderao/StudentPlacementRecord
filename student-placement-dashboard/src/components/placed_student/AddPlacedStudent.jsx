import React, { useEffect, useState } from "react";
import {
  addPlacedStudent,
  getStudentyById,
} from "../../services/Adminservices";
import { Button } from "react-daisyui";
import { useLocation, useNavigate } from "react-router-dom";

function AddPlacedStudent() {
  const [company, setCompany] = useState("");
  const [posterCreated, setPosterCreated] = useState(false);
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const studentId = location.state?.id;

  useEffect(() => {
    getStudentyById(studentId)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => console.log(error));
  }, [studentId]);

  const handleAddPlacedStudent = (e) => {
    e.preventDefault();
    const stud = {
      ...student,
      company: company,
      posterCreated: posterCreated,
    };
    console.log(stud);
    addPlacedStudent(stud)
      .then((response) => {
        if (response.data.status === "success") {
          navigate("/placed-students");
        }
      })
      .catch((error) => console.log("Error from addPlacedStudent" + error));
  };

  const handleChecked = () => setPosterCreated(!posterCreated);

  return (
    <>
      <div className="font-sans w-full">
        <div className="items-center">
          <div className="stats stats-vertical">
            <div className="stat">
              <div className="stat-value">Name - {student.name}</div>
              <div className="stat-value">PRN - {student.prn}</div>
              <div className="stat-value">Center - {student.centre}</div>
            </div>
          </div>
          <form className="form-control flex w-1/4 ms-5">
            <label className="w-30">
              <div className="label">
                <span className="label-text">Organization</span>
              </div>
              <input
                type="text"
                placeholder="Enter Organization"
                name="company"
                value={company}
                className="input input-bordered w-full "
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="">Poster Created</span>
                <input
                  type="checkbox"
                  name="posterCreated"
                  value={posterCreated}
                  className="checkbox checkbox-primary"
                  onChange={handleChecked}
                />
              </label>
            </div>
            <Button
              type="submit"
              className="btn btn-outline mt-2 w-28"
              onClick={handleAddPlacedStudent}
            >
              Placed
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPlacedStudent;
