import React from "react";
import { useState } from "react";
import Axios from "axios";

function Volunteer(props,{setkeycourses}) {
  
  const [nameVolunteer, setNameVolunteer] = useState("");
  const [date1, setDate] = useState("");
  const [volunteer, setVolunteer] = useState([]);

  function handleName(e) {
    setNameVolunteer(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }

// function volunteerData(){
//     return volunteer;
// }

  async function handleClick(e) {
    alert("Form sent, Thanks for your help");
    //setVolunteer([...volunteer,{volunteername:nameVolunteer.toLowerCase(), id:volunteer.length+1,date:date1,keyCourse:props.value}])}
    // console.log(volunteer)
    e.preventDefault();
    setVolunteer([
      ...volunteer,
      {
        volunteername: nameVolunteer.toLowerCase(),
        id: volunteer.length + 1,
        date: date1,
        keyCourse: props.value,
      },
    ]);
    // setkeycourses(volunteer);
    Axios.post("https://intercoders.herokuapp.com/announcement", {
      id: volunteer.length + 1,
      keycourse: props.value,
      volunteername: nameVolunteer.toLowerCase(),
      date: date1,
      time: "17:30",
    }).then((response) => {
      console.log(response);
    });
  }
  console.log(volunteer);

  return (
    <div className="volunteer">
      <h4>Volunteers to Help</h4>
      <input
        type="text"
        onChange={handleName}
        placeholder="Volunteer's name"
      ></input>
      <select id="day" onChange={handleDate}>
        <option value="available">Available Date: </option>
        <option value="monday"> Monday </option>
        <option value="tuesday"> Tuesday </option>
        <option value="thursday"> Thursday </option>
        <option value="friday"> Friday </option>
      </select>
      <button className="addvolunteer" type="click" value={volunteer} onClick={(e)=>{handleClick(e)}}>
        Submit
      </button>
    </div>
  );
}

export default Volunteer;

//export {volunteerData}
