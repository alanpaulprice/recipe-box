import React from 'react';

const RecipeHead = props => {
  return (
    <button
      className='recipe-name btn btn-block'
      type='button'
      data-toggle='collapse'
      data-target={'#' + props.recipeIndex}
      aria-expanded='false'
      aria-controls='collapseExample'
      >
      {props.recipe.name}
    </button>
  );
}

export default RecipeHead;
