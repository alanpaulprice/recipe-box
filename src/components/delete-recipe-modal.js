import React from 'react';

const DeleteRecipeModal = props => {
  return (
    <div className='modal fade' id='deleteModal' tabIndex='-1' role='dialog' aria-labelledby='deleteModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Recipe</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='delete-modal-body-text'>
              Are you sure you want to delete the recipe '
              {props.nameOfRecipeToBeDeleted ? props.nameOfRecipeToBeDeleted : 'Untitled'}
              '?
          </div>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
            <a
              data-toggle='collapse'
              data-target={'#collapse' + props.deleteTargetIndex}
              >
                <button
                  type='button'
                  className='btn btn-danger'
                  data-dismiss='modal'
                  onClick={() => props.deleteRecipe()}
                  >
                    Delete Recipe
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default DeleteRecipeModal;
