import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal.js';
import DeleteRecipeModal from './components/delete-recipe-modal.js';
import EditRecipeModal from './components/edit-recipe-modal.js';
import defaultState from './default-state.js';

class App extends Component {

  constructor(props) {
    super(props)
    // if local storage is empty, set it to the default state
    if (!localStorage.getItem('appData')) {
      localStorage.setItem('appData', defaultState());
    }
    // set state to data from local storage
    this.state = JSON.parse(localStorage.getItem('appData'));
  }

  render() {
    return (<div>
      <h1 className='header text-center my-5'>Recipe Box</h1>
      <div className='row justify-content-center'>
      <div id='accordion' className='mt-3 mb-3 col-12 col-sm-12 col-md-10 col-lg-8'>
        {
          this.state.recipes.map((recipe, recipeIndex) => {
            return(
              <Recipe
                key={recipeIndex + recipe}
                recipe={recipe}
                recipeIndex={recipeIndex}
                beginDeletingRecipe={this.beginDeletingRecipe.bind(this)}
                beginEditingRecipe={this.beginEditingRecipe.bind(this)}
              />
            );
          })
        }
      </div>
    </div>
      <div className='text-center'>
        <button
          id='addRecipeBtn'
          type='button'
          className='btn'
          data-toggle='modal'
          data-target='#addModal'
          onClick={this.beginAddingRecipe.bind(this)}>
          Add Recipe
        </button>
      </div>

        <AddRecipeModal
          name={this.state.addModal.name}
          ingredients={this.state.addModal.ingredients}
          addRecipe={this.addRecipe.bind(this)}
          onAddRecipeNameChange={this.onAddRecipeNameChange.bind(this)}
          onAddRecipeIngredientsChange={this.onAddRecipeIngredientsChange.bind(this)}
        />
        <EditRecipeModal
          name={this.state.editModal.name}
          ingredients={this.state.editModal.ingredients}
          onEditRecipeNameChange={this.onEditRecipeNameChange.bind(this)}
          onEditRecipeIngredientsChange={this.onEditRecipeIngredientsChange.bind(this)}
          editRecipe={this.editRecipe.bind(this)}
        />
        <DeleteRecipeModal
          deleteRecipe={this.deleteRecipe.bind(this)}
          nameOfRecipeToBeDeleted={(this.state.deleteTargetIndex !== null) ? this.state.recipes[this.state.deleteTargetIndex].name: ''}
          deleteTargetIndex={this.state.deleteTargetIndex}/>
      </div>);
    }
    // ===== ADD RECIPE =====
    beginAddingRecipe() {
      // empty the add modal fields
      let tempState = this.state;
      tempState.addModal = {
        name: '',
        ingredients: ''
      }
      this.setState(tempState);
    }

    onAddRecipeNameChange(newValue){
      let tempState = this.state;
      tempState.addModal.name = newValue;
      this.setState(tempState);
    }

    onAddRecipeIngredientsChange(newValue){
      let tempState = this.state;
      tempState.addModal.ingredients = newValue;
      this.setState(tempState);
    }

    addRecipe() {
      // add recipe to state, update local storage
      let tempState = this.state;
      tempState.recipes.push({
        name: this.state.addModal.name,
        ingredients: this.formatIngredientsString(this.state.addModal.ingredients)
      })
      this.setState(tempState);
      localStorage.setItem('appData', JSON.stringify(this.state));
    }

    // ===== EDIT RECIPE =====

    beginEditingRecipe(recipeIndex) {
      // update edit modal index
      // populate edit modal with relevant recipe data
      let tempState = this.state;
      tempState.editTargetIndex = recipeIndex;
      tempState.editModal = {
        name: this.state.recipes[recipeIndex].name,
        ingredients: this.state.recipes[recipeIndex].ingredients
      };
      this.setState(tempState);
    }

    onEditRecipeNameChange(newValue){
      let tempState = this.state;
      tempState.editModal.name = newValue;
      this.setState(tempState);
    }

    onEditRecipeIngredientsChange(newValue){
      let tempState = this.state;
      tempState.editModal.ingredients = newValue;
      this.setState(tempState);
    }

    editRecipe(){
      let tempState = this.state;
      tempState.recipes[this.state.editTargetIndex] = Object.assign(
        this.state.editModal,
        {ingredients: this.formatIngredientsString(this.state.editModal.ingredients)}
      );
      tempState.recipes[this.state.editTargetIndex].ingredients
      this.setState(tempState);
      localStorage.setItem('appData', JSON.stringify(this.state));
    }

    // ===== DELETE RECIPE =====

    beginDeletingRecipe(recipeIndex) {
      let tempState = this.state;
      tempState.deleteTargetIndex = recipeIndex;
      this.setState(tempState);
    }

    deleteRecipe() {
      let tempState = this.state;
      tempState.recipes.splice(this.state.deleteTargetIndex, 1);
      tempState.deleteTargetIndex = null;
      this.setState(tempState);
      localStorage.setItem('appData', JSON.stringify(this.state));
    }

    // ===== =====

    formatIngredientsString(str) {
      return (str.replace(/\n|\t|\r/g, '') // remove all tabs and new line chars
                 .replace(/\s{2,}/g, ' ') // replace 2 spaces with one
                 .replace(/,{2,}/g, ',') // replace 2 commas with one
                 .replace(/,\s,/g, ',') // replace ', ,' with a comma
                 .replace(/,{1,}$/g, '') // remove any commas at end of string
                 .replace(/^,{1,}/g, '') // remove any commas at start of string
                 .replace(/,(?=[^\s])/g, ', ') // all commas followed by a space
                 .trim()); // remove white space from start and end
    }
  }

  ReactDOM.render(<App/>, document.body);
