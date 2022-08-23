/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: '',
      imagePath: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    const keyName = e.target.name;
    const { value } = e.target;
    this.setState({ [keyName]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { handleOnChange, handleOnSubmit, state } = this;
    return (
      <div className="general">
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="firstName" placeholder="John" value={state.firstName} onChange={handleOnChange} />

          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" name="lastName" placeholder="Smith" value={state.lastName} onChange={handleOnChange} />

          <label htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="123 Main Street, New York, NY" value={state.address} onChange={handleOnChange} />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" name="phoneNumber" placeholder="555-555-5555" value={state.phoneNumber} onChange={handleOnChange} />

          <label htmlFor="email">Email</label>

          <input id="email" name="email" placeholder="john@gmail.com" value={state.email} onChange={handleOnChange} />

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default General;
