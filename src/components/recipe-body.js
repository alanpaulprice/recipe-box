import React from 'react';

const RecipeBody = props => {
  return (
    <div className='recipe-body collapse' id={props.recipeIndex}>
      {props.recipe.ingredients.map(
        (ingred, ingredIndex) =>
        <div key={ingredIndex}>{ingred}</div>)}
        <button className='btn'>Edit</button>
        <button
          className='btn'
          onClick={() => props.deleteRecipe(props.recipeIndex)}
          >
          Delete
        </button>
      </div>
    );
  }

  export default RecipeBody;
