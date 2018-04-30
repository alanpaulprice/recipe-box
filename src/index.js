import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal';

class App extends Component{

  constructor(props){
    super(props)
    this.state =
    //localStorage.recipes ||
    {
      editingIndex: null,
      recipes: [
        {
          name: 'pasta',
          ingredients: ['noodles', 'tomato sauce', 'meatballs']
        },
        {
          name: 'special sauce',
          ingredients: ['rice', 'sausages', 'special sauce']
        },
        {
          name: 'curry',
          ingredients: ['rice', 'chicken', 'curry sauce']
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
                deleteRecipe={this.deleteRecipe.bind(this)}
              />
            );
          })}
        </div>
        <AddRecipeModal
          editing={this.state.editing}
          adding={this.state.adding}
        />
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target="#addEditModal"
          onClick={this.beginAddingRecipe.bind(this)}
          >
          Add Recipe
        </button>
      </div>
    );
  }

  beginAddingRecipe(){
    let tempState = this.state;
    tempState.adding = true;
    this.setState(tempState);
  }

  beginEditingRecipe(recipeIndex){
    let tempState = this.state;
    tempState.editingIndex = recipeIndex;
  }

  deleteRecipe(recipeIndex){
    let tempState = this.state;
    tempState.recipes.splice(recipeIndex, 1);
    this.setState(tempState);
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
