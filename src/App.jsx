/*eslint-disable*/

import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./Port_Views/Navbar";
import AboutTab from "./Port_Views/AboutTab";
import Home from "./Port_Views/Home";
import Board from "./Port_Views/Board";
import WIP from "./Port_Views/Wip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "@mui/material/";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutTab />} />
        <Route exact path="/Board" element={<Board />} />
        <Route exact path="/wip" element={<WIP />} />
      </Routes>
    </Router>
  );
}

export default App;
