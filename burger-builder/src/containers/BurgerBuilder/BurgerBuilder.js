import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
		totalPrice: 4,
		purchaseable: false,
		purchasing: false
  };

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(ingKey => ingredients[ingKey])
			.reduce((sum, el) => sum + el, 0);

			this.setState({purchaseable: sum > 0});
	}

  addIngredietHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedingredients = {
      ...this.state.ingredients,
    };
    updatedingredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedingredients
		});

		this.updatePurchaseState(updatedingredients);
  };

  removeIngredietHandler = type => {
		const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
		};

    const updatedCount = oldCount - 1;
    const updatedingredients = {
      ...this.state.ingredients,
    };
    updatedingredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

		this.setState({ totalPrice: newPrice, ingredients: updatedingredients });

		this.updatePurchaseState(updatedingredients);
	};

	purchaseHandler = _ => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = _ => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = _ => {
		// console.log('TODO: Continue Handler');
		const queryParams = [];
		let queryString = '';

		for (let i in this.state.ingredients) {
			queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
		};

		queryString = queryParams.join('&');
		this.props.history.push({ pathname: '/checkout', search: `?${queryString}`});
	}

  render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}

    return (
      <Auxiliary>
			<Modal
				showModal={this.state.purchasing}
				modalClosed={this.purchaseCancelHandler}
			>
				<OrderSummary
					ingredients={this.state.ingredients}
					purchaseContinue={this.purchaseContinueHandler}
					purchaseCanceled={this.purchaseCancelHandler}
					price={this.state.totalPrice.toFixed(2)}
				/>
			</Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredietHandler}
          ingredientRemoved={this.removeIngredietHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					ordered={this.purchaseHandler}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
