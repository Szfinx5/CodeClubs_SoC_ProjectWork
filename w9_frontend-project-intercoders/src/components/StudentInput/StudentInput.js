import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function StudentInput(props) {
  const [more, setMore] = useState("More");
  const [text, setText] = useState("");
  const [students, setStudent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  console.log("this is the students",students)
  function handleChange(e) {
    setText(e.target.value);
    // console.log(text)
  }

  async function getStudent() {
    console.log("Inside Axios");
    Axios.get("https://intercoders.herokuapp.com/waitinglist").then((response) => {
      console.log(response.data.payload);
      setStudent(response.data.payload);
    });
  }
  useEffect(() => {
    getStudent();
  }, []);
  if (students !== undefined) {
    console.log(students);
  }

  async function handleClick(e) {
    e.preventDefault();
    setStudent((prev) => [
      ...prev,
      {
        studentname: text.toLowerCase(),
        id: prev.length + 1,
        keycourse: props.value,
      },
    ]);
    Axios.post("https://intercoders.herokuapp.com/waitinglist", {
      //studentname: students[students.length - 1].name,
      //keycourse: students[students.length - 1].keyCourse
      keycourse: props.value,
      studentname: text.toLowerCase(),
    }).then((response) => {
      console.log(response);
    });
    
  }

function deleteStudent(deletedId){
  console.log("delete function run")
    let newArrayStudent = students.filter(function(thisStudent){
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
    //console.log(newArrayStudent); 
    setStudent(newArrayStudent);
    //console.log(students.name)
    let authorizationToken = "5255e995-a4de-4c4f-b063-c40a351f1f25";
    console.log(props.value)
    console.log("passing here")
    Axios.delete("https://intercoders.herokuapp.com/waitinglist", { 
      headers: {
      Authorization: authorizationToken
    }
    ,data :{
      //studentname: students[students.length - 1].name,
      studentname: deletedStudent[0].studentname,
      //keycourse: students[students.length - 1].keyCourse
      keycourse: props.value,}
    }).then((response) => {
      console.log("response from delete request", response);
    });
  }
  
  return (
    <div className="input-student">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Student's name"
      ></input>
      <button className="addstudent" type="submit" onClick={handleClick}>
        +
      </button>
      <ul>
        {!seeMore && students
          ? students
              .filter(function(students) {
                //console.log(students.keycourse)};
                if (students.keycourse === props.value) {
                  return students;
                }
              })
              .map(function (students) {
                return (
                  <li key={students.id} id={students.id}>
                    •{students && students.studentname}{" "}
                    <button className="deleteButton" key={students.id} id={students.id} onClick={()=>deleteStudent(students.id)} >
                      {" "}
                      X
                    </button>
                  </li>
                );
              })
              .slice(0, 2)
          : students &&
            students
              .filter(function (students) {
                console.log(students.keycourse);
                if (students.keycourse === props.value) {
                  return students;
                }
              })
              .map(function (students) {
                return (
                  <li key={students.id}>
                    •{students.studentname}{" "}
                    <button key={students.id} className="deleteButton" onClick={()=>deleteStudent(students.id)}>
                      {" "}
                      X
                    </button>
                  </li>
                );
              })}
        {students && students.length > 2 && (
          <button
            className="addvolunteer"
            onClick={() => {
              if (seeMore === true) {
                setSeeMore(false);
                setMore("More");
              } else if (seeMore === false) {
                setSeeMore(true);
                setMore("Less");
              }
            }}
          >
            {" "}
            See {more}
          </button>
        )}
      </ul>
    </div>
  );
}

export default StudentInput;

// To send name of students to the database
//   function postStudent() {
//   console.log("Inside Axios");
//   Axios.post("http://localhost:3001/waitinglist", {
//     studentname: students[students.length - 1].studentName,
//     keycourse: students[students.length - 1].keyCourse
//   })
//     .then((response) => {
//       console.log(response);
//     })
//   console.log(students[students.length - 1].studentName);;
// }
// useEffect(() => {
//   if (students.length !== 0) {
//     postStudent();
//   }
//   console.log(students);
// }, [students])

// {students.filter(students => students.includes(keyCourse)).map(filteredName => (
//   <li>
//     {filteredName}
//   </li>

/*return (
              <li key={students.id}>
               •{students && students.name}{" "}
                <button key={students.id} className="deleteButton">
                  {" "}
                  X
                </button> 
              </li>
            );






            onClick={()=>deleteStudent(students.id)}
            */
