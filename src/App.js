import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import CreatingObject from "./components/CreatingObject/CreatingObject";
import JsonAPIUsers from "./components/JsonAPIUsers/JsonAPIUsers";
import MultiplyCounter from "./components/MultipyCounter/MultiplyCounter";
import ToggleStatus from "./components/ToggleStatus/ToggleStatus";

function App() {
  return (
   <div className="bg-light">
      <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <Counter></Counter>
          <MultiplyCounter></MultiplyCounter>
          <ToggleStatus></ToggleStatus>
          <JsonAPIUsers></JsonAPIUsers>
        </div>
        <div className="col-md-6">
          <CreatingObject></CreatingObject>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
