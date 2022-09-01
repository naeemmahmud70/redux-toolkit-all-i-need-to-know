import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/user/:id" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
