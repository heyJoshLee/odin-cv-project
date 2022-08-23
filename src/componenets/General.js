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
    console.log(e);
  }

  render() {
    const { handleOnChange, handleOnSubmit, state } = this;
    return (
      <div className="general">
        <form onChange={handleOnChange}>
          <label htmlFor="first-name">
            First Name
            <input id="first-name" name="firstName" placeholder="John" value={state.firstName} onChange={handleOnChange} />
          </label>

          <input />
        </form>
      </div>
    );
  }
}

export default General;
