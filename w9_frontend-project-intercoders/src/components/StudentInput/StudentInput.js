import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

//Declaring the useStates
function StudentInput(props) {
  const [more, setMore] = useState("More");
  const [text, setText] = useState("");
  const [students, setStudent] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  console.log("this is the students", students);

  //Setting the student's name to the imputted value
  function handleChange(e) {
    setText(e.target.value);
  }
  //Send a GET request for the updated waitinglist
  async function getStudent() {
    console.log("Inside Axios");
    Axios.get("https://intercoders.herokuapp.com/waitinglist").then(
      (response) => {
        console.log(response.data.payload);
        setStudent(response.data.payload);
      }
    );
  }

  //Send a GET request for the waiting list when the page load at the first time
  useEffect(() => {
    getStudent();
  }, []);

  //Set the student's name and send a POST request to the backend to update the waitinglist
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
      keycourse: props.value,
      studentname: text.toLowerCase(),
    }).then((response) => {
      console.log(response);
    });
  }

  //Deleting a student from the waitinglist
  function deleteStudent(deletedId) {
    console.log("delete function is running");
    let newArrayStudent = students.filter(function (thisStudent) {
      console.log(thisStudent.id);
      console.log(deletedId);
      if (thisStudent.id !== deletedId) {
        return thisStudent;
      }
    });

    let deletedStudent = students.filter(function (delStudent) {
      console.log(delStudent.id);
      console.log(deletedId);
      if (delStudent.id === deletedId) {
        return delStudent;
      }
    });
    console.log("this is the deleted student", deletedStudent[0].name);
    setStudent(newArrayStudent);
    console.log(props.value);
    console.log("passing here");
    Axios.delete("https://intercoders.herokuapp.com/waitinglist", {
      data: {
        studentname: deletedStudent[0].studentname,
        keycourse: props.value,
      },
    }).then((response) => {
      console.log("response from delete request", response);
    });
    return;
  }

  //Returning and rendering the waiting list, filtered by topics on the Category container
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
              .filter(function (students) {
                if (students.keycourse === props.value) {
                  return students;
                }
              })
              .map(function (students) {
                return (
                  <li key={students.id} id={students.id}>
                    •{students && students.studentname}{" "}
                    <button
                      className="deleteButton"
                      key={students.id}
                      id={students.id}
                      onClick={() => deleteStudent(students.id)}
                    >
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
                    <button
                      key={students.id}
                      className="deleteButton"
                      onClick={() => deleteStudent(students.id)}
                    >
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
