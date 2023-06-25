import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom';
import Display from "./components/display/displayQuestion";
import Login from "./components/Login/Login.jsx";
import Multiplayer from "./components/multiplayer/multiplayer";
import DisplayAnswer from "./components/display/displayAnswer";
import DisplayQuestion from "./components/display/displayQuestion";




  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/displayQuestion" element={<Display />} />
          <Route path="/selectPlayer" element={<Multiplayer />} />
          <Route path="/displayAnswer" element={<DisplayAnswer />} /> 
          <Route path="/displayQuestion" element={<DisplayQuestion/>} /> 


        </Routes>
      </Router>
    );
  };

export default App;
