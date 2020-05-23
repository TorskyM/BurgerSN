import React from 'react';

import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngridient/BurgerIngridient';

const burger = props => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map(ingKey => [...Array(props.ingredients[ingKey])]
			.map((_, i) =>
			<BurgerIngredient
				key={ingKey + i}
				type={ingKey}
			/>))
		.reduce((arr, el) => arr.concat(el), []);

		if(transformedIngredients.length === 0) {
			transformedIngredients = <p>Please, add ingrediance</p>;
		}

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
			{transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
