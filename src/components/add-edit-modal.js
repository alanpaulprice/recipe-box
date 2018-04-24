import React from 'react';

const AddEditModal = props => {

  const modalTitle = () => {
    if (props.adding) { return 'Add Recipe' }
    if (props.editing) { return 'Edit Recipe' }
  }

  const modalBody = () => {
    if (props.adding) {
      return (
        <label>Recipe Name<input/></label>
      );
    }
    if (props.editing) {
      return (
        'Edit Recipe Body'
      );
    }
  }

  const modalSumbitBtn = () => {
    if (props.adding) {
      return (
        <button type='button' className='btn btn-primary'>Add Recipe</button>
      );
    }
    if (props.editing) {
      return (
        <button type='button' className='btn btn-primary'>Edit Recipe</button>
      );
    }
  }

  return (
    <div className='modal fade' id='addEditModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>{modalTitle()}</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {modalBody()}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
            {modalSumbitBtn()}
          </div>
        </div>
      </div>
    </div>
  );

};

export default AddEditModal;
