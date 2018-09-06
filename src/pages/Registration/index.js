import React, { Component } from 'react';
import style from './styles.scss';
import withMainLayout from '../../hoc/withMainLayout';
class Registration extends Component {
  render() {
    return (
      <div>
        <h1>Registration page</h1>
      </div>
    );
  }
}

export default withMainLayout(Registration);
