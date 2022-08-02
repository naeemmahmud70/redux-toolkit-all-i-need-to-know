import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../../Redux/Slices/multiplyCounterSlice";

const MultiplyCounter = () => {
  const multipleNumber = useSelector((state) => state.multiplyCounter.value);
  const dispatch = useDispatch();
  return (
    <div className="shadow rounded p-3 mt-3 d-flex justify-content-center">
      <div>
        <button
        className="btn btn-primary fw-bold"
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          Decrement by amount
        </button>
        <span className="p-5 fw-bold">{multipleNumber}</span>
        <button
        className="btn btn-primary fw-bold"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
};

export default MultiplyCounter;
