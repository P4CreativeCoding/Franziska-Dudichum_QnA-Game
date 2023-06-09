import React, { useState } from "react";
import Display from "./components/display/display.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "12") {
      setIsLoggedIn(true);
    } else {
      alert("Access denied! Incorrect password.");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="LoginScreen">
          <h2>Login</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>{<Display />}</div>
      )}
    </div>
  );
}

export default App;
