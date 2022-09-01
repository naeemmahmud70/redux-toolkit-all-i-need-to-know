import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../Redux/Slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="shadow rounded p-3 d-flex justify-content-center">
      <div>
        <button
          className="btn btn-primary fw-bold"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className="p-3 fw-bold">{count}</span>
        <button
          className="btn btn-primary fw-bold"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
