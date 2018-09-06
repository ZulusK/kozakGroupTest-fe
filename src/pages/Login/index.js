import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import {
  selectors as authSelectors,
  actions as authActions
} from '../../reducers/session';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state)
});

const mapDispatchToProps = dispatch => ({
  signin: userData => dispatch(authActions.signin(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(Login));
