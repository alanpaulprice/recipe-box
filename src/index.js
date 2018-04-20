import './styles/style.less';
import './styles/bootstrap.min.css';
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
