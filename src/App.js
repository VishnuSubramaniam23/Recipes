import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';
import login from './login';


const App = () => {
const APP_ID = "3ec31a61";
const APP_KEY = "c5dc60e15d3a2d0e0ea62b6a9902392d";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [initialitem, setInitialitem] = useState("chicken");
useEffect(() => {
	getRecipes();
}, [initialitem])
const getRecipes = async () => {
	const response = await fetch(`https://api.edamam.com/search?q=${initialitem}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	console.log(response);
	const data = await response.json();
	setRecipes(data.hits);
	console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setInitialitem(search);
	setSearch("");
}

return (
	<div className="App">
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	<div className="recipes">
		{recipes.map(recipe => (
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
}

export default App;
