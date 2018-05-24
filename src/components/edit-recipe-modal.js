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
            body
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
