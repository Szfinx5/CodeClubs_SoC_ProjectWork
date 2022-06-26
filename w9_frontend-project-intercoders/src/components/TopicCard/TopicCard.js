import React from "react";
import javascript from "../../img/javascript-logo.png";
import reactlogo from "../../img/react-logo.png";
import sql from "../../img/postgresql-logo.png";
import node from "../../img/node.png";
import Volunteer from "../Volunteer/Volunter";
import StudentInput from "../StudentInput/StudentInput";
import css from "../../img/css.png";
import jest from "../../img/jest.png";
import "./TopicCard.css";

function TopicCard({setkeycourses}) {
  const topicCard = [
    { topicName: "JavaScript", src: javascript },
    { topicName: "React", src: reactlogo },
    { topicName: "SQL", src: sql },
    { topicName: "Node.JS", src: node },
    { topicName: "CSS", src: css },
    { topicName: "Jest", src: jest },
  ];
//CSS AND JEST
  return (
    <div className="card--organizer">
      {topicCard.map(function (item, index) {
        return (
          
            <div className="topic--categories">
            <div className="image-course">
              <img className="img" src={item.src} alt={item.topicName} />
              <h3>{item.topicName}</h3>
              </div>
              {/* <p className="roomnumber">Room {index+1}</p> */}
              <div className="inputs">
                <StudentInput value={item.topicName.toLowerCase()} />
                <Volunteer setkeycourses={setkeycourses} value={item.topicName.toLowerCase()} />
              </div>
            </div>
          
        );
      })}
    </div>
  );
}

export default TopicCard;
