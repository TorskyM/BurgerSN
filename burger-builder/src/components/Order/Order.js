import React from 'react';
import classes from './Order.module.scss';

const order = props => {
  const ingredients = [];
  let ingrediantsOutput;

  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName],
      }
    );
  };

  ingrediantsOutput = ingredients.map(el =>
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
      key={el.name}
    > {el.name}({el.amount})</span>);

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingrediantsOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
