import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';

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
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button
        btnType="Danger"
        clicked={props.purchaseCanceled}
      >Cancel</Button>
      <Button
        btnType="Success"
        clicked={props.purchaseContinue}
      >Continue</Button>
    </Auxiliary>
  );
};

export default orderSummary;