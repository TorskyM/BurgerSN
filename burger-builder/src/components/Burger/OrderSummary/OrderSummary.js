import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary'

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => (
    <li key={ingKey}>
    <span
      style={{textTransform: 'capitalize'}}
    >{ingKey}</span>: {props.ingredients[ingKey]}
    </li>));

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;