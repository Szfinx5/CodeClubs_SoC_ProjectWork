import React from "react";
import "./Categories.css";
import CategoriesList from "../CategoriesList/CategoriesList";

//Rendering the main container for the announcements
function Categories() {
  return (
    <div className="Categories--container">
      <h2>CATEGORIES</h2>
      <CategoriesList />
    </div>
  );
}

export default Categories;
