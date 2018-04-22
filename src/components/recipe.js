import React from 'react';
import RecipeHead from './recipe-head.js';
import RecipeBody from './recipe-body.js';

const Recipe = props => {

  return props.data.recipes.map((recipe, recipeIndex) => {
    return (
      <div className='recipe-container text-center' key={recipeIndex}>

        <RecipeHead
          recipe={recipe}
          recipeIndex={recipeIndex}
        />

        <RecipeBody
          recipe={recipe}
          recipeIndex={recipeIndex}
          deleteRecipe={props.deleteRecipe}
        />
      </div>
    );
  });
}

export default Recipe;

/*
type='button' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'
*/
