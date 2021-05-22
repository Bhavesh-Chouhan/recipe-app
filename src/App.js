import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  // const APP_ID = "6f6eba67";
  // const API_KEY = "e4f33a14630aaf805c6344eb4583a2fd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  console.log(process.env);

  useEffect(() => {
    getResponse();
  }, [query]);

  const getResponse = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_ID}`
    );
    const data = await response.json();

    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <div className="form">
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            placeholder="Find your favorite recipes."
            value={search}
            onChange={updateSearch}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
