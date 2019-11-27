import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

export default class NewStudentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
  render() {
    return (
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <button type="submit">Submit</button>
      </div>
    );
  }
}
