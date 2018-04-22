import React from 'react';

const RecipeBody = props => {

  return (
    <div
      id={'collapse' + props.recipeIndex}
      className='collapse hide'
      aria-labelledby={'heading' + props.recipeIndex}
      data-parent='#accordion'
      >
      <div className='card-body'>
        <ul>
          {
            props.recipe.ingredients.map(
              (item, ind) => {
                return <li key={ind + item}>{item}</li>
              }
            )}
        </ul>
        <button type='button' className='btn btn-secondary'>Edit</button>
        <button type='button' className='btn btn-danger' onClick={() => props.deleteRecipe(props.recipeIndex)}>Delete</button>
      </div>
    </div>
    );
  }

  export default RecipeBody;
