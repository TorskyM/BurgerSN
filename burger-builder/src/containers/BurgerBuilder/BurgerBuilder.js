import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 2,
			meat: 2
		},
		totalPrice: 4
	}

	addIngredietHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedingredients = {
			...this.state.ingredients
		};
		updatedingredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedingredients});

	};

	removeIngredietHandler = type => {};

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
					ingredientAdded={this.addIngredietHandler}
				/>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
