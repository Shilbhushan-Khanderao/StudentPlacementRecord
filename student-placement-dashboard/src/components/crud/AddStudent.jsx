import React, { useRef, useState } from "react";
import { Button, Modal } from "react-daisyui";

function AddStudent({ show, setShow }) {
  const [student, setStudent] = useState({});

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div className="font-sans">
        <Modal open={show}>
          <div className="font-bold text-xl">Add New Student</div>
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
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Team Number</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Faculty</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Mentor</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Centre</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <Button className="btn btn-outline mt-2 w-28">Add</Button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default AddStudent;
