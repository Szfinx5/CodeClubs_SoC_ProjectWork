//Currently the register page is not in use, the fuction will be implemented in the next version

import React, { useState } from "react";
import Axios from "axios";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  function register() {
    console.log("Inside Axios");
    Axios.post("http://localhost:3001/users/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="registration">
      <h1>Registration</h1>
      <label>Username </label>
      <input
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />
      <br></br>
      <label>Password </label>
      <input
        type="text"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />{" "}
      <br></br>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
