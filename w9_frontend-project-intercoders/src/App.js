import "./App.css";
import React, { useState } from "react";
//import Axios from "axios";
import Header from "./components/Header/Header";
import Announcement from "./components/Announcement/Announcement";
import Categories from "./components/Categories/Categories";
import puzzle from "./img/puzzle.png";

function App() {
  const [keycourses, setkeycourses] = useState([])

  return (
    <div className="App">
      <Header className="header"/>
      <img className="puzzle" src={puzzle} alt="puzzle" ></img>
      <Announcement/>
      <Categories setkeycourses={setkeycourses}/>
    </div>
  );
}

export default App;

// const [loginStatus, setLoginStatus] = useState("");
// console.log("Inside Axios");
// Axios.post("http://localhost:3001/users/login", {
//   username: username,
//   password: password,
// }).then((response) => {
//   console.log(response.data.payload);
//   if (response.data.payload.length > 0) {
//     console.log("Hello, " + response.data.payload[0].username);
//     setLoginStatus("Hello, " + response.data.payload[0].username);
//   } else {
//     console.log("User is not found");
//     setLoginStatus("User is not found");
//   }

// return(<Register />
// <Login onSubmit={login} />
// <br></br>
// <h1>{loginStatus}</h1>)