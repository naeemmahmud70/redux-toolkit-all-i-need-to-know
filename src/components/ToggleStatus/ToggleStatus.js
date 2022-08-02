import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { active, inactive } from "../../Redux/Slices/toggleStatusSlice";

const ToggleStatus = () => {
  const status = useSelector((state) => state.toggleStatus.status);
  const dispatch = useDispatch();

  return (
    <div className="shadow rounded p-3 mt-3 d-flex justify-content-center">
      <div>
        <button
          className="btn btn-primary fw-bold"
          onClick={() => dispatch(inactive())}
        >
          Inactive
        </button>
        <span className="p-5 fw-bold">
          This user is {status ? "Active" : "Inactive"}
        </span>
        <button
          className="btn btn-primary fw-bold"
          onClick={() => dispatch(active())}
        >
          Active
        </button>
      </div>
    </div>
  );
};

export default ToggleStatus;
