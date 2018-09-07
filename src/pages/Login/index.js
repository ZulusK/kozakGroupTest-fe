import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as authSelectors from '../../reducers/auth/selectors';
import * as authActions from '../../reducers/auth/actions';
import { Redirect } from 'react-router-dom';
import withMainLayout from '../../hoc/withMainLayout';
import validation from '../../services/helpers/dataValidation';
import FormInput from '../../components/FormInput';
import withUnauthorizedRequired from '../../hoc/withUnauthorizedRequired';

class Login extends Component {
  _onSubmit = values => {
    this.props.signin(values);
  };
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="container has-text-centered is-mobile">
        <div className="column is-6-tablet is-offset-3-tablet is-4-desktop is-offset-4-desktop">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <form>
              <Field
                label="Email Address"
                name="email"
                placeholder="Email"
                component={FormInput}
                validate={validation.emailValidation}
              />
              <Field
                label="Password"
                name="password"
                placeholder="Password"
                type="Password"
                secure
                component={FormInput}
                validate={validation.passwordValidation}
              />
              <div className="field is-grouped">
                <div className="control">
                  <a
                    className="button is-link"
                    disabled={submitting}
                    onClick={handleSubmit(this._onSubmit)}
                  >
                    Submit
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  signin: userData => dispatch(authActions.signin(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: 'login' })(withMainLayout(withUnauthorizedRequired(Login)))
);
