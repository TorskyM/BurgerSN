import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'UserName',
        address: {
          street: 'UserStreet',
          zipCode: '468494',
        },
        email: 'test@test.com',
        deliveryMethod: 'fastest',
      },
      loading: false
    };

    this.setState({ loading: true });

    axios
      .post('/orders.json', order)
      .then((_) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((_) => this.setState({ loading: false }));
  };


  render() {
    let form = (
      <form>
        <Input inputtype="input" type='text' name='name' placeholder='Your Name' />
        <Input inputtype="input" type='email' name='email' placeholder='Your Mail' />
        <Input inputtype="input" type='text' name='street' placeholder='Street' />
        <Input inputtype="input" type='text' name='postal' placeholder='Your postal code' />
        <Button
          btnType='Success'
          clicked={this.orderHandler}
        >ORDER NOW</Button>
      </form>
    );

    if(this.state.loading) {
      form = <Spinner />;
    };

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
