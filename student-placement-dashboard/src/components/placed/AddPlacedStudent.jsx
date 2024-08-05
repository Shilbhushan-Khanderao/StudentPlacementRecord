import React, { useEffect, useState } from "react";
import {
  addPlacedStudent,
  getStudentyById,
} from "../../services/Adminservices";
import { Modal, Button } from "react-daisyui";

function AddPlacedStudent({ show, setShow, sid }) {
  const [company, setCompany] = useState("");
  const [posterCreated, setPosterCreated] = useState(false);
  const [student, setStudent] = useState({});

  useEffect(() => {
    getStudentyById(sid)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => console.log(error));
  }, [sid]);

  const handleAddPlacedStudent = () => {
    const stud = {
      ...student,
      company: company,
      posterCreated: posterCreated,
    };
    addPlacedStudent(stud)
      .then((response) => {
        console.log("Student sent to DB : " + stud);
        console.log(response);
      })
      .catch((error) => console.log("Error from addPlacedStudent" + error));
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleChecked = () => setPosterCreated(!posterCreated);

  return (
    <>
      <div className="font-sans">
        <Modal open={show}>
          <div className="font-bold text-xl">Placed Student</div>
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
        </Modal>
      </div>
    </>
  );
}

export default AddPlacedStudent;
