import React from 'react';
import RecipeHead from './recipe-head.js';
import RecipeBody from './recipe-body.js';

const Recipe = props => {
  return (
    <div className='card' key={props.recipeIndex}>
      <RecipeHead
        recipeName={props.recipe.name}
        recipeIndex={props.recipeIndex}
      />
      <RecipeBody
        recipe={props.recipe}
        recipeIndex={props.recipeIndex}
        deleteRecipe={props.deleteRecipe}
      />
    </div>
  );
}

export default Recipe;
