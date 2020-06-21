import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  orderHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
          <input className={classes.Input} type='email' name='email' placeholder='Your Mail' />
          <input className={classes.Input} type='text' name='street' placeholder='Street' />
          <input className={classes.Input} type='text' name='postal' placeholder='Your postal code' />
          <Button btnType='Success'
            clicked={this.orderHandler}
          >ORDER NOW</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
