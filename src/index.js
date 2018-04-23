import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css'//'./styles/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddEditModal from './components/add-edit-modal';

class App extends Component {

  constructor(props){
    super(props)
    this.state =
    //localStorage.recipes ||
    {
      recipes: [
        {
          name: 'pasta',
          ingredients: ['noodles', 'tomato sauce', 'meatballs'],
          editing: false
        },
        {
          name: 'special sauce',
          ingredients: ['rice', 'sausages', 'special sauce'],
          editing: false
        },
        {
          name: 'curry',
          ingredients: ['rice', 'chicken', 'curry sauce'],
          editing: false
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
        <AddEditModal/>
        <button type="button" className="btn" data-toggle="modal" data-target="#addEditModal">
          Add Recipe
        </button>
      </div>
    );
  }

  deleteRecipe(recipeIndex){
    let tempState = this.state;
    tempState.recipes.splice(recipeIndex, 1);
    this.setState(tempState);

  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
