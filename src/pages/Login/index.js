import React, { Component } from 'react';
import { connect } from 'react-redux';
// import style from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import * as authSelectors from '../../reducers/auth/selectors';
import * as authActions from '../../reducers/auth/actions';
import { Redirect } from 'react-router-dom';
import withMainLayout from '../../hoc/withMainLayout';
import validation from '../../services/helpers/dataValidation';
import FormInput from '../../components/FormInput';
import Box from 'react-bulma-components/lib/components/box';

class Login extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={{ pathname: '/' }} />;
    } else {
      return (
        <div className="container has-text-centered is-mobile">
          <div className="column is-6 is-offset-3">
            <h3 class="title has-text-grey">Login</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <Box>
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
                <div class="field is-grouped">
                  <div class="control">
                    <a class="button is-link">Submit</a>
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
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  signin: userData => dispatch(authActions.signin(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(withMainLayout(Login)));
