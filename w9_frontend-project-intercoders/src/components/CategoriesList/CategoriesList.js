import React from "react";
import "./CategoriesList.css";
import TopicCard from "../TopicCard/TopicCard";

//Rendering the container for the topic cards
function CategoriesList({ setkeycourses }) {
  return (
    <div className="CategoriesList--container">
      <TopicCard setkeycourses={setkeycourses} />
    </div>
  );
}

export default CategoriesList;
