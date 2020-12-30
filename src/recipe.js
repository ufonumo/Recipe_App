import React from "react";

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
       
        <div className="recipe_item">
            <h1>{title}</h1>
            <p className="calories">{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li><p className='recipe_list'>{ingredient.text}</p></li>

                ))}
            </ol>
            <img src={image} alt='images'/>
        </div>
            
    )
};

export default Recipe;