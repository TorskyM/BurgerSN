import React from 'react';

import classes from './SideDrawerToggle.module.scss';

const sideDrawerToggle = props => (
  <div className={classes.SideDrawerToggle} onClick={props.open}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default sideDrawerToggle;
