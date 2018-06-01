import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal.js';
import DeleteRecipeModal from './components/delete-recipe-modal.js';
import EditRecipeModal from './components/edit-recipe-modal.js';
localStorage.clear()
class App extends Component {

  constructor(props) {
    super(props)
    if (!localStorage.getItem('appData')) {
      localStorage.setItem('appData', JSON.stringify(
        {
          editTargetIndex: null,
          deleteTargetIndex: null,
          addModal: {
            name: '',
            ingredients: ''
          },
          editModal: {
            name: '',
            ingredients: ''
          },
          recipes: []
        }
      ))
    }
    this.state = JSON.parse(localStorage.getItem('appData'));
  }

  render() {
    return (<div>
      <h1 className='header text-center'>Recipe Box</h1>
      <div id='accordion'>
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
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#addModal"
        onClick={this.beginAddingRecipe.bind(this)}>
        Add Recipe
      </button>

      <DeleteRecipeModal
        deleteRecipe={this.deleteRecipe.bind(this)}
        nameOfRecipeToBeDeleted={(this.state.deleteTargetIndex !== null) ? this.state.recipes[this.state.deleteTargetIndex].name: ''}
        deleteTargetIndex={this.state.deleteTargetIndex}/>
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
      </div>);
    }
    // ===== ADD RECIPE =====
    beginAddingRecipe() {
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
      let tempState = this.state;
      tempState.recipes.push({
        name: this.state.addModal.name,
        ingredients: this.state.addModal.ingredients
      })
      this.setState(tempState);
      //localStorage.setItem('appData', this.state);
    }

    // ===== EDIT RECIPE =====

    beginEditingRecipe(recipeIndex) {
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
      tempState.recipes[this.state.editTargetIndex] = this.state.editModal;
      this.setState(tempState);
      //localStorage.setItem('appData', this.state);
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
      //localStorage.setItem('appData', this.state);
    }

    // ===== =====

    removeUnwantedSpaces(str) {
      return str.replace(/\s{2,}/g, ' ').trim();
    }
  }

  ReactDOM.render(<App/>, document.getElementById('container'));

  /*
  {
  editTargetIndex: null,
  deleteTargetIndex: null,
  addModal: {
  name: '',
  ingredients: ''
},
editModal: {
name: '',
ingredients: ''
},
recipes: []
}


{
name: 'pasta',
ingredients: 'noodles, tomato sauce, meatballs'
}, {
name: 'special sauce',
ingredients: 'rice, sausages, special sauce'
}, {
name: 'curry',
ingredients: 'rice, chicken, curry sauce'
}
*/
