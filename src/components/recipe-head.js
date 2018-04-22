import React from 'react';

const RecipeHead = props => {
  return (
    <div className='card-header' id={'heading' + props.recipeIndex}>
      <h5 className='mb-0'>
        <button
          className='btn btn-block'
          data-toggle='collapse'
          data-target={'#collapse' + props.recipeIndex}
          aria-controls={'collapse' + props.recipeIndex}
          >
          {props.recipeName}
        </button>
      </h5>
    </div>
  );
}

export default RecipeHead;
