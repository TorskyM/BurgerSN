import React from 'react';

import classes from './Modal.module.scss'

const modal = props => (
  <div
    style={{
      transform: props.showModal ?
      'translateY(0)' :
      'translateY(-100vh)',
      opacity: props.showModal ? '1' : '0'
    }}
    className={classes.Modal}>
    {props.children}
  </div>
);

export default modal;