/*eslint-disable*/

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./Port_Views/Navbar";
import AboutTab from "./Port_Views/AboutTab";
import Home from "./Port_Views/Home";
import ExpEdu from "./Port_Views/ExpEdu";
import Board from "./Port_Views/Board";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutTab />} />
        <Route exact path="/expedu" element={<ExpEdu />} />
        <Route exact path="/Board" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;
