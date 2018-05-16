import React from 'react';

const DeleteRecipeModal = props => {
  return (
    <div className='modal fade' id='deleteModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Recipe</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            Are you sure?
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
            <button
              type='button'
              className='btn btn-danger'
              data-dismiss='modal'
              onClick={() => props.deleteRecipe()}
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeleteRecipeModal;
