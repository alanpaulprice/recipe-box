import './styles/style.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Recipe from './components/recipe.js';
import AddRecipeModal from './components/add-recipe-modal.js';
import DeleteRecipeModal from './components/delete-recipe-modal.js';
import EditRecipeModal from './components/edit-recipe-modal.js';

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
          recipes: [
            {
              name: 'Pizza',
              ingredients: `300g strong bread flour,
              1 tsp instant yeast (from a sachet or a tub),
              1 tsp salt,
              1 tbsp olive oil (plus extra for drizzling),
              100ml passata,
              handful fresh basil or 1 tsp dried,
              1 garlic clove, crushed,
              125g ball mozzarella, sliced,
              handful grated or shaved parmesan (or vegetarian alternative),
              handful cherry tomatoes, halved,
              handful basil leaves (optional)`
            },
            {
              name: 'Chicken Tikka Masala',
              ingredients: `4 tbsp vegetable oil,
              25g butter,
              4 onions (roughly chopped),
              6 tbsp chicken tikka masala paste,
              2 red peppers, deseeded and cut into chunks,
              8 boneless, skinless chicken breasts, cut into 2½ cm cubes,
              2 x 400g cans chopped tomatoes,
              4 tbsp tomato purée,
              2-3 tbsp mango chutney,
              150ml double cream,
              150ml natural yogurt,
              chopped coriander leaves, to serve`
            },
            {
              name: 'Chocolate Brownies',
              ingredients: `185g unsalted butter,
              185g best dark chocolate,
              85g plain flour,
              40g cocoa powder,
              50g white chocolate,
              50g milk chocolate,
              3 large eggs,
              275g golden caster sugar`
            }
          ]
        }
      ))
    }
    this.state = JSON.parse(localStorage.getItem('appData'));
  }

  render() {
    return (<div>
      <h1 className='header text-center'>Recipe Box</h1>
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
        ingredients: this.cleanUpIngredsStr(this.state.addModal.ingredients)
      })
      this.setState(tempState);
      localStorage.setItem('appData', JSON.stringify(this.state));
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
      tempState.recipes[this.state.editTargetIndex] = Object.assign(
        this.state.editModal,
        {ingredients: this.cleanUpIngredsStr(this.state.editModal.ingredients)}
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

    cleanUpIngredsStr(str) {
      return (str.replace(/\s{2,}/g, ' ')
                 .replace(/,\s,/g, ',')
                 .replace(/,{1,}$/g, '')
                 .replace(/^,{1,}/g, '')
                 .replace(/,(?=[^\s])/g, ', ')
                 .trim());
    }
  }

  ReactDOM.render(<App/>, document.getElementById('container'));
