import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal.js';
import DeleteRecipeModal from './components/delete-recipe-modal.js';

class App extends Component{

  constructor(props){
    super(props)
    this.state =
    //localStorage.recipes ||
    {
      editTargetIndex: null,
      deleteTargetIndex: null,
      recipes: [
        {
          name: 'pasta',
          ingredients: 'noodles, tomato sauce, meatballs'
        },
        {
          name: 'special sauce',
          ingredients: 'rice, sausages, special sauce'
        },
        {
          name: 'curry',
          ingredients: 'rice, chicken, curry sauce'
        }
      ]
    };
  }

  render(){
    return (
      <div>
        <h1 className='header text-center'>Recipe Box</h1>
        <div id='accordion'>
          {this.state.recipes.map((recipe, recipeIndex) => {
            return (
              <Recipe
                key={recipeIndex + recipe}
                recipe={recipe}
                recipeIndex={recipeIndex}
                beginDeletingRecipe={this.beginDeletingRecipe.bind(this)}
              />
            );
          })}
        </div>
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target="#addModal"
          onClick={this.beginAddingRecipe.bind(this)}
          >
          Add Recipe
        </button>

        <DeleteRecipeModal
          deleteRecipe={this.deleteRecipe.bind(this)}
        />
        <AddRecipeModal
          addRecipe={this.addRecipe.bind(this)}
        />
      </div>
    );
  }

  beginAddingRecipe(){
    // clear add modal fields when clicked
  }

  beginDeletingRecipe(recipeIndex){
    let tempState = this.state;
    tempState.deleteTargetIndex = recipeIndex;
    this.setState(tempState);
  }

  addRecipe(name, ingredients){
    let tempState = this.state;
    tempState.recipes.push({
      name: this.removeUnwantedSpaces(name),
      ingredients: this.removeUnwantedSpaces(ingredients)
    })
    this.setState(tempState);
  }

  beginEditingRecipe(recipeIndex){
    let tempState = this.state;
    tempState.editingIndex = recipeIndex;
  }

  deleteRecipe(){
    let tempState = this.state;
    tempState.recipes.splice(this.state.deleteTargetIndex, 1);
    this.setState(tempState);
  }

  removeUnwantedSpaces(str){
    return str.replace(/\s{2,}/g, ' ').trim();
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
