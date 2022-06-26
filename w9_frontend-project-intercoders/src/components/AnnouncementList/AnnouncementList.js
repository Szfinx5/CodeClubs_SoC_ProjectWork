import React, { useEffect } from "react";
import "./AnnouncementList.css"
import Axios from "axios";
import { useState } from "react";
//import {volunteerData} from "../Volunteer/Volunter"

function AnnouncementList() {
const [keycourses, setkeycourses] = useState([])
async function getVolunteers() {
  let response = await fetch ("https://intercoders.herokuapp.com/announcement");
  let data = await response.json();
  console.log("receving data from volunteers", data.payload);
  setkeycourses(data.payload);
}
useEffect(()=> {
  getVolunteers();
},[])

/*function handleCross(){
function deleteCourse(deletedId){
  console.log("delete course function running")
    let newArrayCourses = students.filter(function(thisStudent){
      console.log(thisStudent.id)
      console.log(deletedId)
      if(thisStudent.id !== deletedId){
        return thisStudent;
      }
    });

    let deletedStudent = students.filter(function(delStudent){
      console.log(delStudent.id)
      console.log(deletedId)
      if(delStudent.id === deletedId){
        return delStudent;
      }
    })
    console.log("this is the deleted student", deletedStudent[0].name)
    //console.log(newArrayCourses); 
    setStudent(newArrayCourses);
    //console.log(students.name)
    let authorizationToken = "5255e995-a4de-4c4f-b063-c40a351f1f25";
    console.log(props.value)
    console.log("passing here")
    Axios.delete("https://intercoders.herokuapp.com/announcement", { 
      headers: {
      Authorization: authorizationToken
    }
    ,data :{
      keycourse: keycourses.keycourse,
      volunteername: deletedStudent[0].studentname,
      date: keycourses.date
    }
    }).then((response) => {
      console.log("response from delete request", response);
    });
  }}


*/





// let keycourses = [{
// id:"1",
// keycourses:"JavaScript",
// volunteerName:"Bryce",
// date:"22/06/2022",
// time:"17:30"
// },
// {
// id:"2",
// keycourses:"SQL",
// volunteerName:"Andy",
// date:"27/06/2022",
// time:"17:30"}]


// function getVolunteer() {
//   console.log("Inside Axios");
//   Axios.get("http://localhost:3001/announcement").then((response) => {
//     setkeycoursess(response.data.payload);
//   });
// }
//console.log("this is the props", volunteerData)
//<button className="cross-button" onClick={handleCross(item.index)}>Cancel Class</button>;


return(
            <div className="Container-card">
            { keycourses.map(function (item){
             return(
             <div key={item.index} className="Announcement-card">
               <h3>{item.keycourse}</h3>
                <p>Room: {item.index}</p>
                <h3>{item.volunteername}</h3>
                <p>{`${item.date} ${item.time}`}</p>
                
                </div>)})}   
             </div>
);
    
}

export default AnnouncementList