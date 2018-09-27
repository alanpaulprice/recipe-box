import React, {Component} from 'react';

const AddRecipeModal = props => {
  return (
    <div className='modal fade' id='addModal' tabIndex='-1' role='dialog' aria-labelledby='addModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Add Recipe</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label>Recipe Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={props.name}
                  onChange={(event) => props.onAddRecipeNameChange(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Ingredients</label>
                <textarea
                  type='text'
                  className='form-control'
                  value={props.ingredients}
                  onChange={(event) => props.onAddRecipeIngredientsChange(event.target.value)}
                />
                <small className='form-text'>Seperate each ingredient with a comma.</small>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-primary' data-dismiss='modal'>Cancel</button>
            <button
              type='button'
              className='btn btn-primary'
              data-dismiss='modal'
              onClick={() => props.addRecipe()}
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AddRecipeModal;
