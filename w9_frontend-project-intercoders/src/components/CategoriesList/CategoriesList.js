import React from 'react';
import "./CategoriesList.css";
import TopicCard from '../TopicCard/TopicCard';

function CategoriesList ({setkeycourses}) {
    return (
    <div className = "CategoriesList--container">
    <TopicCard setkeycourses={setkeycourses}/>
    </div>
    )
}

export default CategoriesList;