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
              props.recipe.ingredients.split(',').map(
                (item, ind) => {
                  return <li key={ind + item}>{item}</li>
                }
              )
            }
          </ul>
          <button type='button' className='btn btn-secondary'>
            Edit
          </button>
          <a
            data-toggle='collapse'
            data-target={'#collapse' + props.recipeIndex}
            >
              <button
                type='button'
                className='btn btn-danger'
                data-toggle="modal"
                data-target="#deleteModal"
                onClick={() => props.beginDeletingRecipe(props.recipeIndex)}>
                Delete
              </button>
            </a>
          </div>
        </div>
      );
    }

    export default RecipeBody;
