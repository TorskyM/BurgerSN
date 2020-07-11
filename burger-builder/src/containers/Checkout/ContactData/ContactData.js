import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: this.inputConfigHandler('Your Name'),
      street: this.inputConfigHandler('Street'),
      zipCode: this.inputConfigHandler('ZIP Code'),
      country: this.inputConfigHandler('UserCountry'),
      email: this.inputConfigHandler('Your E-Mail', 'email'),
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
        valid: true,
        validation: {}
      },
    },
    isFormValid: false,
    loading: false,
  };

  inputConfigHandler(placeholder, inputType = 'text') {
    return {
      elementType: 'input',
      elementConfig: {
        type: inputType,
        placeholder: placeholder,
      },
      value: '',
      validation: {
        required: true,
        minLength: 4,
        maxLength: 24
      },
      valid: false,
      touched: false
    };
  }

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
      loading: false,
    };

    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    this.setState({ loading: true });

    axios
      .post('/orders.json', order)
      .then((_) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((_) => this.setState({ loading: false }));
  };

  checkValidity = (checkedValue, validationRules) => {
    let isValid = true;

    if(validationRules.required) {
      isValid = checkedValue.trim() !== '' && isValid;
    }

    if(validationRules.minLength){
      isValid = checkedValue.length >= validationRules.minLength && isValid;
    }

    if(validationRules.maxLength){
      isValid = checkedValue.length <= validationRules.maxLength && isValid;
    }

    return isValid;
  };

  inputChangeHandler = (event, inputId) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedElement = {
      ...updatedOrderForm[inputId],
    };
    let formIsValid = true;

    for(let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid;
    }

    updatedElement.value = event.target.value;
    updatedElement.valid = this.checkValidity(
      updatedElement.value,
      updatedElement.validation
    );
    updatedElement.touched = true;
    updatedOrderForm[inputId] = updatedElement;

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElements = [];

    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
        <Button btnType='Success' disabled={!this.state.formIsValid}>ORDER NOW</Button>
      </form>
    );

    if(this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
