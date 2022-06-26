import React, { useState } from "react";
import Axios from "axios";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>Login</h1>
      <label>Username </label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br></br>
      <label>Password </label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br></br>
      <button
        onClick={function () {
          onSubmit(username, password);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
