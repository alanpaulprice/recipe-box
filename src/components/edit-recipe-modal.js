import React from 'react';

const EditRecipeModal = props => {
  return (
    <div className='modal fade' id='editModal' tabIndex='-1' role='dialog' aria-labelledby='editModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Edit Recipe</h5>
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
                  onChange={(event) => props.onEditRecipeNameChange(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Ingedients</label>
                <textarea
                  type='text'
                  className='form-control'
                  value={props.ingredients}
                  onChange={(event) => props.onEditRecipeIngredientsChange(event.target.value)}
                />
                <small className="form-text text-muted">Seperate each ingedient with a comma.</small>
              </div>
            </form>

          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-dismiss='modal'
                  onClick={() => props.editRecipe()}
                  >
                    Edit Recipe
                  </button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default EditRecipeModal
