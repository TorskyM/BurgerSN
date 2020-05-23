import React, { Component } from 'react';

import classes from './Modal.module.scss';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState ) {
    return nextProps.showModal !== this.props.showModal
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop
          showModal={this.props.showModal}
          clicked={this.props.modalClosed}
        />
        <div
          style={{
            transform: this.props.showModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.showModal ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
