import React, {Component} from 'react';

class AddRecipeModal extends Component{

  constructor(props){
    super(props)
    this.state = {
      recipeName: '12',
      ingredients: '22, 13'
    };
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
                  <input
                    type='text'
                    className='form-control'
                    value={this.state.recipeName}
                    onChange={this.onRecipeNameChange.bind(this)}
                  />
                </div>
                <div className='form-group'>
                  <label>Ingedients</label>
                  <textarea
                    type='text'
                    className='form-control'
                    value={this.state.ingredients}
                    onChange={this.onIngredientsChange.bind(this)}
                  />
                  <small className="form-text text-muted">Seperate each ingedient with a comma.</small>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={this.props.addRecipe()}
                >
                  Add Recipe
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onRecipeNameChange(event){
    this.setState(Object.assign(this.state, {recipeName: event.target.value}))
  }

  onIngredientsChange(event){
    this.setState(Object.assign(this.state, {ingredients: event.target.value}))
    console.log(this.state.ingredients);
  }

};

export default AddRecipeModal;
