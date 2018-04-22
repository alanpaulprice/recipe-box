import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css'//'./styles/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';

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
        <button className='btn btn-block'>Add Recipe</button>
        <Recipe
          data={this.state}
          deleteRecipe={this.deleteRecipe.bind(this)}
        />
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
