import React, {Component} from 'react';

class AddRecipeModal extends Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return (
      <div className='modal fade' id='addEditModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>Add Recipe</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label>Recipe Name</label>
                  <input type='text' className='form-control'></input>
                </div>
                <div className='form-group'>
                  <label>Ingedients</label>
                  <textarea type='text' className='form-control'></textarea>
                  <small className="form-text text-muted">Seperate each ingedient with a comma.</small>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Add Recipe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default AddRecipeModal;
