
import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './recipe'


const App = () => {

  const APP_ID = 'cfa3ed63';
  const API_KEY = '04f04d3e7fa6f483c12f0bbad6e69ef6	'; 

  // gets recipe data and displays it
  let [recipes, setRecipes] = useState([]);
  //state for search
  const [search, setSearch] = useState("");
  // state for query when a user searches for a recipe
  const [query, setQuery] = useState('goat')
  //const [counter, setCounter] = useState(0);

  useEffect(()=>{
    getRecipes()
  }, [query]);

  const getRecipes = async ()=>{
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    let data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1>RECIPE APP</h1>
      <form onSubmit={getSearch} className='search_form'>
        <input className='search_bar' value={search} onChange={updateSearch} type='text'/>
        <button  className='btn' type="submit" >Search</button>
      </form>

      <div className="recipe">
        {recipes.map(recipe =>(
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      {/* <h1 onClick={()=> setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
