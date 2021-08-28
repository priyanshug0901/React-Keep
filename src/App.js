// import Content from "./Components/Content/Content";
import Navbar from "./Components/Navigation/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import MainArea from "./Components/MainArea/MainArea";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr style={{ borderColor: "#f1f3f4" }} />
        <div className="body">
          <SideBar />
          <MainArea />
        </div>
      </div>
    </Router>
  );
}

export default App;
