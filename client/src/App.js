import React, { useState } from "react";
import Display from "./components/display/display.jsx";

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

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
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
