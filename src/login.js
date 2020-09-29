import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function onSubmit() {
    console.log(username, password);
  }
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-header">
          <img
            src="https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png"
            alt="website logo"
          ></img>
          <p>*Website Name*</p>
        </div>
        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={handleUsername}
            required
          ></input>
          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            name="uname"
            onChange={handlePassword}
            required
          ></input>
          <label>
            <input type="checkbox" name="remember"></input>Remember Me
          </label>
          <span>Forgot password?</span>
          <button className="login-button" onClick={onSubmit}>
            Log In
          </button>
          <p>or, if you don't have an account</p>
          <button className="create-button">Create New Account</button>
        </div>
      </div>
    </div>
  );
}
