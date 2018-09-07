import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as authSelectors from '../../reducers/auth/selectors';
import * as authActions from '../../reducers/auth/actions';
import { Redirect } from 'react-router-dom';
import withMainLayout from '../../hoc/withMainLayout';
import validation from '../../services/helpers/dataValidation';
import FormInput from '../../components/FormInput';
import Box from 'react-bulma-components/lib/components/box';
import withNotifications from '../../hoc/withNotifications';

class Register extends Component {
  _onSubmit = values => {
    this.props.signup(values);
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    if (this.props.isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    } else {
      return (
        <div className="container has-text-centered is-mobile">
          <div className="column is-6-table is-offset-3-tablet is-4-desktop is-offset-4-desktop">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">Please signup to proceed.</p>
            <Box>
              <form>
                <Field
                  label="First and Last Name"
                  name="username"
                  placeholder="Username"
                  component={FormInput}
                  validate={validation.fullnameValidation}
                />
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
            </Box>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(authActions.signup(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'signup' })(withMainLayout(withNotifications(Register))));
