import React, { useState } from 'react'
import "./Login.css";
import Multiplayer from '../multiplayer/multiplayer';

 
const   Login = () => {
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
          
          <p>Pssst... the password is 12...</p>
        </div>
      ) : (
      
        <div className="Game">
        <Multiplayer/>
        </div>
      
    )}
        </div>
     );
}

export default Login;