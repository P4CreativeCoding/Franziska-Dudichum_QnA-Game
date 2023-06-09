import React, { useState } from "react";
import display from "../display/display:JSX"

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
        <div>
          <h2>Logged in successfully!</h2>
          {/* Render the rest of your app content here */}
        </div>
      )}
    </div>
  );
}

export default App;
