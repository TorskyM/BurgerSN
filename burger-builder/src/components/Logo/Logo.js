import React from 'react';

import burgerLogo from '../../assets/images/burger-builder-logo.png';

import classes from './Logo.module.scss'

const logo = props => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="Bulger logo"/>
  </div>
);

export default logo;
