import React from "react";
import UserDetails from "../UserDetails/UserDetails";
import Counter from "./Counter/Counter";
import CreatingObject from "./CreatingObject/CreatingObject";
import JsonAPIUsers from "./JsonAPIUsers/JsonAPIUsers";
import MultiplyCounter from "./MultipyCounter/MultiplyCounter";
import ToggleStatus from "./ToggleStatus/ToggleStatus";

const Home = () => {

  return (
    <div className="bg-light">
      <div className="container py-4">
        <h1 className="text-center text-secondary fw-bold">
          Playing with Redux-toolkit.
        </h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <Counter></Counter>
            <MultiplyCounter></MultiplyCounter>
            <ToggleStatus></ToggleStatus>
            <JsonAPIUsers></JsonAPIUsers>
          </div>
          <div className="col-md-6">
            <CreatingObject></CreatingObject>
            <UserDetails></UserDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
