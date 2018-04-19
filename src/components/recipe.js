import React from 'react';

const Recipe = props => {

  return props.data.recipes.map((recipe, recipesIndex) => {
    return (
      <div key={recipesIndex}>
        <button onClick={() => props.recipeButtonClicked(recipesIndex)} className='recipe-name btn btn-block'>{recipe.name}</button>

        <div className='ingredients'>
          {recipe.ingredients.map(
            (ingred, ingredIndex) =>
            <div key={ingredIndex}>{ingred}</div>)}
          </div>
        </div>
      );
    });
  }

  export default Recipe;
