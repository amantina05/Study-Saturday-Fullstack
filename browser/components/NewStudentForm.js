import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    //update the state according to the form input
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    //will take the information & clear the state
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });
    // alert('a name was submitted:' + this.state.firstName);
  }
  render() {
    console.log('console log from new student form', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
