import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal.js';
import DeleteRecipeModal from './components/delete-recipe-modal.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state =
    //localStorage.recipes ||
    {
      editTargetIndex: null,
      deleteTargetIndex: null,
      newRecipe: {
        name: 'hat',
        ingredients: 'cat'
      },
      recipes: [
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
      ]
    };
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
          name={this.state.newRecipe.name}
          ingredients={this.state.newRecipe.ingredients}
          addRecipe={this.addRecipe.bind(this)}
          onNewRecipeNameChange={this.onNewRecipeNameChange.bind(this)}
          onNewRecipeIngredientsChange={this.onNewRecipeIngredientsChange.bind(this)}
        />
      </div>);
    }

    beginAddingRecipe() {
      // clear add modal fields when clicked
    }

    beginDeletingRecipe(recipeIndex) {
      let tempState = this.state;
      tempState.deleteTargetIndex = recipeIndex;
      this.setState(tempState);
    }

    beginEditingRecipe(recipeIndex) {
      let tempState = this.state;
      tempState.editingIndex = recipeIndex;
    }

    addRecipe(name, ingredients) {
      let tempState = this.state;
      tempState.recipes.push({
        name: this.removeUnwantedSpaces(name),
        ingredients: this.removeUnwantedSpaces(ingredients)
      })
      this.setState(tempState);
    }

    deleteRecipe() {
      let tempState = this.state;
      tempState.recipes.splice(this.state.deleteTargetIndex, 1);
      tempState.deleteTargetIndex = null;
      this.setState(tempState);
    }

    removeUnwantedSpaces(str) {
      return str.replace(/\s{2,}/g, ' ').trim();
    }

    onNewRecipeNameChange(newValue){
      let tempState = this.state;
      tempState.newRecipe.name = newValue;
      this.setState(tempState);
    }

    onNewRecipeIngredientsChange(newValue){
      let tempState = this.state;
      tempState.newRecipe.ingredients = newValue;
      this.setState(tempState);
    }
  }

  ReactDOM.render(<App/>, document.getElementById('container'));
