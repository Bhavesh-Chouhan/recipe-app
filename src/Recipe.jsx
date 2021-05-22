import React from "react";

import "./Recipe.css";
function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src={image} alt="" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <span>Calories-{Math.floor(calories)}</span>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;
