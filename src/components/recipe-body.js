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
          {props.recipeIngredients.length ? (
            <ul>
              {
                props.recipeIngredients.split(',').map(
                  (item, ind) => {
                    return <li key={ind + item}>{item}</li>
                  }
                )
              }
            </ul>
          ) : (
            <p>This recipe has no ingredients. Click the 'edit' button below to add some.</p>
          )}
          <div className='text-right'>
            <button
              type='button'
              className='btn btn-secondary'
              data-toggle='modal'
              data-target='#editModal'
              onClick={() => props.beginEditingRecipe(props.recipeIndex)}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#deleteModal'
                onClick={() => props.beginDeletingRecipe(props.recipeIndex)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      }

      export default RecipeBody;
